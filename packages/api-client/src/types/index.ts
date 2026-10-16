import type { Client } from 'openapi-fetch'
import type { components, paths } from './schema'

export type MealoraClient = Client<paths>
export type HealthResponse = components['schemas']['HealthResponse']
