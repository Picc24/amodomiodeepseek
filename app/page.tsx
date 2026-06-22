export default function Home() {
  return (
    <>
      <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        background: "#FDF8F3"
      }}>
        <h1 style={{
          fontSize: "clamp(3rem, 8vw, 5rem)",
          fontFamily: "Georgia, serif",
          color: "#2E2A28",
          marginBottom: "0.5rem"
        }}>
          A Modo Mio
        </h1>
        <p style={{
          fontSize: "1.25rem",
          color: "#D4AF37",
          fontWeight: 500
        }}>
          Ristorante • Pizzeria • Cucina di Pesce
        </p>
        <p style={{
          marginTop: "2rem",
          color: "#2E2A28",
          opacity: 0.6
        }}>
          Stradella (PV) • Via Giuseppe Garibaldi, 56
        </p>
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
          <a href="#" className="btn btn-primary">Prenota</a>
        </div>
      </div>
    </>
  );
}
