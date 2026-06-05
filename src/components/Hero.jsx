export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner hero__inner--split">
        <div className="hero__copy">
          <p className="hero__eyebrow">Acoustic &amp; Electric Jazz Guitar · Puget Sound</p>
          <h1 className="hero__title">
            Smooth, professional guitar for the moments that matter.
          </h1>
          <p className="hero__lede">
            Paul Johnson brings a warm, polished sound to corporate events,
            concerts, wine bars, and private functions — solo or with a full
            ensemble.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              Book Paul
            </a>
            <a className="btn btn--ghost" href="#music">
              Listen
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          {/* To use a real photo: drop an image at public/portrait.jpg.
              It appears automatically; until then the placeholder shows. */}
          <div className="portrait">
            <span className="portrait__placeholder">
              Add Paul's photo
              <small>public/portrait.jpg</small>
            </span>
            <img
              className="portrait__img"
              src="/portrait.jpg"
              alt="Paul Johnson"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  )
}
