import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const HomePage = lazy(()=>import('./components/pages/HomePage.jsx',{eager: true})) 
const BlogListPage = lazy(() => import("./components/pages/BlogListPage.jsx", {eager: true}))
const BlogPostPage = lazy(() => import("./components/pages/BlogPostPage.jsx"))

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, element: 
        <Suspense>
          <HomePage />
        </Suspense>,
      },
      {
        path: "home", element: <Suspense > <HomePage /></Suspense>,
      },
      {
        path: "blog",
        element: <Suspense >
          <BlogListPage />
        </Suspense>,
      },
      {
        path: "blog/:slug",
        element: <Suspense><BlogPostPage /></Suspense>
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
