<template>
  <div>
    <h1>Create an Account</h1>
    <p><input type="email" placeholder="Email" v-model="email" required /></p>
    <p><input type="password" placeholder="Password" v-model="password" required /></p>
    <p><button @click="register">Save to Firebase</button></p>
    
    <!-- Display success message if registration is successful -->
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    
    <!-- Display error message if registration fails -->
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMessage = ref(null); // To display error messages
const successMessage = ref(null); // To display success message
const router = useRouter();
const auth = getAuth();

const register = () => {
  // Clear any previous messages
  errorMessage.value = null;
  successMessage.value = null;

  // Check if email or password is empty
  if (!email.value || !password.value) {
    errorMessage.value = "Please enter both email and password.";
    return;
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log("Firebase Register Successful!");
      successMessage.value = "Registration successful! Redirecting to login...";
      setTimeout(() => {
        router.push("/FireLogin"); // Redirect after 2 seconds
      }, 2000);
    })
    .catch((error) => {
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      errorMessage.value = handleAuthErrors(error.code);
    });
};

// Function to map Firebase error codes to user-friendly messages
const handleAuthErrors = (code) => {
  switch (code) {
    case "auth/invalid-email":
      return "Invalid email format. Please check and try again.";
    case "auth/email-already-in-use":
      return "This email is already registered. Please use a different one.";
    case "auth/weak-password":
      return "Password should be at least 6 characters long.";
    default:
      return "An error occurred. Please try again.";
  }
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  margin-top: 10px;
}
</style>
