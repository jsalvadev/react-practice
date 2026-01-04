import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <main className="max-w-7xl mx-auto p-10">
      <Header />
      <Outlet />
    </main>
  );
}
