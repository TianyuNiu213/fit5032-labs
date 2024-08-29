<script setup>
import { ref } from 'vue'
import router from '../router/index'

const formData = ref({
  username: '',
  password: '',
})

const errors = ref({
  username: null,
  password: null,
})

const hardCodUserName = 'user'
const hardCodepassword = '123456'

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 6

   if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`
  } else {
    errors.value.password = null
  }
}

const submitForm = () => {
  validateName(true);
  validatePassword(true);
  
  if (!errors.value.username 
      && !errors.value.password 
      && formData.value.username === hardCodUserName 
      && formData.value.password === hardCodepassword) {
      
    // submittedCards.value.push({ ...formData.value })
    // clearForm()
    alert("login success");
    router.push({name: 'About'});
  }
}

const clearForm = () => {
  formData.value = {
    username: '',
    password: '',
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center title">🗄️ Login Page</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3 justify-content-center">
            <div class="col-md-6 col-sm-8">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>
          </div>
          <div class="row mb-3 justify-content-center">
            <div class="col-md-6 col-sm-8">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
                v-model="formData.password"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Login</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}

.title {
  margin-bottom: 40px; /* Adjust this value to reduce spacing */
}

.text-center {
  text-align: center;
}

.text-danger {
  color: red;
}
</style>
