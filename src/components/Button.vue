<script setup>
defineProps({
    count: Number,
})
</script>

<template>
      <button type="button" @click="$emit('onClick')">abdabd count is {{ count }}</button>
</template>

<style>
</style>
