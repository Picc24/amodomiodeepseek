export const metadata = {
  title: "A Modo Mio da Adri | Ristorante Pizzeria a Stradella",
  description: "Ristorante Pizzeria A Modo Mio da Adri a Stradella (PV). Cucina italiana, pizza napoletana, pesce fresco e convivialità.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
