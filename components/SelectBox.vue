<template>
  <select v-model="selectedKey" v-on:change="selected">
    <option v-for="(value, key) in items">{{ key }}</option>
  </select>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SelectBox extends Vue {
  selectedKey: string = ''
  // items: {
  //   野菜: [{ name: '白菜' }, { name: '人蔘' }]
  //   果物: [{ name: '苺' }, { name: '林檎' }]
  // }
}
</script>
