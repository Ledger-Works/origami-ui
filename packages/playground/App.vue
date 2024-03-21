<template>
  <div class="light inter-100">
    <TextField
      v-model="model"
      type="outlined"
      label="text"
    />
    {{ model }}
  </div>
</template>

<script setup lang="ts">
import TextField from 'material/TextField';
import { ref } from 'vue';

const model = ref('')
</script>

<style>
/* Your styles here */
</style>