import { lazy, Suspense } from "react";
import { Outlet } from "@tanstack/react-router";

const Navbar = lazy(() => import("./components/ui/Navbar"))
const Footer = lazy(() => import("./components/sections/Footer"))

const App = () => {
  return (<>
    <Navbar />

    <Suspense>
      <Outlet />
    </Suspense>

    <Suspense>
      <Footer />
    </Suspense>
  </>)
}

export default App;
