import { ReactNode } from "react";
import SideNavigation from "@/app/_components/SideNavigation";

export const metadata = {
  title: "Update profile",
};

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
};

export default Layout;
