<template>
  <v-container>
    <v-row>
      <v-card>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <v-text-field
                  v-model="todo"
                  label="やること"
                  :error="errors.todo.flag"
                  :error_count="errors.todo.count"
                  :messages="errors.todo.message"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-select
                  v-model="selectedPriority"
                  label="優先度"
                  dense
                  :items="priority"
                  :error="errors.priority.flag"
                  :error_count="errors.priority.message"
                  item-text="lavel"
                  item-value="value"
                >
                </v-select>
              </v-col>
              <v-col cols="12" sm="6" class="text-right">
                <v-btn class="mr-4" type="button" @click="submit()">
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'nuxt-property-decorator'

interface Priority {
  label: string
  value: number
}

interface ErrorInfo {
  flag: boolean
  count: number
  message: string[]
}

interface ErrorInfoes {
  [key: string]: string[]
}

interface ErrorResponse {
  [key: string]: string[]
}
</script>
