import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Section from "./components/sections/Section";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Navbar from "./components/ui/Navbar";
import Contact from "./components/sections/Contact";
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
