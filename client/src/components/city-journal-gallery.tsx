import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { kislovodskGalleryPhotos, type CityJournalPhoto } from "../content/city-journal-photos";
import "./city-journal-gallery.css";

export function CityJournalGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef(false);

  const selectedPhoto = selectedIndex === null ? null : kislovodskGalleryPhotos[selectedIndex];
  const viewerOpen = selectedPhoto !== null;

  useEffect(() => {
    if (!viewerOpen) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [viewerOpen]);

  const closeViewer = useCallback(() => {
    setSelectedIndex(null);
    window.requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  const openViewer = (index: number, event: MouseEvent<HTMLButtonElement>) => {
    openerRef.current = event.currentTarget;
    setSelectedIndex(index);
  };

  const showAdjacent = useCallback((direction: -1 | 1) => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return (current + direction + kislovodskGalleryPhotos.length) % kislovodskGalleryPhotos.length;
    });
  }, []);

  useEffect(() => {
    if (selectedIndex === null) {
      wasOpenRef.current = false;
      return;
    }
    if (!wasOpenRef.current) {
      dialogRef.current?.showModal();
      closeButtonRef.current?.focus();
      wasOpenRef.current = true;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeViewer();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showAdjacent(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showAdjacent(1);
      } else if (event.key === "Tab") {
        const dialog = document.querySelector<HTMLElement>(".cj-gallery-viewer");
        const focusable = dialog?.querySelectorAll<HTMLElement>("button:not([disabled])");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, closeViewer, showAdjacent]);

  return (
    <section className="cj-gallery" aria-labelledby="cj-gallery-heading">
      <div className="cj-gallery-heading">
        <div>
          <div className="cj-kicker">Из подборки хозяев</div>
          <h3 id="cj-gallery-heading">Рядом со Старым озером</h3>
        </div>
        <p>Площадки, павильоны и день у воды. Нажмите на снимок, чтобы увидеть полный кадр.</p>
      </div>
      <div className="cj-gallery-grid">
        {kislovodskGalleryPhotos.map((photo, index) => (
          <GalleryTile
            key={photo.id}
            photo={photo}
            index={index}
            onOpen={openViewer}
          />
        ))}
      </div>

      {selectedPhoto && selectedIndex !== null && (
        <dialog
          ref={dialogRef}
          className="cj-gallery-backdrop"
          aria-labelledby="cj-gallery-viewer-caption"
          aria-describedby="cj-gallery-viewer-position"
          onCancel={(event) => {
            event.preventDefault();
            closeViewer();
          }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeViewer();
          }}
        >
          <div
            className="cj-gallery-viewer"
          >
            <button
              className="cj-gallery-control cj-gallery-close"
              type="button"
              aria-label="Закрыть фотографию"
              onClick={closeViewer}
              ref={closeButtonRef}
            >
              <X size={20} aria-hidden="true" />
            </button>
            <button
              className="cj-gallery-control cj-gallery-previous"
              type="button"
              aria-label="Предыдущая фотография"
              onClick={() => showAdjacent(-1)}
            >
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <figure className="cj-gallery-viewer-figure">
              <img
                src={selectedPhoto.fullSrc}
                alt={selectedPhoto.alt}
                width={selectedPhoto.width}
                height={selectedPhoto.height}
                decoding="async"
              />
              <figcaption>
                <strong id="cj-gallery-viewer-caption">{selectedPhoto.caption}</strong>
                <span id="cj-gallery-viewer-position">
                  {selectedIndex + 1} из {kislovodskGalleryPhotos.length}
                </span>
              </figcaption>
            </figure>
            <button
              className="cj-gallery-control cj-gallery-next"
              type="button"
              aria-label="Следующая фотография"
              onClick={() => showAdjacent(1)}
            >
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </dialog>
      )}
    </section>
  );
}

function GalleryTile({
  photo,
  index,
  onOpen,
}: {
  photo: CityJournalPhoto;
  index: number;
  onOpen: (index: number, event: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <figure className="cj-gallery-tile">
      <button
        className="cj-gallery-tile-button"
        type="button"
        onClick={(event) => onOpen(index, event)}
        aria-label={`Открыть фотографию: ${photo.caption}`}
      >
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes="(max-width: 390px) calc(100vw - 48px), (max-width: 760px) calc((100vw - 60px) / 2), (max-width: 1252px) 42vw, 480px"
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
        />
        <span className="cj-gallery-open-label">Смотреть</span>
      </button>
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}