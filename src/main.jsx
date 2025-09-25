import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './components/pages/HomePage.jsx'
import { lazy, Suspense } from 'react'

const BlogListPage = lazy(() => import("./components/pages/BlogListPage.jsx"))
const BlogPostPage = lazy(() => import("./components/pages/BlogPostPage.jsx"))

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, element: <HomePage />,
      },
      {
        path: "home", element: <Suspense fallback={<div>Loading...</div>} > <HomePage /></Suspense>,
      },
      {
        path: "blog",
        element: <Suspense fallback={<div>Loading...</div>}>
          <BlogListPage />
        </Suspense>,
      },
      {
        path: "blog/:slug",
        element: <Suspense fallback={<div>Loading...</div>} >  <BlogPostPage /></Suspense>
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
