import { Outlet } from "react-router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Layout() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}
