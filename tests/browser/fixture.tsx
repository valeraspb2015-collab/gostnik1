import { createRoot } from "react-dom/client";
import { CityJournalSection } from "../../client/src/components/city-journal";

// Real production section and CSS, with no API, booking widget or database.
// Space on both sides makes scroll-lock assertions meaningful at any viewport.
createRoot(document.getElementById("root")!).render(
  <>
    <div style={{ height: 400 }}><button>До блокнота</button></div>
    <CityJournalSection />
    <div style={{ height: 1200 }}><button>После блокнота</button></div>
  </>,
);