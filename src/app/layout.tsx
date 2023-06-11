import "./globals.css";

export const metadata = {
  title: "Desafio 01 - Calculadora",
  description: "Desafio Dio - Criar uma calculadora em React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
