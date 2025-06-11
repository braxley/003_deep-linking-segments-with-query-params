import { type Component, defineAsyncComponent } from "vue";

type SegmentRegistry = Record<string, { label: string; component: Component }>;

export const userPageSegmentRegistry = {
  "page-a": {
    label: "Page A",
    component: defineAsyncComponent(() => import("@/views/UserPage/PageA.vue")),
  },
  "page-b": {
    label: "Page B",
    component: defineAsyncComponent(() => import("@/views/UserPage/PageB.vue")),
  },
  "page-c": {
    label: "Page C",
    component: defineAsyncComponent(() => import("@/views/UserPage/PageC.vue")),
  },
} as const satisfies SegmentRegistry;

export type UserPageSegmentRegistryType = keyof typeof userPageSegmentRegistry;
