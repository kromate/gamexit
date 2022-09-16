import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "hello-world" | "is-authenticated"
declare module "/Users/kromate/Desktop/gamexit/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}