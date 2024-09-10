<template>
  <div>
    <h1>Sign in</h1>
    <p>
      <input 
        type="email" 
        placeholder="Email" 
        v-model="email" 
        required 
      />
    </p>
    <p>
      <input 
        type="password" 
        placeholder="Password" 
        v-model="password" 
        required 
      />
    </p>
    <p>
      <button @click="signin">Sign in via Firebase</button>
    </p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p> <!-- Success Message -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMessage = ref(null);
const successMessage = ref(null); // New state for success message
const router = useRouter();
const auth = getAuth();

const signin = () => {
  // Reset messages
  errorMessage.value = null;
  successMessage.value = null;

  // Check if email or password is empty
  if (!email.value || !password.value) {
    errorMessage.value = "Please enter both email and password.";
    return;
  }

  // Sign in with Firebase Authentication
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Firebase Sign-in Successful!");
      successMessage.value = "Login successful! Redirecting..."; // Set success message
      setTimeout(() => {
        router.push("/"); // Redirect to home page on successful sign-in after 2 seconds
      }, 2000);
      console.log(auth.currentUser); // Check the current signed-in user
    })
    .catch((error) => {
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      errorMessage.value = handleAuthErrors(error.code); // Display a friendly error message
    });
};

// Function to map Firebase error codes to user-friendly messages
const handleAuthErrors = (code) => {
  switch (code) {
    case "auth/invalid-email":
      return "Invalid email format. Please check and try again.";
    case "auth/user-not-found":
      return "No user found with this email.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    default:
      return "An error occurred. Please try again.";
  }
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}

.success-message {
  color: green;
  margin-top: 10px;
}
</style>
