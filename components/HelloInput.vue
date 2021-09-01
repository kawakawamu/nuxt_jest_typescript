<template>
  <div>
    <label>
      <input
        type="text"
        :value="name"
        @input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component()
export default class MyInput extends Vue {
  @Prop({ default: '' }) name: string
}
</script>
