import { bands } from '../data.js'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section__head">
        <span className="section__kicker">About</span>
        <h2 className="section__title">Guitarist</h2>
      </div>

      <div className="about__grid">
        <div className="about__body">
          <p>
            Based in the Puget Sound area, Paul Johnson is an acoustic and
            electric guitarist who has spent his career making music feel
            effortless. He performs as a soloist, leads trios and quartets, and
            is a trusted sideman for vocalists and bands across the region.
          </p>
          <p>
            A graduate of Central Washington University with a degree in music
            education, Paul taught in the public school system before devoting
            himself to performing. In 2007 he began a long-running collaboration
            with saxophonist Darren Motamedy, and the two have shared stages
            throughout the Northwest ever since.
          </p>
          <p>
            Whether it's a quiet wine bar or a corporate ballroom, Paul brings
            the same thing every time: a smooth, professional environment that
            sounds as good in the background as it does up front.
          </p>

          <div className="about__bands">
            <span className="about__bands-label">Plays with</span>
            <ul>
              {bands.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="about__stats">
          <div className="stat">
            <span className="stat__num">15+</span>
            <span className="stat__label">Years performing across the Puget Sound</span>
          </div>
          <div className="stat">
            <span className="stat__num">1</span>
            <span className="stat__label">Solo album, <em>Coming Home</em> (2010)</span>
          </div>
          <div className="stat">
            <span className="stat__num">4</span>
            <span className="stat__label">Ensemble formats — solo to quartet</span>
          </div>
        </aside>
      </div>
    </section>
  )
}
