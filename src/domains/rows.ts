
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'

export type Rows<T> = Row<T>[]

export type formatter<T> = (row: T, column: TableColumnCtx<T>) => string

export interface Row<T> {
  prop: string,
  label?: string,
  sortable?: boolean,
  width?: string,
  formatter?: formatter<T>,
}

export type handler<T> = (index: any, row: T) => void

export type Operators<T> = Operator<T>[]

export interface Operator<T> {
  label: string,
  size?: string,
  handler?: handler<T>,
}