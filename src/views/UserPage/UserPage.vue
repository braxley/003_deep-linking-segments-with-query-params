<template>
  <IonPage>
    <IonContent class="ion-padding">
      <IonSegment v-model="activeSegment">
        <IonSegmentButton
          v-for="(segment, key) in userPageSegmentRegistry"
          :key="segment.label"
          :value="key"
        >
          {{ segment.label }}
        </IonSegmentButton>
      </IonSegment>

      <KeepAlive>
        <component :is="currentPage" />
      </KeepAlive>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { IonPage, IonContent, IonSegment, IonSegmentButton } from "@ionic/vue";
import {
  userPageSegmentRegistry,
  type UserPageSegmentRegistryType,
} from "@/views/UserPage/user-page-segment.registry.ts";

const route = useRoute();
const router = useRouter();

const activeSegment = ref(
  (route.query.segment as UserSegmentRegistryType) || "page-a"
);

const currentPage = computed(
  () => userPageSegmentRegistry[activeSegment.value].component
);

watch(activeSegment, (newSegment) => {
  router.replace({ query: { segment: newSegment } });
});
</script>
