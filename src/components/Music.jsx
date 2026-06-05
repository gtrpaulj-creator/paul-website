import { streaming, links } from '../data.js'

export default function Music() {
  return (
    <section className="section music" id="music">
      <div className="section__head">
        <span className="section__kicker">Music</span>
        <h2 className="section__title">Coming Home</h2>
        <p className="section__intro">
          Paul's solo album — featuring Darren Motamedy on the opening track.
          Stream it anywhere, or catch live performances on YouTube.
        </p>
      </div>

      <div className="music__grid">
        <div className="album">
          <div className="album__art" aria-hidden="true">
            <span className="album__art-title">Coming&nbsp;Home</span>
            <span className="album__art-artist">Paul Johnson</span>
          </div>
        </div>

        <div className="music__body">
          <p className="music__meta">Album · 2010 · Smooth / Contemporary Jazz</p>
          <p>
            Recorded under his own name, <em>Coming Home</em> captures the warmth
            and ease Paul is known for on stage. Physical CDs are also available
            at live shows.
          </p>

          <div className="music__links">
            {streaming.map((s) => (
              <a
                key={s.name}
                className="pill"
                href={s.href}
                target="_blank"
                rel="noreferrer"
              >
                {s.name}
              </a>
            ))}
          </div>

          <a
            className="btn btn--ghost music__yt"
            href={links.youtube}
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube ↗
          </a>
        </div>
      </div>

      <div className="music__player">
        <iframe
          title="Coming Home — Paul Johnson on Spotify"
          src={links.spotifyEmbed}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  )
}
