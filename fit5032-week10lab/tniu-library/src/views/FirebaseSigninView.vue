<template>
  <div>
    <h1>Sign in</h1>
    <p>
      <input type="email" placeholder="Email" v-model="email" required />
    </p>
    <p>
      <input type="password" placeholder="Password" v-model="password" required />
    </p>
    <p>
      <button @click="signin">Sign in via Firebase</button>
    </p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { useAuth } from "../router/authenticate";

const email = ref("");
const password = ref("");
const errorMessage = ref(null);
const successMessage = ref(null);
const router = useRouter();
const auth = getAuth();
const { login } = useAuth();
const adminEmail = 'admin@gmail.com'; // Admin email

const signin = () => {
  errorMessage.value = null;
  successMessage.value = null;

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      if (email.value === adminEmail) {
        login("admin");
        successMessage.value = "Login successful! Hello Admin!";
        router.push("/admin-dashboard");
      } else {
        login("user");
        successMessage.value = "Login successful!";
        router.push("/");
      }
    })
    .catch((error) => {
      errorMessage.value = error.message;
    });
};
</script>

<style scoped>
.error { color: red; }
.success { color: green; }
</style>
