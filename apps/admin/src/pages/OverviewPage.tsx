import { ServiceStatus } from '../features/bootstrap/components/ServiceStatus'

export function OverviewPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-8 px-6 py-12">
      <header>
        <p className="mb-3 text-sm text-secondary">MEALORA ADMIN</p>
        <h1 className="text-3xl font-semibold text-ink">Mealora 管理后台</h1>
        <p className="mt-4 leading-7 text-secondary">
          开发工程已初始化，食物、规则与反馈管理功能将在后续开发中加入。
        </p>
      </header>
      <ServiceStatus />
    </main>
  )
}
