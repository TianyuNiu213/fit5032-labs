<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="my-name">
    <h1>My name is Tianyu Niu!</h1>
  </div>
</template>

<style scoped>
.my-name {
  text-align: center;
  margin-top: 50px;
}

h1 {
  color: #42b983;
  font-family: 'Roboto', sans-serif;
}
</style>
