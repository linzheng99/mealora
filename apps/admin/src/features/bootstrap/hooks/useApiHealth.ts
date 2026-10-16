import { getHealth } from '@mealora/api-client'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../../lib/api'

export function useApiHealth() {
  return useQuery({
    queryKey: ['api', 'health'],
    queryFn: ({ signal }) => getHealth(api, signal),
    retry: false,
    staleTime: 30_000,
  })
}
