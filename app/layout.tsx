import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import { ReactNode } from "react";

export const metadata = {
  title: "The Wild Oasis",
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
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
