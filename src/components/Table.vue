<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { ElTable, ElTableColumn, ElButton, ElPagination } from 'element-plus'
import { Row, Operator } from '@/domains/rows'

let props = defineProps({
  ref: {
    type: ElTable,
  },
  data: {
    type: Array,
  },
  rows: {
    type: Array<Row<any>>,
  },
  operators: {
    type: Array<Operator<any>>,
  },
  operatorHeader: {
    type: String,
  },
  total: {
    type: Number,
  },
  currentPage: {
    type: Number
  }
})

// const tableRef = ref<InstanceType<typeof ElTable>>()

</script>

<template>
  <el-table ref="tableRef" row-key="date" :data="props.data" style="width: 100%">
    <template v-for="(row, idx) in props.rows">
      <el-table-column :prop="row.prop" :label="row.label" :sortable="row.sortable" :formatter="row.formatter"
        :width="row.width" />
    </template>

    <el-table-column v-if="props.operators && props.operators.length > 0" align="right">
      <template #header>
        {{ operatorHeader ? operatorHeader : '操作' }}
      </template>
      <template #default="scope">
        <el-button v-for="(operator, idx) in props.operators" :size="operator.size"
          @click="operator.handler && operator.handler(scope.$index, scope.row)">{{ operator.label }}</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination class="pagination" background layout="prev, pager, next" :current-page="operatorHeader" :total="total" />
</template>

<style scoped lang="less">
.pagination {
  margin-top: .8rem;
}
</style>