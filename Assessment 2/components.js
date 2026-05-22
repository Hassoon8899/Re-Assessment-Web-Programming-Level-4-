/* ===========================
   NEXUS UNIVERSITY — components.js
   Injects shared nav & footer
   =========================== */

(function () {
  /* ---- NAV ---- */
  const navHTML = `
  <nav>
    <div class="container nav-inner">
      <a href="index.html" class="nav-logo">Nexus<span>.</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html">Home</a></li>
        <li><a href="academics.html">Academics</a></li>
        <li><a href="campus.html">Campus</a></li>
        <li><a href="research.html">Research</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <a href="contact.html" class="nav-cta">Apply Now</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;

  /* ---- FOOTER ---- */
  const footerHTML = `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">Nexus<span style="color:var(--accent)">.</span></a>
          <p style="font-weight:300;line-height:1.7;max-width:280px;">Advancing knowledge, shaping futures. A university built for the curious and the ambitious.</p>
        </div>
        <div class="footer-col">
          <h5>Explore</h5>
          <ul>
            <li><a href="academics.html">Programmes</a></li>
            <li><a href="research.html">Research</a></li>
            <li><a href="campus.html">Campus Life</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>University</h5>
          <ul>
            <li><a href="#">About Nexus</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">News &amp; Events</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Support</h5>
          <ul>
            <li><a href="#">Student Portal</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Alumni</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2025 Nexus University. All rights reserved.</span>
        <span>Privacy Policy &nbsp;·&nbsp; Terms of Use</span>
      </div>
    </div>
  </footer>`;

  /* Inject nav at start of body */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  /* Inject footer at end of body */
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
