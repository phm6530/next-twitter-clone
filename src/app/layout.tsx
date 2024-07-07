import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import S from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modal-backdrop"></div>
        <div className={S.mainGrid}>
          <header>Header</header>
          {children}
          <footer>footer</footer>
        </div>
      </body>
    </html>
  );
}
