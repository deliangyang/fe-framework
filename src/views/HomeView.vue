<script setup lang="ts">
import Table from '@/components/Table.vue'
import { Row, Operator } from '@/domains/rows';
import { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';
import { ref } from 'vue'
import { EventBus } from '@/domains/event_bus'
import { ElButton } from 'element-plus'
import EmitTest from '@/components/EmitTest.vue'

interface User {
  name: string
  age: number
}

const data = ref<User[]>([
  {
    name: 'lili',
    age: 10,
  },
  {
    name: 'lili',
    age: 10,
  },
  {
    name: 'lili',
    age: 10,
  }
])

const rows = ref<Row<User>[]>([
  {
    prop: '名字',
    label: '名字',
    formatter: (row: User, column: TableColumnCtx<User>): string => {
      return row.name;
    }
  },
  {
    prop: 'age',
    label: 'age',
    formatter: (row: User, column: TableColumnCtx<User>): string => {
      return `${row.age}`;
    }
  },
])

const operators = ref<Operator<User>[]>([
  {
    label: '删除',
    size: 'small',
    handler: (index: number, row: User) => {
      console.log(index, row)
    },
  },
  {
    label: '删除',
    size: 'small',
    handler: (index: number, row: User) => {
      console.log(index, row)
    },
  },
  {
    label: '删除',
    size: 'small',
    handler: (index: number, row: User) => {
      console.log(index, row)     
      data.value = data.value.filter((_, idx : number) => {
        return idx != index
      })
      console.log(data.value)
    },
  }
])

const handleSendMessage = () => {
  EventBus.emit('test', 'hello world')
}
</script>

<template>
  <div class="home">
    <el-button @click="handleSendMessage">click send message</el-button>
    <EmitTest />
    <router-link to="/about">go to /about</router-link>
    <Table :data="data" :rows="rows" :operators="operators" :total="1000" />
  </div>
</template>