
type FieldType = 'select' 
  | 'input' 
  | 'textarea' 
  | 'switch' 
  | 'checkbox' 
  | 'radio'
  | 'password'
  | 'file'      // todo
  | 'files'
  | 'datetime'
  | 'timepick'

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

// handlerSubmit 提交表单
export type handlerSubmit = (form: any) => void