"use client";

import { useEffect, useState } from "react";

const Mark = () => <svg viewBox="0 0 42 42" aria-hidden="true"><path d="M5 6h19c7.2 0 13 5.8 13 13s-5.8 13-13 13H13V17h11"/><path d="m22 24 15 12"/></svg>;

export default function ResearchSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState("ensemble");

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <>
    <div className="noise" aria-hidden="true" />
    <header className={`site-header${menuOpen ? " menu-open" : ""}`}>
      <a className="brand" href="#top" aria-label="ResForge home"><Mark /><span>RESFORGE</span></a>
      <nav aria-label="Primary navigation"><a href="#research" onClick={() => setMenuOpen(false)}>Research</a><a href="#direction" onClick={() => setMenuOpen(false)}>Direction</a><a href="#team" onClick={() => setMenuOpen(false)}>Team</a></nav>
      <a className="header-cta" href="#team">Start a conversation <span>↘</span></a>
      <button type="button" className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-index mono">RF / 001</div>
        <div className="hero-copy reveal"><p className="eyebrow"><span/> Independent research collective</p><h1>Research,<br/><em>made resilient.</em></h1><p className="intro">We build intelligent systems that remain useful when models hallucinate, networks disappear, and compute is constrained.</p><div className="hero-actions"><a className="button primary" href="#research">Explore our research <span>↓</span></a><a className="text-link" href="#team">Meet the team <span>↗</span></a></div></div>
        <div className="hero-visual" aria-label="Animated ResForge research system diagram"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="visual-core"><span className="pulse"/><b>RF</b><small>CORE</small></div><div className="node node-a"><span>01</span>PERCEPTION</div><div className="node node-b"><span>02</span>REASONING</div><div className="node node-c"><span>03</span>EDGE</div><svg className="connections" viewBox="0 0 520 520" aria-hidden="true"><path d="M260 260 101 132M260 260l175-96M260 260l132 175"/><circle cx="260" cy="260" r="188"/></svg></div>
        <div className="scroll-note mono">SCROLL TO INVESTIGATE <span>↓</span></div>
      </section>

      <section className="manifesto section-pad reveal"><p className="section-label mono">01 / OUR POSITION</p><div className="manifesto-grid"><h2>Intelligence is only<br/>valuable when it is<br/><em>dependable.</em></h2><div><p>ResForge is a two-person research team exploring how AI can move from impressive demos to trustworthy, efficient systems.</p><p>We combine machine learning, software engineering, and safety-aware system design—then test the whole pipeline, including how it fails.</p></div></div></section>

      <section className="research section-pad" id="research">
        <div className="section-heading reveal"><div><p className="section-label mono">02 / ACTIVE RESEARCH</p><h2>From recognition<br/>to responsible action.</h2></div><div className="review-badge"><span/><div><small>MANUSCRIPT STATUS</small><b>UNDER REVIEW</b><small>ICMRIA 2027</small></div></div></div>
        <article className="project-card reveal"><div className="project-topline mono"><span>PROJECT / MC-01</span><span>AGRICULTURAL AI</span></div><div className="project-grid"><div className="project-copy"><h3>Maize<span>Cure</span></h3><p className="project-subtitle">CNN-Based Corn Leaf Disease Detection and LLM-Powered Treatment Advisory</p><p>Most crop-disease tools stop after classification. MaizeCure connects visual diagnosis to safety-aware treatment guidance—without placing blind trust in a single model.</p><div className="authors mono"><span>AUTHORS</span><b>SAMIN SADAF</b><b>S M AL FUAD NUR</b></div></div>
          <div className="pipeline" aria-label="MaizeCure processing pipeline"><div className="pipeline-tabs" role="tablist" aria-label="Inference mode">{["ensemble","hybrid","single"].map((item) => <button type="button" role="tab" aria-selected={mode === item} key={item} className={mode === item ? "active" : ""} onClick={() => setMode(item)}>{item === "single" ? "SINGLE CNN" : item.toUpperCase()}</button>)}</div><div className="pipeline-stage input-stage"><div className="leaf-mark">⌁</div><span>LEAF IMAGE</span><small>INPUT</small></div><div className="pipe-line"><i/></div><div className="models" data-active-mode={mode}><span>R50</span><span>D121</span><span>EB0</span><span>MV2</span></div><div className="pipe-line"><i/></div><div className="pipeline-stage consensus-stage"><div className="consensus-rings"><i/><i/><i/></div><span>SAFE ADVISORY</span><small>MULTI-LLM CONSENSUS + RULE FALLBACK</small></div></div></div>
          <div className="capability-strip mono"><span><b>04</b> CNN BACKBONES</span><span><b>03</b> INFERENCE MODES</span><span><b>02</b> UI LANGUAGES</span><span><b>01</b> SAFETY PIPELINE</span></div></article>
        <div className="principles"><article className="reveal"><span className="mono">A / DETECT</span><h3>Multiple eyes,<br/>one diagnosis.</h3><p>Four transfer-learned CNN backbones operate independently or together through soft voting and a cost-aware hybrid cascade.</p></article><article className="reveal"><span className="mono">B / VERIFY</span><h3>Advice that earns<br/>its confidence.</h3><p>Low-confidence and mixed-infection predictions are filtered before multiple LLM providers validate a recommendation.</p></article><article className="reveal"><span className="mono">C / RECOVER</span><h3>Useful, even when<br/>models fail.</h3><p>Malformed outputs are repaired, terminology is screened, and deterministic expert rules take over if consensus or connectivity fails.</p></article></div>
      </section>

      <section className="direction section-pad" id="direction"><div className="direction-bg mono" aria-hidden="true">NEXT</div><p className="section-label mono reveal">03 / THE NEXT FRONTIER</p><div className="direction-grid"><div className="reveal"><h2>Intelligence<br/>moves <em>closer.</em></h2><p>Our next research chapter focuses on cognitive AI and efficient intelligence that lives on the device—not only in the cloud.</p></div><div className="research-threads reveal"><article><span>01</span><div><h3>Cognitive AI</h3><p>Systems that perceive, reason, adapt, and interact with richer context.</p></div><i>↗</i></article><article><span>02</span><div><h3>On-device LLMs</h3><p>Private, low-latency language intelligence under real hardware constraints.</p></div><i>↗</i></article><article><span>03</span><div><h3>NPU acceleration</h3><p>Model and runtime optimization for the next generation of neural processors.</p></div><i>↗</i></article></div></div></section>

      <section className="team section-pad" id="team"><p className="section-label mono reveal">04 / THE TEAM</p><div className="team-intro reveal"><h2>Small by design.<br/><em>Serious by nature.</em></h2><p>Two researchers, one shared standard: build with rigor, question the easy answer, and make the system work beyond the lab.</p></div><div className="team-grid"><a className="person reveal" href="https://saminsadaf.me" target="_blank" rel="noreferrer"><div className="portrait portrait-sadaf"><span>SS</span><div className="scan"/></div><div className="person-meta"><div><h3>Samin Sadaf</h3><p>Researcher · Co-author, MaizeCure</p></div><span>PORTFOLIO ↗</span></div></a><a className="person reveal" href="https://alfuad.me" target="_blank" rel="noreferrer"><div className="portrait portrait-fuad"><span>FN</span><div className="scan"/></div><div className="person-meta"><div><h3>S M Al Fuad Nur</h3><p>Researcher &amp; Software Engineer · Co-author, MaizeCure</p></div><span>PORTFOLIO ↗</span></div></a></div></section>
      <section className="contact section-pad reveal"><div><p className="section-label mono">05 / COLLABORATE</p><h2>Have a hard problem<br/>worth <em>forging?</em></h2></div><a className="contact-button" href="#team"><span>MEET THE TEAM</span><b>↗</b></a></section>
    </main>
    <footer><a className="brand footer-brand" href="#top"><Mark/><span>RESFORGE</span></a><p>Independent research collective<br/>Dhaka, Bangladesh</p><div className="footer-links"><a href="#research">Research</a><a href="#direction">Direction</a><a href="#team">Team</a></div><p className="copyright mono">© {new Date().getFullYear()} RESFORGE / BUILT TO QUESTION</p></footer>
  </>;
}
