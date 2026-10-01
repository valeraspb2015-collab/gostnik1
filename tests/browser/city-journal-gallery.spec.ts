import { test, expect, type Page, type Locator } from "@playwright/test";

// Pin expected positions and captions separately from production photo data.
const firstCaption = "Горка и качели у Старого озера";
const lastCaption = "Спортивное мероприятие у Старого озера";
const tiles = (page: Page) => page.getByRole("button", { name: /^Открыть фотографию:/ });
const dialog = (page: Page) => page.getByRole("dialog");
const closeButton = (page: Page) => page.getByRole("button", { name: "Закрыть фотографию", exact: true });
const position = (page: Page) => page.locator("#cj-gallery-viewer-position");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Кисловодск", exact: true }).click();
  await expect(tiles(page)).toHaveCount(7);
});

// Share every scenario across all six projects. Do not stub showModal, skip a
// browser, or replace native keyboard events with direct state changes.
async function openPhoto(page: Page, opener: Locator) {
  await opener.click();
  await expect(dialog(page)).toBeVisible();
  // An open attribute alone is not enough: this must be a native modal in
  // the browser's top layer, not a component test's showModal stub.
  await expect.poll(() => dialog(page).evaluate((node) => node.matches(":modal"))).toBe(true);
  await expect(closeButton(page)).toBeFocused();
  await expect.poll(() => page.evaluate(() => document.documentElement.style.overflow)).toBe("hidden");
}

async function assertClosed(page: Page, opener: Locator, overflow: string) {
  await expect(dialog(page)).toHaveCount(0);
  await expect(opener).toBeFocused();
  await expect.poll(() => page.evaluate(() => document.documentElement.style.overflow)).toBe(overflow);
}

test("opens and closes repeatedly; restores the exact opener, scroll position and scrolling", async ({ page }) => {
  await page.evaluate(() => { document.documentElement.style.overflow = "auto"; });
  for (const index of [0, 3, 6, 0]) {
    const opener = tiles(page).nth(index);
    await opener.scrollIntoViewIfNeeded();
    const before = await page.evaluate(() => window.scrollY);
    expect(before).toBeGreaterThan(0);
    await openPhoto(page, opener);
    await expect(position(page)).toHaveText(`${index + 1} из 7`);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(before);
    // Send actual wheel input and wait for a frame, rather than changing
    // scrollY programmatically (which can bypass overflow locking).
    await page.mouse.move(10, 10);
    await page.mouse.wheel(0, 180);
    await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    expect(await page.evaluate(() => window.scrollY)).toBe(before);
    await closeButton(page).click();
    await assertClosed(page, opener, "auto");
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(before);
    await page.mouse.wheel(0, 180);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(before);
  }
});

test("Escape closes the native modal and leaves no stale keyboard or scroll lock", async ({ page }) => {
  const opener = tiles(page).nth(2);
  for (let round = 0; round < 3; round++) {
    await openPhoto(page, opener);
    await page.keyboard.press("ArrowRight");
    await expect(position(page)).toHaveText("4 из 7");
    await page.keyboard.press("Escape");
    await assertClosed(page, opener, "");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("Escape");
    await expect(dialog(page)).toHaveCount(0);
    await expect(opener).toBeFocused();
  }
});

test("arrow keys and navigation buttons wrap between first and last without reopening the dialog", async ({ page }) => {
  const opener = tiles(page).first();
  await openPhoto(page, opener);
  const originalDialog = await dialog(page).elementHandle();
  expect(originalDialog).not.toBeNull();
  await expect(dialog(page)).toHaveAccessibleName(firstCaption);
  await page.keyboard.press("ArrowLeft");
  await expect(position(page)).toHaveText("7 из 7");
  await expect(dialog(page)).toHaveAccessibleName(lastCaption);
  await expect(closeButton(page)).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await expect(position(page)).toHaveText("1 из 7");
  await expect(dialog(page)).toHaveAccessibleName(firstCaption);
  for (let index = 2; index <= 7; index++) {
    await page.keyboard.press("ArrowRight");
    await expect(position(page)).toHaveText(`${index} из 7`);
  }
  await page.keyboard.press("ArrowRight");
  await expect(position(page)).toHaveText("1 из 7");
  const previous = page.getByRole("button", { name: "Предыдущая фотография", exact: true });
  const next = page.getByRole("button", { name: "Следующая фотография", exact: true });
  await previous.click();
  await expect(position(page)).toHaveText("7 из 7");
  await next.click();
  await expect(position(page)).toHaveText("1 из 7");
  // Safari/WebKit intentionally does not focus buttons on mouse click.
  // Require focus containment for pointer use, and exact focus for keyboard use.
  await expect.poll(() => dialog(page).evaluate((node) => node.contains(document.activeElement))).toBe(true);
  await closeButton(page).focus();
  await page.keyboard.press("Tab");
  await expect(previous).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(position(page)).toHaveText("7 из 7");
  await expect(previous).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(next).toBeFocused();
  await page.keyboard.press("Space");
  await expect(position(page)).toHaveText("1 из 7");
  await expect(next).toBeFocused();
  await expect.poll(() => dialog(page).evaluate((node) => node.matches(":modal"))).toBe(true);
  expect(await originalDialog!.evaluate((node) => node.isConnected && node === document.querySelector("dialog"))).toBe(true);
  await page.keyboard.press("Escape");
  await assertClosed(page, opener, "");
});

test("Tab and Shift+Tab cycle only through viewer controls; background cannot steal focus", async ({ page }) => {
  const opener = tiles(page).nth(4);
  await openPhoto(page, opener);
  const previous = page.getByRole("button", { name: "Предыдущая фотография", exact: true });
  const next = page.getByRole("button", { name: "Следующая фотография", exact: true });
  for (let round = 0; round < 3; round++) {
    for (const control of [previous, next, closeButton(page)]) {
      await page.keyboard.press("Tab");
      await expect(control).toBeFocused();
    }
    for (const control of [next, previous, closeButton(page)]) {
      await page.keyboard.press("Shift+Tab");
      await expect(control).toBeFocused();
    }
  }
  await opener.evaluate((node) => (node as HTMLButtonElement).focus());
  await expect(closeButton(page)).toBeFocused();
  await page.keyboard.press("Enter");
  await assertClosed(page, opener, "");
});

test("backdrop closes but clicking the photo does not", async ({ page }) => {
  const opener = tiles(page).last();
  await openPhoto(page, opener);
  await dialog(page).locator("img").click();
  await expect(dialog(page)).toBeVisible();
  // The full-screen dialog's padding is outside its inner viewer.
  await dialog(page).click({ position: { x: 2, y: 2 } });
  await assertClosed(page, opener, "");
});