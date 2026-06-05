import { links } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          Paul Johnson
          <span>Guitarist · Puget Sound, WA</span>
        </div>

        <nav className="footer__links">
          <a href="#about">About</a>
          <a href="#music">Music</a>
          <a href="#shows">Shows</a>
          <a href="#performances">Performances</a>
          <a href="#contact">Book</a>
          <a href={links.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={links.youtube} target="_blank" rel="noreferrer">
            YouTube
          </a>
        </nav>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} Paul Johnson. All rights reserved.
      </p>
    </footer>
  )
}
