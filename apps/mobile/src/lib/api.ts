import { createMealoraClient } from '@mealora/api-client'

// localhost reaches the Mac in Simulator; a physical iPhone needs the Mac's LAN address.
export const api = createMealoraClient(
  process.env.EXPO_PUBLIC_API_URL || 'http://localhost:8080',
)
