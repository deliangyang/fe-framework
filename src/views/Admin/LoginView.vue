<script setup lang="ts">
import { ref } from 'vue'
import Form from '@/components/Form.vue'
import { LoginWithEmail } from '@/domains/login_with_email';
import { Field } from '@/domains/form'
import { login } from '@/api/test';
import { useRouter } from 'vue-router';

const router = useRouter()

const fields = ref<Field[]>([
  {
    prop: 'email',
    label: '账号',
    type: 'input',
  },
  {
    prop: 'password',
    label: '密码',
    type: 'password',
  },
])

const form = ref<LoginWithEmail>({
  email: "",
  username: '',
  password: '',
})

const handleSubmit = (form: any) => {
  login(form).then((res) => {
    console.log(res)
    router.push('/')
  }).catch(error => {
    console.log(error)
  })
}

</script>

<template>
  <div class="login">
    <el-container>
      <el-main>
        <el-form>
          <Form :fields="fields" :form="form" :submit="handleSubmit" />
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>