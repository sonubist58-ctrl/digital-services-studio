import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Clapperboard, Palette, PenTool, TableProperties, Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

const whatsapp = '916305259735';
const instagram = 'https://www.instagram.com/bistvlog_735/';
const services = [
  { icon: Code2, no: '01', title: 'Websites that work', desc: 'Landing pages, business websites and thoughtful fixes that make your online presence feel clear and credible.', tags: ['Web design', 'Development', 'Fixes'] },
  { icon: Clapperboard, no: '02', title: 'Video editing', desc: 'Scroll-stopping Reels and polished YouTube edits, shaped to hold attention and keep your story moving.', tags: ['Instagram Reels', 'YouTube', 'Short-form'] },
  { icon: Palette, no: '03', title: 'Graphic design', desc: 'Distinctive visuals for your brand, social channels and campaigns—made to look considered everywhere.', tags: ['Social graphics', 'Brand assets', 'Thumbnails'] },
  { icon: PenTool, no: '04', title: 'Words with purpose', desc: 'Content and scripts that sound like you, connect with the right people and make the next step obvious.', tags: ['Content', 'Video scripts', 'Captions'] },
  { icon: TableProperties, no: '05', title: 'Research & data', desc: 'Reliable data entry, Excel organization and focused research that gives you time back to do your best work.', tags: ['Excel', 'Data entry', 'Research'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = `Hi Digital Services Studio! I'm ${data.get('name')}.\n\nI'm interested in: ${data.get('service')}\n\nProject details: ${data.get('details')}\n\nEmail: ${data.get('email')}`;
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  return <>
    <header className="nav-wrap"><nav className="nav container">
      <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark"><Sparkles size={17} /></span><span>digital services<span className="brand-light"> studio</span></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}><a href="#services" onClick={closeMenu}>Services</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a><a className="nav-cta" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">Let’s talk <ArrowUpRight size={15} /></a></div>
    </nav></header>
    <main id="top">
      <section className="hero container">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> INDEPENDENT CREATIVE STUDIO <span className="eyebrow-line" /></div>
          <h1>Make your next<br /><span className="serif">move</span> <span className="outlined">matter.</span></h1>
          <p className="hero-lede">Your ideas deserve a digital presence that feels as good as it works. We help you build it—beautifully, thoughtfully, and without the fuss.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Start a project <ArrowRight size={17} /></a><a className="text-link" href="#services">Explore services <ArrowDown size={15} /></a></div>
          <div className="hero-note"><span className="note-rule" /> GOOD WORK. GOOD PEOPLE. NO GUESSWORK.</div>
        </div>
        <div className="hero-art" aria-label="Abstract amber studio sculpture" role="img"><div className="art-grid" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-sphere" /><div className="art-caption"><span>IDEAS, MADE REAL</span><span>DS — 001</span></div><div className="art-index">01<span> / 05</span></div></div>
        <div className="hero-bottom"><span>SMALL STUDIO, BIG PICTURE</span><span>SCROLL TO DISCOVER <ArrowDown size={13} /></span></div>
      </section>
      <section className="intro" id="about"><div className="container intro-inner"><p className="section-label">A LITTLE ABOUT US <span>—</span></p><div><h2>One good partner.<br /><span className="serif">Everything you need.</span></h2><div className="intro-bottom"><p>We bring the right mix of creative and practical skills to your project. From the first idea to the final detail, you get thoughtful work, clear communication and one less thing to worry about.</p><div className="intro-stamp"><Sparkles size={20} /><span>MADE FOR<br />YOUR NEXT</span></div></div></div></div></section>
      <section className="services section-pad container" id="services"><div className="section-head"><div><p className="section-label">WHAT WE DO <span>—</span></p><h2>Good ideas,<br /><span className="serif">made useful.</span></h2></div><p className="section-aside">The right skills for the work that moves your business forward. Pick one, or bring us the whole picture.</p></div>
        <div className="service-list">{services.map(({icon: Icon, no, title, desc, tags}) => <article className="service-card" key={no}><div className="service-no">{no}</div><div className="service-icon"><Icon size={21} strokeWidth={1.5} /></div><div className="service-content"><h3>{title}</h3><p>{desc}</p><div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div></div><ArrowUpRight className="service-arrow" size={19} /></article>)}</div>
      </section>
      <section className="manifesto"><div className="container manifesto-inner"><span className="manifesto-mark">“</span><p>Good digital work should feel <span className="serif">simple.</span><br />Getting there takes <span className="manifesto-outline">thought.</span></p><span className="manifesto-caption">THOUGHTFUL BY DESIGN · PERSONAL BY NATURE</span></div></section>
      <section className="contact section-pad container" id="contact"><div className="contact-copy"><p className="section-label">HAVE SOMETHING IN MIND? <span>—</span></p><h2>Let’s make<br /><span className="serif">it happen.</span></h2><p className="contact-lede">Tell us a little about what you’re working on. We’ll take it from there, one friendly WhatsApp message at a time.</p><div className="contact-direct"><span className="status-dot" /><span>Usually replies within one business day</span></div><a className="social-link" href={instagram} target="_blank" rel="noreferrer">Follow along on Instagram <ArrowUpRight size={15} /></a></div>
        <form className="contact-form" onSubmit={submit}><div className="form-top"><span>PROJECT ENQUIRY</span><span>LET’S START HERE ↘</span></div><label>Your name<input name="name" placeholder="What should we call you?" required /></label><label>Email address<input type="email" name="email" placeholder="you@example.com" required /></label><label>What can we help with?<select name="service" defaultValue="" required><option value="" disabled>Choose a service</option>{services.map(s => <option key={s.no}>{s.title}</option>)}<option>Something else</option></select></label><label>A little about your project<textarea name="details" rows="3" placeholder="What are you hoping to make?" required /></label><button className="button button-primary submit-button" type="submit">{sent ? 'Open WhatsApp again' : 'Send via WhatsApp'} <ArrowRight size={17} /></button><p className="form-note">Your message opens in WhatsApp so we can reply directly.</p></form>
      </section>
    </main>
    <footer className="footer"><div className="container footer-top"><a className="brand" href="#top"><span className="brand-mark"><Sparkles size={17} /></span><span>digital services<span className="brand-light"> studio</span></span></a><span>THOUGHTFULLY MADE FOR WHAT’S NEXT.</span><a href="#top" className="back-top">BACK TO TOP ↑</a></div><div className="container footer-bottom"><span>© 2025 DIGITAL SERVICES STUDIO</span><span>GOOD WORK STARTS WITH A CONVERSATION.</span><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WHATSAPP ↗</a></div></footer>
  </>;
}
export default App;
