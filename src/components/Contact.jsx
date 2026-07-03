import { links, services } from '../data.js'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact__panel">

        <div className="section__head">
          <span className="section__kicker">Performances</span>
          <h2 className="section__title">What do you need?</h2>
          <p className="section__intro">
            From a single guitar in the corner to a full quartet on stage, Paul
            tailors the sound to the room and the occasion.
          </p>
        </div>
  
        <div className="cards">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__desc">{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="contact__panel" style={{ marginTop: '3rem' }}>
          <span className="section__kicker">Booking</span>
          <h2 className="section__title">Let's make your event sound great.</h2>
          <p className="contact__intro">
            Available throughout the Puget Sound for corporate events, concerts,
            wine bars, coffee houses, weddings, and private functions — as a
            soloist or with a full ensemble. Reach out with your date and venue
            and Paul will get right back to you.
          </p>
  
          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${links.email}`}>
              Email for booking
            </a>
            <a
              className="btn btn--ghost"
              href={links.facebook}
              target="_blank"
              rel="noreferrer"
            >
              Follow on Facebook
            </a>
          </div>
  
          <p className="contact__note">
            Prefer email? Write to{' '}
            <a href={`mailto:${links.email}`}>{links.email}</a>
          </p>
        </div>
      </div>
    </section>
  )
}
