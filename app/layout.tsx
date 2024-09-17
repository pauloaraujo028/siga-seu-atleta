import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import Navbar from "./_components/navbar";
import "./globals.css";

const darkGrotesque = Darker_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siga seu Atleta",
  description: "Lista de Atletas olímpicos e paralímpicos do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${darkGrotesque} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
