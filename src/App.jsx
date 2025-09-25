
import Navbar from "./components/ui/Navbar";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Footer = lazy(()=>import("./components/sections/Footer"))

function Layout() {
  return (
    <div className="bg-light font-press text-dark">
      <Navbar />
      <Outlet />

    <Suspense fallback={<div>Loading...</div>}>
      <Footer />
    </Suspense>
    </div>
  );
}

const App = () => {
  return <Layout />
}

export default App;
