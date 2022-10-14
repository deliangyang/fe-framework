<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <el-button>hello world</el-button>
  </div>
</template>

<script setup lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ElButton } from 'element-plus';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { onMounted } from 'vue';

onMounted(() => {
  console.log(1)
})
</script>
