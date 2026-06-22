import { CONFIG } from "@/app/lib/data";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(253,248,243,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #D4C4B2",
        padding: "16px 24px"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 700 }}>
            A Modo Mio
            <span style={{ display: "block", fontSize: "0.625rem", color: "#D4AF37" }}>da Adri</span>
          </div>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <a href="#menu" style={{ color: "#2E2A28", opacity: 0.7, textDecoration: "none" }}>Menù</a>
            <a href="#chi-siamo" style={{ color: "#2E2A28", opacity: 0.7, textDecoration: "none" }}>Chi Siamo</a>
            <a href="#contatti" style={{ color: "#2E2A28", opacity: 0.7, textDecoration: "none" }}>Contatti</a>
            <a href={CONFIG.whatsappLink} style={{
              background: "#D4AF37",
              color: "#2E2A28",
              padding: "10px 20px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: 600
            }}>📞 Prenota</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#FDF8F3",
        padding: "120px 24px 80px"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <div style={{ maxWidth: "700px" }}>
            <span style={{
              display: "inline-block",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#D4AF37",
              marginBottom: "1rem"
            }}>Dal 2024 a Stradella</span>
            
            <h1 style={{
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              lineHeight: 1,
              color: "#2E2A28",
              marginBottom: "0.5rem"
            }}>
              A Modo Mio
            </h1>
            
            <p style={{
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "#D4AF37",
              marginBottom: "1.5rem"
            }}>
              Ristorante • Pizzeria • Cucina di Pesce
            </p>
            
            <p style={{
              fontSize: "1.125rem",
              color: "#2E2A28",
              opacity: 0.8,
              maxWidth: "500px",
              marginBottom: "2rem",
              lineHeight: 1.7
            }}>
              Il sapore autentico della tradizione italiana. Pizza napoletana, pesce fresco e un'atmosfera che sa di casa.
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <a href={CONFIG.whatsappLink} style={{
                background: "#D4AF37",
                color: "#2E2A28",
                padding: "14px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 600
              }}>🍽️ Prenota il tuo tavolo</a>
              <a href="#menu" style={{
                background: "transparent",
                color: "#2E2A28",
                padding: "14px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 600,
                border: "2px solid #D4AF37"
              }}>Scopri il menù →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #D4C4B2",
        background: "#FFFFFF",
        padding: "2rem 24px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "1.25rem", fontWeight: 600 }}>
            A Modo Mio
            <span style={{ display: "block", fontSize: "0.75rem", opacity: 0.5 }}>da Adri</span>
          </p>
          <p style={{ fontSize: "0.875rem", opacity: 0.5, marginTop: "0.5rem" }}>
            {CONFIG.address}, {CONFIG.city}
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "1rem", fontSize: "0.875rem" }}>
            <a href={CONFIG.whatsappLink} style={{ color: "#D4AF37", textDecoration: "none" }}>WhatsApp</a>
            <a href={CONFIG.instagram} style={{ color: "#D4AF37", textDecoration: "none" }}>Instagram</a>
          </div>
          <p style={{ fontSize: "0.75rem", opacity: 0.3, marginTop: "1.5rem" }}>
            © 2026 A Modo Mio da Adri. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </>
  );
}
