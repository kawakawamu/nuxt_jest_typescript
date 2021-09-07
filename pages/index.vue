<template>
  <div>
    <Header />
    <Main />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import Main from '~/components/MainEvent.vue'

@Component({
  components: {
    Header,
    Main
  }
})
export default class MyInput extends Vue {}
</script>
