import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Music from './components/Music.jsx'
import Shows from './components/Shows.jsx'
import Performances from './components/Performances.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Music />
        <Shows />
        <Performances />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
