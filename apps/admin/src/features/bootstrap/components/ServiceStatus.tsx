import { Alert, Button } from 'antd'
import { useApiHealth } from '../hooks/useApiHealth'

export function ServiceStatus() {
  const health = useApiHealth()

  return (
    <div className="flex flex-col gap-4">
      <div role="status">
        <Alert
          type={
            health.isError ? 'error' : health.isPending ? 'info' : 'success'
          }
          showIcon
          title={
            health.isPending
              ? '正在连接服务…'
              : health.isError
                ? '服务暂时无法连接，请检查 API 是否已启动'
                : '服务连接成功'
          }
        />
      </div>
      <Button onClick={() => void health.refetch()} loading={health.isFetching}>
        重新检查连接
      </Button>
    </div>
  )
}
