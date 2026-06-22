export default function Home() {
  return (
    <html lang="it">
      <head>
        <title>A Modo Mio da Adri | Ristorante Pizzeria Stradella</title>
        <meta name="description" content="Ristorante Pizzeria A Modo Mio da Adri a Stradella (PV). Cucina italiana, pizza napoletana, pesce fresco e convivialità." />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Georgia', 'Times New Roman', serif;
            background: #FDF8F3;
            color: #2E2A28;
            line-height: 1.6;
          }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
          
          /* NAVBAR */
          .navbar {
            background: rgba(253,248,243,0.95);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid #D4C4B2;
            padding: 16px 0;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
          }
          .navbar .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .logo {
            font-size: 1.8rem;
            font-weight: 700;
            font-family: 'Georgia', serif;
          }
          .logo span {
            display: block;
            font-size: 0.7rem;
            color: #D4AF37;
            letter-spacing: 0.1em;
          }
          .nav-links {
            display: flex;
            gap: 32px;
            align-items: center;
          }
          .nav-links a {
            color: #2E2A28;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
            transition: color 0.3s;
          }
          .nav-links a:hover { color: #D4AF37; }
          .btn-prenota {
            background: #D4AF37;
            color: #2E2A28 !important;
            padding: 10px 24px;
            border-radius: 50px;
            font-weight: 600 !important;
          }
          .btn-prenota:hover { background: #E8C872 !important; }
          
          /* HERO */
          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 120px 0 80px;
            background: linear-gradient(135deg, #FDF8F3 0%, #F5EDE4 100%);
            position: relative;
            overflow: hidden;
          }
          .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);
            border-radius: 50%;
          }
          .hero-content {
            position: relative;
            z-index: 1;
            max-width: 700px;
          }
          .hero-eyebrow {
            font-size: 0.8rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: #D4AF37;
            font-weight: 600;
          }
          .hero-title {
            font-size: clamp(3.5rem, 10vw, 6rem);
            font-weight: 700;
            line-height: 1;
            color: #2E2A28;
            margin: 0.5rem 0 0.2rem;
            font-family: 'Georgia', serif;
          }
          .hero-subtitle {
            font-size: 1.4rem;
            font-weight: 500;
            color: #D4AF37;
            margin-bottom: 1rem;
          }
          .hero-desc {
            font-size: 1.1rem;
            color: #2E2A28;
            opacity: 0.8;
            max-width: 500px;
            margin: 1.5rem 0 2rem;
            line-height: 1.8;
          }
          .hero-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
          }
          .btn {
            padding: 16px 36px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            border: none;
            cursor: pointer;
            display: inline-block;
            font-size: 1rem;
            transition: all 0.3s ease;
          }
          .btn-primary {
            background: #D4AF37;
            color: #2E2A28;
          }
          .btn-primary:hover {
            background: #E8C872;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(212,175,55,0.3);
          }
          .btn-outline {
            background: transparent;
            color: #2E2A28;
            border: 2px solid #D4AF37;
          }
          .btn-outline:hover {
            background: #D4AF37;
            transform: translateY(-2px);
          }
          
          /* SECTION */
          .section {
            padding: 80px 0;
          }
          .section-alt {
            background: #FFFFFF;
          }
          .section-title {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            font-weight: 700;
            font-family: 'Georgia', serif;
            margin-bottom: 1rem;
          }
          .section-sub {
            font-size: 1.1rem;
            opacity: 0.7;
            max-width: 600px;
            line-height: 1.8;
          }
          .section-eyebrow {
            font-size: 0.8rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: #D4AF37;
            font-weight: 600;
          }
          
          /* ABOUT */
          .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
            margin-top: 40px;
          }
          .about-image {
            background: #D4C4B2;
            border-radius: 16px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #2E2A28;
            opacity: 0.5;
            font-size: 1.2rem;
          }
          .about-text p {
            margin-bottom: 1rem;
            font-size: 1.05rem;
            opacity: 0.8;
            line-height: 1.8;
          }
          .about-stats {
            display: flex;
            gap: 40px;
            margin-top: 2rem;
          }
          .about-stats div {
            text-align: center;
          }
          .about-stats .number {
            font-size: 2.5rem;
            font-weight: 700;
            color: #D4AF37;
            display: block;
          }
          .about-stats .label {
            font-size: 0.9rem;
            opacity: 0.6;
          }
          
          /* MENU */
          .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            margin-top: 40px;
          }
          .menu-card {
            background: #FFFFFF;
            border-radius: 16px;
            padding: 30px;
            border: 1px solid #D4C4B2;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .menu-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 32px rgba(0,0,0,0.06);
          }
          .menu-card .icon {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
          }
          .menu-card h3 {
            font-family: 'Georgia', serif;
            font-size: 1.4rem;
            margin-bottom: 1rem;
          }
          .menu-item {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #F0E8DC;
            font-size: 0.95rem;
          }
          .menu-item:last-child { border-bottom: none; }
          .menu-item .price {
            font-weight: 700;
            color: #D4AF37;
          }
          .menu-item .desc {
            display: block;
            font-size: 0.8rem;
            opacity: 0.6;
            margin-top: 2px;
          }
          
          /* REVIEWS */
          .reviews-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-top: 40px;
          }
          .review-card {
            background: #FFFFFF;
            border-radius: 16px;
            padding: 30px;
            border: 1px solid #D4C4B2;
          }
          .review-card .stars {
            color: #D4AF37;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
          }
          .review-card .text {
            font-style: italic;
            font-size: 0.95rem;
            line-height: 1.7;
            margin-bottom: 1rem;
          }
          .review-card .author {
            font-weight: 600;
            font-size: 0.9rem;
          }
          .review-card .date {
            opacity: 0.5;
            font-size: 0.8rem;
            margin-left: 8px;
          }
          
          /* CONTACT */
          .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
            margin-top: 40px;
          }
          .contact-card h3 {
            font-family: 'Georgia', serif;
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
          }
          .contact-card p {
            font-size: 1rem;
            opacity: 0.8;
            line-height: 1.8;
          }
          .contact-card a {
            color: #D4AF37;
            text-decoration: none;
          }
          .contact-card a:hover { text-decoration: underline; }
          .contact-hours {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          .contact-hours .day {
            display: flex;
            justify-content: space-between;
            font-size: 0.95rem;
            padding: 4px 0;
            border-bottom: 1px solid #F0E8DC;
          }
          .contact-hours .day span:last-child { opacity: 0.7; }
          
          .contact-cta {
            margin-top: 40px;
            padding: 40px;
            background: #FFFFFF;
            border-radius: 16px;
            border: 1px solid #D4C4B2;
            text-align: center;
          }
          .contact-cta h3 {
            font-family: 'Georgia', serif;
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
          }
          .contact-cta p {
            opacity: 0.7;
            margin-bottom: 1.5rem;
          }
          
          /* FOOTER */
          .footer {
            border-top: 1px solid #D4C4B2;
            background: #FFFFFF;
            padding: 40px 0 30px;
            text-align: center;
          }
          .footer-logo {
            font-size: 1.5rem;
            font-weight: 700;
            font-family: 'Georgia', serif;
          }
          .footer-logo span {
            display: block;
            font-size: 0.8rem;
            opacity: 0.5;
            font-weight: 400;
          }
          .footer-text {
            font-size: 0.95rem;
            opacity: 0.5;
            margin-top: 0.5rem;
          }
          .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin: 1.5rem 0;
          }
          .footer-links a {
            color: #D4AF37;
            text-decoration: none;
            font-size: 0.95rem;
          }
          .footer-links a:hover { text-decoration: underline; }
          .footer-copy {
            font-size: 0.8rem;
            opacity: 0.3;
          }
          
          /* RESPONSIVE */
          @media (max-width: 768px) {
            .nav-links { display: none; }
            .about-grid { grid-template-columns: 1fr; }
            .about-image { height: 250px; }
            .hero::before { display: none; }
            .contact-hours .day { flex-direction: column; align-items: center; }
          }
        `}</style>
      </head>
      <body>

        {/* ===== NAVBAR ===== */}
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              A Modo Mio
              <span>da Adri</span>
            </div>
            <div className="nav-links">
              <a href="#menu">Menù</a>
              <a href="#about">Chi Siamo</a>
              <a href="#reviews">Recensioni</a>
              <a href="#contact">Contatti</a>
              <a href="https://wa.me/393277119566" className="btn-prenota">📞 Prenota</a>
            </div>
          </div>
        </nav>

        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-eyebrow">Dal 2024 a Stradella</div>
              <h1 className="hero-title">A Modo Mio</h1>
              <p className="hero-subtitle">Ristorante • Pizzeria • Cucina di Pesce</p>
              <p className="hero-desc">
                Il sapore autentico della tradizione italiana. Pizza napoletana, pesce fresco e un'atmosfera che sa di casa. Aperti a pranzo e cena.
              </p>
              <div className="hero-buttons">
                <a href="https://wa.me/393277119566" className="btn btn-primary">🍽️ Prenota il tuo tavolo</a>
                <a href="#menu" className="btn btn-outline">Scopri il menù →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="section section-alt">
          <div className="container">
            <div className="section-eyebrow">Chi Siamo</div>
            <h2 className="section-title">La Nostra Storia</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  La passione per la cucina, la famiglia al centro, il benvenuto di Adri.
                  Ogni piatto è preparato con cura, come a casa propria.
                </p>
                <p>
                  Il nostro forno a legna racconta storie di convivialità e sapori autentici.
                  Dal pesce fresco alla pizza napoletana, tutto è fatto con ingredienti selezionati
                  e amore per la tradizione italiana.
                </p>
                <div className="about-stats">
                  <div>
                    <span className="number">4.5 ⭐</span>
                    <span className="label">84 recensioni</span>
                  </div>
                  <div>
                    <span className="number">🔥</span>
                    <span className="label">Forno a legna</span>
                  </div>
                  <div>
                    <span className="number">🐟</span>
                    <span className="label">Pesce fresco</span>
                  </div>
                </div>
              </div>
              <div className="about-image">
                📸 Foto del locale
              </div>
            </div>
          </div>
        </section>

        {/* ===== MENU ===== */}
        <section id="menu" className="section">
          <div className="container">
            <div className="section-eyebrow">Il Nostro Menù</div>
            <h2 className="section-title">Le Nostre Specialità</h2>
            <p className="section-sub">Dal forno a legna al mare, i piatti che ci rappresentano.</p>

            <div className="menu-grid">
              {/* Pizze */}
              <div className="menu-card">
                <div className="icon">🔥</div>
                <h3>Le Nostre Pizze</h3>
                <div className="menu-item">
                  <div>
                    Margherita D.O.P.
                    <span className="desc">Pomodoro San Marzano, mozzarella di bufala, basilico</span>
                  </div>
                  <span className="price">€10</span>
                </div>
                <div className="menu-item">
                  <div>
                    Pizza del Mare
                    <span className="desc">Gamberi, cozze, vongole, aglio e prezzemolo</span>
                  </div>
                  <span className="price">€16</span>
                </div>
                <div className="menu-item">
                  <div>
                    Diavola
                    <span className="desc">Salame piccante, peperoncino, mozzarella</span>
                  </div>
                  <span className="price">€12</span>
                </div>
              </div>

              {/* Primi */}
              <div className="menu-card">
                <div className="icon">🍝</div>
                <h3>Primi Piatti</h3>
                <div className="menu-item">
                  <div>
                    Spaghetti allo Scoglio
                    <span className="desc">Frutti di mare freschissimi, pomodorini, prezzemolo</span>
                  </div>
                  <span className="price">€18</span>
                </div>
                <div className="menu-item">
                  <div>
                    Risotto ai Frutti di Mare
                    <span className="desc">Carnaroli, gamberi, calamari, vongole, zafferano</span>
                  </div>
                  <span className="price">€20</span>
                </div>
              </div>

              {/* Secondi */}
              <div className="menu-card">
                <div className="icon">🐟</div>
                <h3>Secondi e Grigliate</h3>
                <div className="menu-item">
                  <div>
                    Grigliata Mista di Pesce
                    <span className="desc">Pesce del giorno, calamari, gamberi, verdure</span>
                  </div>
                  <span className="price">€25</span>
                </div>
                <div className="menu-item">
                  <div>
                    Filetto di Manzo
                    <span className="desc">Rosa di manzo, rucola, grana e balsamico</span>
                  </div>
                  <span className="price">€22</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== REVIEWS ===== */}
        <section id="reviews" className="section section-alt">
          <div className="container">
            <div className="section-eyebrow">Le Recensioni</div>
            <h2 className="section-title">Cosa Dicono di Noi</h2>
            <p className="section-sub">Il parere dei nostri clienti è il nostro miglior biglietto da visita.</p>

            <div className="reviews-grid">
              <div className="review-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="text">"Esperienza ottima, per capire bisogna solo provare, uno spettacolo per gli occhi e soprattutto per le papille gustative. Ottima accoglienza e ottimo servizio."</p>
                <div className="author">Andreina Pileggi <span className="date">1 mese fa</span></div>
              </div>
              <div className="review-card">
                <div className="stars">⭐⭐⭐⭐</div>
                <p className="text">"Il cibo è stato davvero ottimo: sapori ben equilibrati, materie prime di qualità e cottura dei piatti eseguita molto bene. Il punto di forza del locale."</p>
                <div className="author">Edoardo Russo <span className="date">2 mesi fa</span></div>
              </div>
              <div className="review-card">
                <div className="stars">⭐⭐⭐⭐</div>
                <p className="text">"La pizza era abbastanza buona così come i prezzi assolutamente corretti. Un locale che merita di essere scoperto."</p>
                <div className="author">Giovanni Malcotti <span className="date">2 mesi fa</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="section">
          <div className="container">
            <div className="section-eyebrow">Dove Siamo</div>
            <h2 className="section-title">Vieni a Trovarci</h2>
            <p className="section-sub">Ti aspettiamo a Stradella per una cena indimenticabile.</p>

            <div className="contact-grid">
              <div className="contact-card">
                <h3>📍 Indirizzo</h3>
                <p>
                  Via Giuseppe Garibaldi, 56<br />
                  Stradella (PV)
                </p>
                <p style={{ marginTop: '0.5rem' }}>
                  <a href="https://www.google.com/maps?q=Via+Giuseppe+Garibaldi+56+Stradella" target="_blank" rel="noopener">
                    Apri su Google Maps →
                  </a>
                </p>
                <h3 style={{ marginTop: '1.5rem' }}>📞 Contatti</h3>
                <p>
                  <a href="tel:3277119566" style={{ fontWeight: 600, fontSize: '1.2rem' }}>327 711 9566</a>
                </p>
                <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Chiama per prenotare o per informazioni</p>
              </div>

              <div className="contact-card">
                <h3>🕐 Orari di Apertura</h3>
                <div className="contact-hours">
                  <div className="day"><span>Lunedì</span><span>Chiuso</span></div>
                  <div className="day"><span>Martedì</span><span>12:00–14:30 / 18:30–00:00</span></div>
                  <div className="day"><span>Mercoledì</span><span>12:00–14:30 / 18:30–00:00</span></div>
                  <div className="day"><span>Giovedì</span><span>12:00–14:30 / 18:30–00:00</span></div>
                  <div className="day"><span>Venerdì</span><span>12:00–14:30 / 18:30–00:00</span></div>
                  <div className="day"><span>Sabato</span><span>12:00–14:30 / 18:30–00:00</span></div>
                  <div className="day"><span>Domenica</span><span>12:00–14:30 / 18:30–00:00</span></div>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <h3>🍽️ Prenota Ora</h3>
              <p>Scrivici su WhatsApp per prenotare un tavolo o per informazioni sui prossimi eventi.</p>
              <a href="https://wa.me/393277119566" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '18px 40px' }}>
                💬 Prenota su WhatsApp
              </a>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.5 }}>Rispondiamo entro pochi minuti</p>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <div className="container">
            <div className="footer-logo">
              A Modo Mio
              <span>da Adri</span>
            </div>
            <p className="footer-text">Via Giuseppe Garibaldi, 56 • Stradella (PV)</p>
            <div className="footer-links">
              <a href="https://wa.me/393277119566">WhatsApp</a>
              <a href="https://www.instagram.com/ristorante_amodomio/">Instagram</a>
              <a href="tel:3277119566">Telefono</a>
            </div>
            <p className="footer-copy">© 2026 A Modo Mio da Adri. Tutti i diritti riservati.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
