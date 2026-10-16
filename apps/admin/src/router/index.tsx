import { createBrowserRouter } from 'react-router'
import { OverviewPage } from '../pages/OverviewPage'

export const router = createBrowserRouter([
  { path: '/', Component: OverviewPage },
])
