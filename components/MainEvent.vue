<template>
  <main class="flex flex-wrap h-screen items-center">
    <div>
      <p data-cy="countCheck" class="count_paragh">Count is: {{ count }}</p>
      <button @click="increment">増えます</button>
    </div>
  </main>
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
