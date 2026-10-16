# Mealora

## 1. 产品介绍

Mealora 是以 Chat Agent 为核心的 iOS 饮食与运动管理 App。通过照片或文字记录饮食、查询营养摄入、管理运动与身体数据，并根据目标和饮食偏好安排下一餐。

三个端的基础工程已初始化，当前包含启动检查页和 API 健康检查，以下业务功能待开发。

<a id="features"></a>

## 2. 功能

### iOS App（用户端）

- **图文记餐**：发送食物照片或文字，核对食物、份量和营养，修改后确认录入或取消。
- **饮食管理**：搜索食物、手动记餐、保存常吃组合、复制历史餐食，编辑和删除记录。
- **营养统计**：查看热量、蛋白质、碳水和脂肪摄入，标明估算与待补充数据。
- **个性化配餐**：结合目标、口味、过敏、预算和已有食材推荐多种搭配，支持换一批及食材替换。
- **餐食计划**：管理菜谱、下一餐和一周备餐，区分计划与实际食用。
- **个人信息**：通过对话更新个人资料，记录体重、胸围、腰围和臀围。
- **运动与趋势**：记录运动，查看消耗估算、身体测量趋势及报告。
- **日常记录**：语音、标签和扫码记餐，饮水记录、自定义提醒及桌面小组件。
- **数据管理**：保存草稿、离线记录与同步，管理授权、数据导出和账号删除。

### PC 管理后台（管理端）

- **食物与菜谱维护**：管理食物库、份量换算、营养来源和菜谱。
- **规则与内容审核**：审阅营养规则、配餐模板和素材。
- **反馈与权限管理**：处理反馈、数据纠错与异常任务，管理角色权限和操作审计。

<a id="technology"></a>

## 3. 技术选型

采用主流生态的稳定发行版。以下基线核对于 2026-10-15，移动端依照 Expo 的 React / React Native 兼容组合。

| 用途           | 技术与库                                                                                                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| iOS App        | [Expo SDK 57](https://docs.expo.dev/versions/latest/) + React Native 0.86 + TypeScript + Expo Router                                           |
| PC 管理后台    | [React 19.3](https://react.dev/versions) + [Vite 8.3](https://vite.dev/releases) + TypeScript + [React Router 8](https://reactrouter.com/home) |
| 后台 UI 与样式 | [Ant Design 6](https://ant.design/changelog/) + [Tailwind CSS 4](https://tailwindcss.com/docs/installation/using-vite)                         |
| 请求与缓存     | [TanStack Query 5](https://tanstack.com/query/latest/docs/framework/react/overview)                                                            |
| 本地存储       | Expo SQLite + SecureStore                                                                                                                      |
| Go 后端        | [Go 1.27](https://go.dev/dl/) + net/http + [chi 5](https://github.com/go-chi/chi)                                                              |
| 数据库与访问   | [PostgreSQL 18](https://www.postgresql.org/support/versioning/) + pgx + sqlc + goose                                                           |
| 接口与 Agent   | REST + OpenAPI + SSE，Go 编排与业务工具                                                                                                        |
| 工程与部署     | pnpm workspace + Docker Compose（本地使用 OrbStack）+ GitHub Actions                                                                           |

## 4. 目录结构

一个仓库管理三个工程，分别构建部署；前端使用 pnpm 工作区，服务端使用 Go Modules。

```text
mealora/
├── apps/
│   ├── mobile/                # iOS App
│   └── admin/                 # PC 管理后台
├── services/
│   └── api/                   # Go API 与 Agent
├── packages/api-client/       # 共用请求与生成的接口类型
├── contracts/openapi.yaml     # 接口契约
├── package.json               # 工作区脚本
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── README.md
```
