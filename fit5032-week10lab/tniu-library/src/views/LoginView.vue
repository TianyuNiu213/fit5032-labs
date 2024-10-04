<template>
  <div class="container mt-3"> <!-- Reduced margin-top class to mt-3 -->
    <div class="row">
      <div class="col-md-6 offset-md-3"> <!-- Adjusted column width for better centering -->
        <h1 class="text-center">🗄️ Login Page</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-12 col-sm-12"> <!-- Full-width columns to center input fields -->
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @input="() => validateName(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-12 col-sm-12"> <!-- Full-width columns to center input fields -->
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
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


<script setup>
import { ref } from 'vue'
import router from '../router'
import { useAuth } from '../router/authenticate'

const hardcodePassword = '123456'
const hardcodeUsername = 'user'
const { isAuthenticated, login } = useAuth()

const formData = ref({
  username: '',
  password: ''
})

const submitForm = () => {
  validateName(true)
  validatePassword(true)
  if (
    !errors.value.username &&
    !errors.value.password &&
    formData.value.username === hardcodeUsername &&
    formData.value.password === hardcodePassword
  ) {
    alert('Login successful!')
    login()
    router.push({ name: 'About' })
  }
}

const clearForm = () => {
  formData.value = {
    username: '',
    password: ''
  }
  errors.value = {
    username: null,
    password: null
  }
}

const errors = ref({
  username: null,
  password: null
})

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  if (formData.value.password.length < 6) {
    if (blur) errors.value.password = 'Password must be at least 6 characters long.'
  } else {
    errors.value.password = null
  }
}
</script>

<style scoped>
/* Center the form and reduce the margin-top of the container */
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 50vw; /* Reduce the width to better center the form */
  margin: 0 auto;
  padding: 20px;
  margin-top: 30px; /* Reduce the margin-top to decrease space between the heading and navbar */
  border-radius: 10px;
}

h1.text-center {
  margin-bottom: 10px; /* Reduce the space below the heading */
}

.form-label {
  text-align: center;
  display: block;
}

.form-control {
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

.row.mb-3 {
  justify-content: center; /* Center the input fields */
}
</style>

