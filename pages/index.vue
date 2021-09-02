<template>
  <div>
    <EventTarget />
    <InputForms />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EventTarget from '@/components/TargetEvent.vue'
import InputForms from '@/components/InputForms.vue'

@Component({
  components: {
    EventTarget,
    InputForms,
  },
})
export default class MyInput extends Vue {}
</script>
