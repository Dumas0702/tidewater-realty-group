import { useState } from 'react'
import coastalEstate from './assets/coastal-estate.jpg'
import teamBrand from './assets/tidewater-team-brand.webp'
import './App.css'

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Tidewater Realty Group home">
      <span className="brand-mark" aria-hidden="true"><i /></span>
      <span className="brand-name">TIDEWATER<small>REALTY GROUP</small></span>
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="topline">
        <div className="shell">
          <span>Serving Mobile &amp; Baldwin Counties</span>
          <div>
            <a href="tel:+12515911204">Michael 251.591.1204</a>
            <span className="separator">·</span>
            <a href="tel:+12514632442">Heather 251.463.2442</a>
          </div>
        </div>
      </div>
      <header>
        <div className="shell nav">
          <Brand />
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
            <a href="#buy-sell" onClick={closeMenu}>Buy</a>
            <a href="#buy-sell" onClick={closeMenu}>Sell</a>
            <a href="#communities" onClick={closeMenu}>Communities</a>
            <a href="#team" onClick={closeMenu}>Our Team</a>
            <a className="button outline" href="#contact" onClick={closeMenu}>Let&apos;s Talk</a>
          </nav>
          <button
            className="menu"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </header>
    </>
  )
}

function Hero() {
  return (
    <section className="hero" style={{ '--hero-image': `url(${coastalEstate})` }}>
      <div className="shell">
        <div className="hero-copy">
          <div className="eyebrow">Alabama Gulf Coast Real Estate</div>
          <h1>Let us help you find <em>paradise.</em></h1>
          <p>Local perspective, seasoned guidance, and a personal approach to buying and selling along the coast.</p>
          <div className="hero-actions">
            <a className="button primary" href="#search">Explore Homes</a>
            <a className="button outline" href="#contact">What&apos;s My Home Worth?</a>
          </div>
        </div>
      </div>
      <div className="hero-note">Michael &amp; Heather Hoven<br />Tidewater Realty Group</div>
    </section>
  )
}

function HomeSearch({ onDemoSearch }) {
  return (
    <div className="search-wrap shell" id="search">
      <form className="search-panel" onSubmit={onDemoSearch}>
        <div className="field">
          <label htmlFor="area">Where would you like to live?</label>
          <input id="area" placeholder="City, neighborhood, or ZIP" />
        </div>
        <div className="field">
          <label htmlFor="type">Property type</label>
          <select id="type" defaultValue="Any property">
            <option>Any property</option><option>Single-family home</option><option>Condo</option><option>Waterfront</option><option>Land</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="price">Price range</label>
          <select id="price" defaultValue="Any price">
            <option>Any price</option><option>Under $350K</option><option>$350K–$600K</option><option>$600K–$1M</option><option>$1M+</option>
          </select>
        </div>
        <button className="button primary" type="submit">Search Homes →</button>
      </form>
    </div>
  )
}

function Introduction() {
  return (
    <section className="introduction">
      <div className="shell intro-grid">
        <div>
          <div className="eyebrow">Your coast. Your story.</div>
          <div className="intro-stamp"><div><strong>2</strong>Local advisors<br />one shared standard</div></div>
        </div>
        <div className="intro-copy">
          <h2>Real estate feels different when it&apos;s personal.</h2>
          <p>At Tidewater Realty Group, every move begins with listening. Whether you are trading city lights for coastal mornings, moving across town, or preparing a longtime home for its next chapter, Michael and Heather bring clarity, care, and confident representation to the journey.</p>
          <a className="link-arrow" href="#team">Meet the Hovens <span>→</span></a>
        </div>
      </div>
    </section>
  )
}

function BuyerSeller() {
  return (
    <section className="paths" id="buy-sell">
      <div className="path-grid">
        <article className="path">
          <span className="num">01</span><h3>Find your place</h3>
          <p>From Mobile&apos;s historic neighborhoods to bayfront retreats and laid-back beach communities, discover the home—and lifestyle—that fits you.</p>
          <a className="link-arrow light" href="#search">Start your search <span>→</span></a>
        </article>
        <article className="path">
          <span className="num">02</span><h3>Make your move</h3>
          <p>Thoughtful positioning, polished marketing, and attentive communication designed to make your home stand out—and your next step feel clear.</p>
          <a className="link-arrow light" href="#contact">Request a home review <span>→</span></a>
        </article>
      </div>
    </section>
  )
}

function Communities() {
  const places = [
    { title: 'Eastern Shore', detail: 'Fairhope · Daphne · Spanish Fort', link: 'Explore the Eastern Shore' },
    { title: 'Mobile', detail: 'Historic charm, culture, and connection', link: 'Explore Mobile' },
    { title: 'Gulf Coast', detail: 'Orange Beach · Gulf Shores · Foley', link: 'Explore the coast' },
  ]
  return (
    <section id="communities">
      <div className="shell">
        <div className="communities-head">
          <div><div className="eyebrow">Explore the coast</div><h2>Find your kind<br />of paradise.</h2></div>
          <p>Each Gulf Coast community has its own rhythm. We&apos;ll help you understand the neighborhoods, the market, and the everyday life behind the address.</p>
        </div>
        <div className="community-grid">
          {places.map((place) => (
            <article className="community" key={place.title}>
              <h3>{place.title}</h3><p>{place.detail}</p><a href="#contact">{place.link} →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section className="team" id="team">
      <div className="shell team-grid">
        <div className="team-visual"><img src={teamBrand} alt="Michael and Heather Hoven of Tidewater Realty Group" /></div>
        <div className="team-copy">
          <div className="eyebrow">Meet your real estate team</div>
          <h2>Two perspectives.<br />One promise.</h2>
          <p>Heather&apos;s seasoned market expertise and Michael&apos;s fresh, relationship-first energy create a responsive team built around their clients. Together, they offer honest advice, thoughtful strategy, and the kind of follow-through that turns a transaction into a lasting relationship.</p>
          <div className="team-meta">
            <div><strong>Heather Hoven</strong><span>REALTOR® · 251.463.2442</span></div>
            <div><strong>Michael Hoven</strong><span>REALTOR® · 251.591.1204</span></div>
          </div>
          <a className="link-arrow" href="mailto:hdhoven@kw.com">Get to know the team <span>→</span></a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="shell">
        <h2>Ready to find your place on the coast?</h2>
        <p>Tell us where you are headed. We&apos;ll help you move forward with a clear plan and a trusted local team beside you.</p>
        <div className="cta-actions">
          <a className="button primary" href="mailto:hdhoven@kw.com?subject=Let's talk about Gulf Coast real estate">Connect with Heather</a>
          <a className="button outline" href="mailto:michaelhoven@kw.com?subject=Let's talk about Gulf Coast real estate">Connect with Michael</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="shell">
        <div className="footer-grid">
          <div><Brand /><p className="footer-copy">Thoughtful real estate guidance for buying and selling throughout Mobile and Baldwin Counties.</p></div>
          <div><div className="footer-title">Contact</div><div className="footer-links"><a href="tel:+12515911204">Michael · 251.591.1204</a><a href="mailto:michaelhoven@kw.com">michaelhoven@kw.com</a><a href="tel:+12514632442">Heather · 251.463.2442</a><a href="mailto:hdhoven@kw.com">hdhoven@kw.com</a></div></div>
          <div><div className="footer-title">Brokerage</div><div className="footer-links"><span>Keller Williams Mobile</span><span>Mobile, Alabama</span><span>Each office independently owned and operated.</span></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Tidewater Realty Group. All rights reserved.</span><span className="concept">Private website concept · Sample listing search for demonstration</span></div>
      </div>
    </footer>
  )
}

function App() {
  const [toastVisible, setToastVisible] = useState(false)
  const handleDemoSearch = (event) => {
    event.preventDefault()
    setToastVisible(true)
    window.setTimeout(() => setToastVisible(false), 4200)
  }

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <HomeSearch onDemoSearch={handleDemoSearch} />
        <Introduction />
        <BuyerSeller />
        <Communities />
        <Team />
        <Contact />
      </main>
      <Footer />
      <div className={toastVisible ? 'toast show' : 'toast'} role="status" aria-live="polite">This is a preview search—live listings can be connected in the full site.</div>
    </>
  )
}

export default App

