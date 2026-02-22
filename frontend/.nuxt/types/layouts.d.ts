import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    "auth-daisy": ComponentProps<typeof import("C:/systemdeverlop/personnel-evaluation-system/frontend/layouts/auth-daisy.vue").default>,
    "auth-login": ComponentProps<typeof import("C:/systemdeverlop/personnel-evaluation-system/frontend/layouts/auth-login.vue").default>,
    "auth-vuetify": ComponentProps<typeof import("C:/systemdeverlop/personnel-evaluation-system/frontend/layouts/auth-vuetify.vue").default>,
    daisy: ComponentProps<typeof import("C:/systemdeverlop/personnel-evaluation-system/frontend/layouts/daisy.vue").default>,
    dashboard: ComponentProps<typeof import("C:/systemdeverlop/personnel-evaluation-system/frontend/layouts/dashboard.vue").default>,
    default: ComponentProps<typeof import("C:/systemdeverlop/personnel-evaluation-system/frontend/layouts/default.vue").default>,
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}