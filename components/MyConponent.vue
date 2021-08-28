<template>
  <div class="hello">
    <p>{{ text }}</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MyComponent extends Vue {
  @Prop() private text!: string

  onClickBtn() {
    console.log('clicked')
  }
}
</script>
