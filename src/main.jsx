import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRootRoute, createRoute, createRouter, RouterProvider, lazyRouteComponent } from '@tanstack/react-router'
// import HomePage from './components/pages/HomePage.jsx'
// import BlogListPage from './components/pages/BlogListPage.jsx'
// import BlogPostPage from './components/pages/BlogPostPage.jsx'


const rootRoute = createRootRoute({
  component: App
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
}).lazy(() => import('./components/pages/HomePage.lazy.jsx').then((d)=>d.Route))

const blogListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
}).lazy(() => import('./components/pages/BlogListPage.lazy.jsx').then(d=>d.Route))

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
}).lazy(()=>import('./components/pages/BlogPostPage.lazy.jsx').then(d=>d.Route))

const routeTree = rootRoute.addChildren([
  indexRoute,
  blogListRoute,
  blogPostRoute
])

const router = createRouter({ routeTree })

router.subscribe('onLoad', (match) => {
  console.log('Route matched:', match)
})

console.log('All routes:', router.routesById)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
