import Navigation from "@/app/_components/Navigation";
import Logo from "./Logo";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
