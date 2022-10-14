import { Options } from "element-plus"

type FieldType = 'select' | 'input' | 'textarea' | 'switch' | 'checkbox' | 'radio'

// Option 选项
type Option = {
  label: string,
  value: any,
}

// Field 表单域
export interface Field {
  prop: string,
  label: string,
  placeholder?: string,
  type: FieldType,
  options?: Option[],
}