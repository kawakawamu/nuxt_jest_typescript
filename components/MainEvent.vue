<template>
  <main class="flex justify-center h-screen items-center w-2/3">
    <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
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
