<template>
  <div>
    <p data-cy="countCheck" class="count_paragh">
      カウント数は {{ currentcount }} です
    </p>
    <button @click="increment">カウントボタン</button>
  </div>
</template>
<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default class Countup extends Vue {
  currentcount: number = 0

  increment() {
    this.currentcount += 1
  }
}
</script>
