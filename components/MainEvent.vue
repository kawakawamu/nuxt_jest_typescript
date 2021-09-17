<template>
  <main class="flex justify-center h-screen items-center w-2/3">
    <div
      class="text-center h-32 w-96 max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 mr-24"
    >
      <p data-cy="countCheck" class="count_paragh mt-3">
        Count is: {{ currentcount }}
      </p>
      <button
        @click="increment"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5"
      >
        増えるボタン
      </button>
    </div>
    <div
      class="h-32 w-96 max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"
    >
      <SelectBox />
    </div>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SelectBox from '~/components/SelectBox.vue'
import Countup from '~/components/Countup.vue'

@Component({
  components: {
    SelectBox,
    Countup
  }
})
export default class MainIndex extends Vue {
  currentcount: number = 0

  increment() {
    this.currentcount += 1
  }
}
</script>
