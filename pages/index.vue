<template>
  <div>
    <EventTarget />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EventTarget from '@/components/TargetEvent.vue'

@Component({
  components: {
    EventTarget,
  },
})
export default class MyInput extends Vue {}
</script>
