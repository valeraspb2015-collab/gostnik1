import { useState } from "react";
import { ArrowDown, ArrowRight, BookOpen, MapPin } from "lucide-react";
import { cityJournalContent, type CityJournalKey } from "../content/city-journal";
import { kislovodskCoverPhoto, kislovodskEntrancePhoto } from "../content/city-journal-photos";
import { CityJournalGallery } from "./city-journal-gallery";
import "./city-journal.css";

export function CityJournalSection() {
  const [city, setCity] = useState<CityJournalKey>("petersburg");
  const [storyOpen, setStoryOpen] = useState(false);
  const copy = cityJournalContent[city];
  const coverPhoto = city === "kislovodsk" ? kislovodskCoverPhoto : null;
  const entrancePhoto = city === "kislovodsk" ? kislovodskEntrancePhoto : null;

  const switchCity = (nextCity: CityJournalKey) => {
    setCity(nextCity);
    setStoryOpen(false);
  };

  return (
    <section
      className="cj-page"
      id="city-journal"
      aria-labelledby="city-journal-heading"
    >
      <div className="cj-shell">
        <header className="cj-header">
          <div className="cj-masthead">Город глазами своих</div>
          <nav className="cj-nav" aria-label="Разделы блокнота">
            <a className="cj-link" href="#city-journal-story">История</a>
            <a className="cj-link" href="#city-journal-notes">Перед прогулкой</a>
            <a className="cj-link" href="#city-journal-about">О блокноте</a>
          </nav>
        </header>

        <div className="cj-citybar">
          <div className="cj-switch" role="group" aria-label="Выбрать город" data-testid="city-journal-city-switch">
            <button
              type="button"
              aria-pressed={city === "petersburg"}
              onClick={() => switchCity("petersburg")}
            >
              Петербург
            </button>
            <button
              type="button"
              aria-pressed={city === "kislovodsk"}
              onClick={() => switchCity("kislovodsk")}
            >
              Кисловодск
            </button>
          </div>
          <span className="cj-edition"><MapPin size={12} strokeWidth={1.7} /> &nbsp;{copy.edition}</span>
        </div>

        <section className="cj-hero" aria-label={`Знакомство с городом: ${copy.short}`}>
          <div className="cj-hero-copy">
            <div className="cj-eyebrow cj-kicker">{copy.label} · заметки к поездке</div>
            <h2 className="cj-serif" id="city-journal-heading">
              {copy.titleLead}<br />{copy.titleSecondLine}<em>{copy.titleEmphasis}</em>
            </h2>
            <p className="cj-deck">{copy.tagline}</p>
            <a className="cj-hero-cta" href="#city-journal-story">
              Открыть блокнот <ArrowDown size={14} />
            </a>
          </div>
          <div className="cj-hero-visual">
            <div className="cj-photo-frame">
              <img
                key={copy.image}
                src={coverPhoto?.src ?? copy.image}
                srcSet={coverPhoto?.srcSet}
                sizes={coverPhoto ? "(max-width: 760px) 100vw, 55vw" : undefined}
                width={coverPhoto?.width}
                height={coverPhoto?.height}
                alt={copy.imageAlt}
              />
            </div>
            <div className="cj-photo-tag">
              <small>На этой странице</small>
              <strong>{copy.imageLabel}</strong>
            </div>
            <span className="cj-photo-index">ГОРОД · {city === "petersburg" ? "01" : "02"}</span>
          </div>
        </section>

        <div className="cj-manifesto">
          <div className="cj-manifesto-label">Редакционные заметки</div>
          <p>Не путеводитель на все случаи. Личный фото-блокнот хозяев — с прогулками, полезными подсказками и вниманием к обычному.</p>
        </div>

        <section className="cj-section" id="city-journal-story" aria-labelledby="city-journal-story-heading">
          <div className="cj-section-heading">
            <div>
              <div className="cj-kicker">Одна заметка из города</div>
              <h3 id="city-journal-story-heading">Смотреть не спеша</h3>
            </div>
            <p>Небольшая история, чтобы почувствовать характер места ещё до поездки.</p>
          </div>
          <article className="cj-story">
            <div className="cj-story-image">
              <img
                src={entrancePhoto?.src ?? copy.storyImage}
                srcSet={entrancePhoto?.srcSet}
                sizes={entrancePhoto ? "(max-width: 760px) 100vw, 54vw" : undefined}
                width={entrancePhoto?.width}
                height={entrancePhoto?.height}
                alt={copy.storyImageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="cj-story-copy">
              <div className="cj-story-meta">{copy.storyTag}<span />Заметка к прогулке</div>
              <h4>{copy.storyTitle}</h4>
              <p>{copy.storyIntro}</p>
              <button
                className="cj-read"
                type="button"
                aria-expanded={storyOpen}
                aria-controls="city-journal-story-content"
                data-testid="city-journal-story-toggle"
                onClick={() => setStoryOpen((open) => !open)}
              >
                {storyOpen ? "Свернуть заметку" : "Читать заметку"} <ArrowRight size={14} />
              </button>
              <div
                className="cj-story-expanded"
                id="city-journal-story-content"
                hidden={!storyOpen}
              >
                <p>{copy.storyBody}</p>
                {copy.storyTip && <p><strong>Перед выходом:</strong> {copy.storyTip}</p>}
              </div>
            </div>
          </article>
        </section>
        {city === "kislovodsk" && <CityJournalGallery key={city} />}
      </div>

      <section className="cj-notes" id="city-journal-notes" aria-labelledby="city-journal-notes-heading">
        <div className="cj-shell cj-notes-inner">
          <div>
            <div className="cj-kicker">Чтобы день сложился</div>
            <h3 id="city-journal-notes-heading">Немного подготовки.<br />Больше свободы.</h3>
            <p className="cj-notes-intro">{copy.prompt} Несколько спокойных ориентиров перед тем, как выйти в город.</p>
          </div>
          <div className="cj-note-list">
            {copy.notes.map(([title, text], index) => (
              <div className="cj-note-row" key={title}>
                <span className="cj-note-num">0{index + 1}</span>
                <div><h4>{title}</h4><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cj-shell">
        <section className="cj-bottom" id="city-journal-about" aria-labelledby="city-journal-about-heading">
          <h3 className="cj-bottom-quote" id="city-journal-about-heading">
            Хорошая поездка начинается с ощущения: <em>здесь тебе рады.</em>
          </h3>
          <div className="cj-bottom-side">
            <BookOpen size={18} strokeWidth={1.5} />
            <p>Этот блокнот задуман как продолжение гостеприимства ГОСТЬНИК: полезный, живой и собранный вокруг настоящих заметок хозяев.</p>
            {copy.editorialNote && (
              <div className="cj-demo-note">
                {copy.editorialNote} Публикация — только после отдельного решения владельца.
              </div>
            )}
          </div>
        </section>
        <footer className="cj-footer">
          <BookOpen size={15} strokeWidth={1.5} aria-hidden="true" />
          <div className="cj-sources">
            {copy.photoCredit}.
          </div>
        </footer>
      </div>
    </section>
  );
}