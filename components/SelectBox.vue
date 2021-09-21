<template>
  <div>
    <div class="my-3">セレクトボックス</div>
    <div class="flex">
      <select
        v-model="selectedKey"
        v-on:change="selected"
        data-cy="select"
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-5"
      >
        <option v-for="(value, key) in food_items" :key="key">{{ key }}</option>
      </select>

      <select
        v-if="SelectedItem"
        data-cy="detailselect"
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option v-for="(item, key) in SelectedItem" :key="key">
          {{ item.food_name }}
        </option>
      </select>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

// 二次元配列の型定義
interface FoodItem {
  id: number
  food_name: string
}
interface FoodItems {
  [key: string]: FoodItem[]
}

@Component
export default class SelectBox extends Vue {
  selectedKey: string = ''
  SelectedItem: FoodItem[] = []

  // 二次元配列
  food_items: FoodItems = {
    フルーツ: [
      {
        id: 0,
        food_name: '苺'
      },
      {
        id: 1,
        food_name: '林檎'
      }
    ],
    やさい: [
      {
        id: 2,
        food_name: '白菜'
      },
      {
        id: 3,
        food_name: 'なす'
      },
      {
        id: 4,
        food_name: '大根'
      }
    ]
  }

  selected() {
    this.SelectedItem = this.food_items[this.selectedKey]
  }
}
</script>
