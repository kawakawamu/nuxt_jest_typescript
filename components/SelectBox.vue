<template>
  <div>
    <div>セレクトボックス</div>
    <select v-model="selectedKey" v-on:change="selected">
      <option v-for="(value, key) in food_items" :key="key">{{ key }}</option>
    </select>

    <select v-if="SelectedItem">
      <option v-for="(item, key) in SelectedItem" :key="key">
        {{ item.food_name }}
      </option>
    </select>
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
  SelectedItem: any = ''

  // 二次元配列
  food_items: FoodItems = {
    fruit: [
      {
        id: 0,
        food_name: '苺'
      },
      {
        id: 1,
        food_name: '林檎'
      }
    ],
    vegetable: [
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
    // this.selectedItem = this.food_items[this.selectedKey]
  }
}
</script>
