import { shows, links } from '../data.js'

export default function Shows() {
  return (
    <section className="section shows" id="shows">
      <div className="section__head">
        <span className="section__kicker">Calendar</span>
        <h2 className="section__title">Upcoming shows</h2>
        <p className="section__intro">
          Catch Paul live around the Puget Sound. Dates are added regularly —
          follow along on Facebook for the latest.
        </p>
      </div>

      {shows.length > 0 ? (
        <ul className="showlist">
          {shows.map((s, i) => (
            <li className="show" key={i}>
              <div className="show__date">
                <span className="show__day">{s.date}</span>
                <span className="show__time">{s.time}</span>
              </div>
              <div className="show__info">
                <span className="show__venue">{s.venue}</span>
                <span className="show__city">{s.city}</span>
              </div>
              <span className="show__detail">{s.detail}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="shows__empty">
          No public dates posted right now — check back soon or get in touch to
          book a private event.
        </p>
      )}

      <div className="shows__cta">
        <a
          className="btn btn--ghost"
          href={links.facebook}
          target="_blank"
          rel="noreferrer"
        >
          See more on Facebook ↗
        </a>
      </div>
    </section>
  )
}
