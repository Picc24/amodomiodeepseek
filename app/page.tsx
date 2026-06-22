export default function Home() {
  return (
    <html lang="it">
      <head>
        <title>A Modo Mio da Adri</title>
        <meta name="description" content="Ristorante Pizzeria a Stradella" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: Arial, sans-serif;
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
            font-family: Georgia, serif;
            font-size: 1.5rem;
            font-weight: 700;
          }
          .logo span {
            display: block;
            font-size: 0.625rem;
            color: #D4AF37;
          }
          .nav-links {
            display: flex;
            gap: 24px;
            align-items: center;
          }
          .nav-links a {
            color: #2E2A28;
            text-decoration: none;
            opacity: 0.7;
          }
          .btn-prenota {
            background: #D4AF37;
            color: #2E2A28;
            padding: 10px 20px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
          }
          
          /* HERO */
          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 120px 0 80px;
            background: #FDF8F3;
          }
          .hero-content { max-width: 700px; }
          .hero-eyebrow {
            font-size: 0.75rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #D4AF37;
          }
          .hero-title {
            font-family: Georgia, serif;
            font-size: clamp(3rem, 8vw, 5rem);
            font-weight: 700;
            line-height: 1;
            color: #2E2A28;
            margin: 0.5rem 0;
          }
          .hero-subtitle {
            font-size: 1.25rem;
            font-weight: 500;
            color: #D4AF37;
          }
          .hero-desc {
            font-size: 1.125rem;
            color: #2E2A28;
            opacity: 0.8;
            max-width: 500px;
            margin: 1.5rem 0 2rem;
            line-height: 1.7;
          }
          .hero-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
          }
          .btn {
            padding: 14px 32px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            border: none;
            cursor: pointer;
            display: inline-block;
          }
          .btn-primary {
            background: #D4AF37;
            color: #2E2A28;
          }
          .btn-outline {
            background: transparent;
            color: #2E2A28;
            border: 2px solid #D4AF37;
          }
          
          /* FOOTER */
          .footer {
            border-top: 1px solid #D4C4B2;
            background: #FFFFFF;
            padding: 2rem 0;
            text-align: center;
          }
          .footer-logo {
            font-family: Georgia, serif;
            font-size: 1.25rem;
            font-weight: 600;
          }
          .footer-logo span {
            display: block;
            font-size: 0.75rem;
            opacity: 0.5;
          }
          .footer-text {
            font-size: 0.875rem;
            opacity: 0.5;
            margin-top: 0.5rem;
          }
          .footer-links {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin: 1rem 0;
          }
          .footer-links a {
            color: #D4AF37;
            text-decoration: none;
            font-size: 0.875rem;
          }
          .footer-copy {
            font-size: 0.75rem;
            opacity: 0.3;
          }

          @media (max-width: 768px) {
            .nav-links { display: none; }
          }
        `}</style>
      </head>
      <body>
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              A Modo Mio
              <span>da Adri</span>
            </div>
            <div className="nav-links">
              <a href="#menu">Menù</a>
              <a href="#chi-siamo">Chi Siamo</a>
              <a href="#contatti">Contatti</a>
              <a href="https://wa.me/393277119566" className="btn-prenota">📞 Prenota</a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-eyebrow">Dal 2024 a Stradella</div>
              <h1 className="hero-title">A Modo Mio</h1>
              <p className="hero-subtitle">Ristorante • Pizzeria • Cucina di Pesce</p>
              <p className="hero-desc">
                Il sapore autentico della tradizione italiana. Pizza napoletana, pesce fresco e un'atmosfera che sa di casa.
              </p>
              <div className="hero-buttons">
                <a href="https://wa.me/393277119566" className="btn btn-primary">🍽️ Prenota il tuo tavolo</a>
                <a href="#menu" className="btn btn-outline">Scopri il menù →</a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
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
