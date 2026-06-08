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
            Paul Johnson is an acoustic and electric guitarist based in the 
            Puget Sound area. He performs as a soloist, leads small groups, 
            and also plays for other artists and bands in the Northwest including
            Darren Motamedy, Brandon Willis, Gruv Collective, Cosmic Vinyl and 
            Wally and the Beaves.
          </p>
          <p>
            A partial list of venues Paul has played for includes: 
            The Space Needle, Meydenbauer Center, the Chihuly Glass Museum, 
            the Washington State Convention Center, the Muckleshoot Casino, 
            the Lake Chelan Jazz Festival, the City of Maple Valley, 
            the City of Enumclaw, the City of Auburn, and many local coffee shops
            and wine bars.
          </p>
          <p>
            Whether it's a playing for a quiet event as a soloist, or in a ballroom 
            for a business gathering, Paul provides a smooth, professional environment
            that caters to the needs of the occasion.
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
