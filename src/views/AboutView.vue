<script setup lang="ts">
import Form from '@/components/Form.vue'
import { Field } from '@/domains/form'
import { ref, onMounted } from 'vue'
import { testPost } from '@/api/test'

const form = ref<Record<string, any>>({
  aaa: 1,
  bbbb: ['aaaaaa'],
  ccc: 3,
  radio: 3,
  textarea: 'xxvasdsdafasfsfsdfdf',
})

const fields = ref<Field[]>([
  {
    prop: 'aaa',
    label: 'xxxx',
    type: 'input',
  },
  {
    prop: 'textarea',
    label: 'textarea',
    type: 'textarea',
  },
  {
    prop: 'ccc',
    label: 'xxxx',
    type: 'select',
    placeholder: '请选择',
    options: [
      {
        label: 'aaa',
        value: 1,
      },
      {
        label: 'bbbbb',
        value: 3,
      }
    ],
  },
  {
    prop: 'bbbb',
    label: 'xxbbbbxx',
    type: 'checkbox',
    options: [
      {
        label: 'xxx',
        value: 'bbbb',
      },
      {
        label: 'xxxx',
        value: 'cccc',
      }
    ]
  },
  {
    prop: 'radio',
    label: 'radio',
    type: 'radio',
    options: [
      {
        label: 'xxx',
        value: 'bbbb',
      },
      {
        label: 'xxxx',
        value: 'cccc',
      }
    ]
  },
])

const handleSubmit = (form: any) => {
  console.log(form)
  testPost(form).then((res) => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}

</script>

<template>
  <div class="about">
    <Form :fields="fields" :form="form" :submit="handleSubmit" />
  </div>
</template>
