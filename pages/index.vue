<template>
  <div>
    <Header />
    <EventTarget />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import EventTarget from '@/components/ButtonEvent.vue'

@Component({
  components: {
    Header,
    EventTarget,
  },
})
export default class MyInput extends Vue {}
</script>
