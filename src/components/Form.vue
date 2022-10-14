<script setup lang="ts">

import { Field, handlerSubmit } from '@/domains/form';
import { PropType } from 'vue';
import {
  ElForm, ElFormItem, ElButton, ElInput, ElSelect, ElSwitch, ElOption,
  ElCheckboxGroup, ElCheckbox,
  ElRadioGroup, ElRadio,
} from 'element-plus'

let props = defineProps({
  form: {
    type: Object as PropType<Record<string, any>>,
  },
  fields: {
    type: Array<Field>,
  },
  submit: {
    type: Function as PropType<handlerSubmit>,
    required: true,
  },
})

const onSubmit = () => {
  props.submit(props.form)
}
</script>

<template>
  <el-form v-if="props.form" :model="props.form" label-width="120px">
    <template v-for="(field, idx) in props.fields">
      <el-form-item :label="field.label">
        <el-input v-if="field.type === 'input'" v-model="props.form[field.prop]" :placeholder="field.placeholder" />

        <el-switch v-else-if="field.type === 'switch'" v-model="props.form[field.prop]" />

        <el-select v-else-if="field.type === 'select'" v-model="props.form[field.prop]" :placeholder="field.placeholder">
          <template v-for="(option, idx) in field.options">
            <el-option :label="option.label" :value="option.value"></el-option>
          </template>
        </el-select>

        <el-checkbox-group v-else-if="field.type === 'checkbox'" v-model="props.form[field.prop]">
          <template v-for="(option, idx) in field.options">
            <el-checkbox :label="option.label" :name="field.prop"></el-checkbox>
          </template>
        </el-checkbox-group>

        <el-radio-group v-else-if="field.type === 'radio'" v-model="props.form[field.prop]">
          <template v-for="(option, idx) in field.options">
            <el-radio :label="option.label" :value="option.value"></el-radio>
          </template>
        </el-radio-group>

        <el-input v-if="field.type === 'textarea'" type="field.type" v-model="props.form[field.prop]" :placeholder="field.placeholder" />

      </el-form-item>
    </template>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
