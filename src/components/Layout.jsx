import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Navbar />
      <Outlet />
    </div>
  );
} 