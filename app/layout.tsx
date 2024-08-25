import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import { ReactNode } from "react";

export const metadata = {
  title: "Vira's Balcony",
};

type Layout = {
  children: ReactNode;
};

export default function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by Vira&apos;s Balcony</footer>
      </body>
    </html>
  );
}
