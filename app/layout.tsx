import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    variable: "--font",
    subsets: ["cyrillic", "latin"]
});

export const metadata: Metadata = {
  title: "Главная страница",
  description: "Магазин домов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.variable}>
      <header></header>
        {children}
      </body>
    </html>
  );
}
