import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "auth" | "default"
declare module "/Users/kromate/Desktop/gamexit_/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}