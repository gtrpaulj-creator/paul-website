import { services } from '../data.js'

export default function Performances() {
  return (
    <section className="section performances" id="performances">
      <div className="section__head">
        <span className="section__kicker">Performances</span>
        <h2 className="section__title">However you need him</h2>
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
    </section>
  )
}
