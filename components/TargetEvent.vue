<template>
  <v-container>
    <p data-cy="countCheck">Count is: {{ count }}</p>
    <v-btn @click="increment">増えます</v-btn>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  count: number = 0

  increment() {
    this.count += 1
  }
}
</script>
