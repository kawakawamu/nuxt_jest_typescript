<template>
  <div>
    <p data-cy="countCheck" class="count_paragh">
      Count is: {{ currentcount }}
    </p>
    <button @click="increment">増えるボタン</button>
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
