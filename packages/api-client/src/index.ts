import createClient from 'openapi-fetch'
import type { paths } from './types/schema'
import type { HealthResponse, MealoraClient } from './types'

export function createMealoraClient(baseUrl: string): MealoraClient {
  return createClient<paths>({ baseUrl })
}

/** Checks API availability only; it does not imply database or business readiness. */
export async function getHealth(
  client: MealoraClient,
  signal?: AbortSignal,
): Promise<HealthResponse> {
  const { data, response } = await client.GET('/api/health', { signal })
  if (!response.ok || !data) {
    throw new Error('服务暂时无法连接')
  }

  // Generated types cannot validate a response from a misconfigured proxy/server.
  if (data.status !== 'ok' || data.service !== 'mealora-api') {
    throw new Error('服务响应不符合接口约定')
  }
  return data
}
