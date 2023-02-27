import { NextPage } from "next";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return <div className="h-screen flex items-center flex-col">{children}</div>;
};

export default Layout;