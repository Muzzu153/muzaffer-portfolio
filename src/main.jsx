import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRootRoute, createRoute, createRouter, RouterProvider, useParams } from '@tanstack/react-router'
import { queryClient } from './utils/queryKeys.js'
import { blogKeys } from './utils/queryKeys.js'
import { fetchBlogList, fetchBlogPost } from './api/blog.js'

const rootRoute = createRootRoute({
  component: App
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
}).lazy(() => import('./components/pages/HomePage.lazy.jsx').then((d) => d.Route))

const blogListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  loader: async () => {
    await queryClient.ensureQueryData({
      queryKey: blogKeys.lists(),
      queryFn: fetchBlogList,
    })
  },
}).lazy(() => import('./components/pages/BlogListPage.lazy.jsx').then(d => d.Route))

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  loader: async ({ params }) => {
    await queryClient.ensureQueryData({
      queryKey: blogKeys.detail(params.slug),
      queryFn: () => fetchBlogPost(params.slug),
    })
    return null
  }
}).lazy(() => import('./components/pages/BlogPostPage.lazy.jsx').then(d => d.Route))



const routeTree = rootRoute.addChildren([
  indexRoute,
  blogListRoute,
  blogPostRoute
])

const router = createRouter({ routeTree })

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)



