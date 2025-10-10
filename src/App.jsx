import { lazy, Suspense } from "react";
import { Outlet } from "@tanstack/react-router";
import { QueryClientProvider } from '@tanstack/react-query';
// import * as myHead from '@unhead/react/client'
import { queryClient } from "./utils/queryKeys";
import { Head } from "@unhead/react";
import { createHead, UnheadProvider } from "@unhead/react/client";

const Navbar = lazy(() => import("./components/ui/Navbar"))
const Footer = lazy(() => import("./components/sections/Footer"))

const head = createHead()

const App = () => {
  return (<>

    <UnheadProvider head={head}>
      <QueryClientProvider client={queryClient}>

        <Navbar />

        <Suspense>
          <Outlet />
        </Suspense>

        <Suspense>
          <Footer />
        </Suspense>

      </QueryClientProvider>
    </UnheadProvider>


  </>)
}

export default App;
