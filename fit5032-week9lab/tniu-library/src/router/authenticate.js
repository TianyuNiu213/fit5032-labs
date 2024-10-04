import { ref } from 'vue';

const isAuthenticated = ref(false);
const userRole = ref(null); // Track user role (admin or regular user)

export function useAuth() {
  const login = (role) => {
    isAuthenticated.value = true;
    userRole.value = role; // Set role upon login
  };

  const logout = () => {
    isAuthenticated.value = false;
    userRole.value = null; // Clear role upon logout
  };

  return {
    isAuthenticated,
    userRole,
    login,
    logout,
  };
}
