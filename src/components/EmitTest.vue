<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { EventBus } from '@/domains/event_bus'

const message = ref<string>('')

const counter = ref(0)

onMounted(() => {
  EventBus.on('test', (msg) => {
    message.value = msg as string
    counter.value += 1
  })
})
</script>

<template>
  <div>msssge: {{message}}, counter: {{counter}}</div>
</template>