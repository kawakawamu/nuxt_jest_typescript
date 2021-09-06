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
  [key: string]: ErrorInfo
}

interface ErrorResponse {
  [key: string]: string[]
}

@Component
export default class FormVue extends Vue {
  @Prop({ type: Number, required: false }) initPriority!: number
  @Prop({ type: String, required: false }) initTodo!: string
  @Prop({ type: String, required: false }) paramld?: string
  selectedPriority?: number | null = null
  labelList: string[] = ['todo', 'priority']
  todo?: string = ''
  errors: ErrorInfoes = {
    todo: {
      flag: false,
      count: 0,
      message: [],
    },
    priority: {
      flag: false,
      count: 0,
      message: [],
    },
  }

  priority: Priority[] = [
    { label: '低', value: 0 },
    { label: '中', value: 1 },
    { label: '高', value: 2 },
  ]

  @Emit()
  public initTodoList() {}

  submit(): void {
    this.initErrorInfo()
    if (this.paramId) {
      this.putSubmit(this.paramld)
    } else {
      this.postSubmit()
    }
  }

  postSubmit(): void {
    try {
      axios
        .post(process.env.API + '/tasks/', {
          todo: this.todo,
          priority: this.selectedPriority,
        })
        .then(() => {
          this.initFormValue()
          this.initTodoList()
        })
        .catch((error) => {
          const errorList = error.response.data
          this.displayError(errorList)
        })
    } catch (e) {
      return e
    }
  }
}
</script>
