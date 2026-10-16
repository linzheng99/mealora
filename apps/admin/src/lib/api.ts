import { createMealoraClient } from '@mealora/api-client'

// Vite proxies /api during development; production keeps the same public path.
export const api = createMealoraClient('')
