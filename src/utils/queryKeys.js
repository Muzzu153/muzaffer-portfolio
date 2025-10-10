import { QueryClient } from '@tanstack/react-query'

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
    },
  },
})

// Query keys factory
export const blogKeys = {
  all: ['blogs'] ,
  lists: () => [...blogKeys.all, 'list'] ,
  list: (filters) => [...blogKeys.lists(), { filters }] ,
  details: () => [...blogKeys.all, 'detail'] ,
  detail: (slug) => [...blogKeys.details(), slug],
}