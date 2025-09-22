import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom";
import BlogListPage from './components/pages/BlogListPage.jsx'
import HomePage from './components/pages/HomePage.jsx'
import BlogPostPage from './components/pages/BlogPostPage.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, element: <HomePage />,
      },
      {
        path: "home", element: <HomePage />
      },
      {
        path: "blog",
        element: <BlogListPage />,
      },
      {
        path: "blog/:slug",
        element: <BlogPostPage />
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
