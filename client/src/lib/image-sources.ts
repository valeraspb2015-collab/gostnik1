export interface ResponsiveImageSource {
  src: string;
  srcSet: string;
}

const optimizedImages = import.meta.glob<string>("@assets/optimized/*.webp", {
  eager: true,
  import: "default",
});

function getVariant(stem: string, width: 480 | 960): string {
  const suffix = `/${stem}-${width}.webp`;
  const match = Object.entries(optimizedImages).find(([path]) => path.endsWith(suffix));

  if (!match) {
    throw new Error(`Optimized image variant is missing: ${stem}-${width}.webp`);
  }

  return match[1];
}

export function responsiveAsset(stem: string): ResponsiveImageSource {
  const small = getVariant(stem, 480);
  const large = getVariant(stem, 960);

  return {
    src: large,
    srcSet: `${small} 480w, ${large} 960w`,
  };
}

export const heroMain = responsiveAsset("20250611_121716_1774812417283");
export const heroThumb1 = responsiveAsset("DJ6B7582-HDR_1774812201681");
export const heroThumb2 = responsiveAsset("IMG_2094_1774812247267");
export const heroThumb3 = responsiveAsset("9f04a671-6b30-426e-b9f0-a60718191307_1774812359059");

export const photo_mak1 = responsiveAsset("20250611_121716_1774877908210");
export const photo_mak2 = responsiveAsset("20250611_121430_1774877908209");
export const photo_mak3 = responsiveAsset("20250611_121445_1774877908209");
export const photo_mak4 = responsiveAsset("20250611_121832_1774877908210");
export const photo_mak5 = responsiveAsset("20250611_121908_1774877908211");

export const photo_kurg1 = responsiveAsset("image-09-05-26-22-27-4_1778492818295");
export const photo_kurg2 = responsiveAsset("image-09-05-26-22-27-8_1778492818296");
export const photo_kurg3 = responsiveAsset("image-09-05-26-22-27-5_1778492818295");
export const photo_kurg4 = responsiveAsset("image-09-05-26-22-27-9_1778492818297");
export const photo_kurg5 = responsiveAsset("image-09-05-26-22-27-17_1778492818299");
export const photo_kurg6 = responsiveAsset("image-09-05-26-22-27-10_1778492818297");
export const photo_kurg7 = responsiveAsset("image-09-05-26-22-27-13_1778492818298");
export const photo_kurg8 = responsiveAsset("image-09-05-26-22-27-14_1778492818298");
export const photo_kurg9 = responsiveAsset("image-09-05-26-22-27-15_1778492818298");
export const photo_kurg10 = responsiveAsset("image-09-05-26-22-27-6_1778492818296");
export const photo_kurg11 = responsiveAsset("image-09-05-26-22-27-7_1778492818296");
export const photo_kurg12 = responsiveAsset("image-09-05-26-22-27-11_1778492818297");
export const photo_kurg13 = responsiveAsset("image-09-05-26-22-27-2_1778492818294");
export const photo_kurg14 = responsiveAsset("image-09-05-26-22-27-3_1778492818295");
export const photo_kurg15 = responsiveAsset("image-09-05-26-22-27-12_1778492818297");
export const photo_kurg16 = responsiveAsset("image-09-05-26-22-27-1_1778492818294");
export const photo_kurg17 = responsiveAsset("image-09-05-26-22-27-16_1778492818298");
export const photo_kurg18 = responsiveAsset("IMG_5848_1778492818299");

export const photo_spb76_1 = responsiveAsset("IMG_2334_Original_1778840983697");
export const photo_spb76_2 = responsiveAsset("PHOTO-2024-06-04-13-04-17_1778840983698");
export const photo_spb76_3 = responsiveAsset("IMG_1883_1778840983693");
export const photo_spb76_4 = responsiveAsset("IMG_1886_1778840983695");
export const photo_spb76_5 = responsiveAsset("IMG_1885_1778840983694");
export const photo_spb76_6 = responsiveAsset("IMG_1892_1778840983697");
export const photo_spb76_7 = responsiveAsset("2022-03-19_16.32.56_1778840983693");
export const photo_spb76_8 = responsiveAsset("2022-03-19_16.32.59_1778840983693");
export const photo_spb76_9 = responsiveAsset("IMG_1884_1778840983694");
export const photo_spb76_10 = responsiveAsset("IMG_1891_1778840983697");
export const photo_spb76_11 = responsiveAsset("IMG_1887_1778840983696");
export const photo_spb76_12 = responsiveAsset("IMG_1890_1778840983696");
export const photo_spb76_13 = responsiveAsset("2022-03-19_16.32.54_1778840983690");
export const photo_spb76_14 = responsiveAsset("2022-03-19_16.32.55_1778840983692");
export const photo_spb76_15 = responsiveAsset("IMG_1889_1778840983696");