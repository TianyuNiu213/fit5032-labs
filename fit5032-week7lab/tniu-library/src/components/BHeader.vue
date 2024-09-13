<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">
            Home (Week 5)
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active"> About </router-link>
        </li>

        <!-- Conditionally render Firebase Login/Register links if not authenticated -->
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link to="/FireLogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link to="/FireRegister" class="nav-link" active-class="active">Firebase Register</router-link>
        </li>

        <!-- Conditionally render Log in/Log out based on authentication status -->
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link to="/login" class="nav-link" active-class="active"> Log in </router-link>
        </li>
        <li class="nav-item" v-else>
          <button class="nav-link" @click="handleLogout">Log out</button>
        </li>

        <!-- Conditionally render Admin Dashboard for admin users -->
        <li class="nav-item" v-if="isAuthenticated && userRole === 'admin'">
          <router-link to="/admin-dashboard" class="nav-link" active-class="active">Dashboard</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import { getAuth, signOut } from 'firebase/auth';
import router from '../router';
import { useAuth } from '../router/authenticate';

const { isAuthenticated, userRole, logout } = useAuth();
const auth = getAuth();

const handleLogout = () => {
  console.log("Current user before logout:", auth.currentUser); // Log current user before logout

  signOut(auth)
    .then(() => {
      logout(); // Clear authentication state
      alert('You have been logged out.');
      router.push({ name: 'Home' }); // Redirect to home page after logout
    })
    .catch((error) => {
      console.log('Error during sign out:', error);
      alert('An error occurred while logging out.');
    });
};
</script>

<style scoped>
/* Your existing CSS */
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
