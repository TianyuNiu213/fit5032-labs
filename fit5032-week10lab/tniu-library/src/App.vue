<template>
  <div class="main-container">
    <!-- Conditionally show the header using v-if -->
    <header v-if="showHeader">
      <BHeader />
    </header>
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import BHeader from './components/BHeader.vue';
import CountBookAPI from './views/CountBookAPI.vue';

export default {
  name: 'App',
  components: {
    BHeader,
    CountBookAPI
  },
  computed: {
    // Only show the header if the route is not 'CountBookAPI'
    showHeader() {
      return this.$route.name !== 'CountBookAPI';
    }
  }
};
</script>

<style>
/* Center the container and header links */
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  text-align: center; /* Center align the text content */
}

.navbar {
  display: flex;
  justify-content: center; /* Center align the navbar items */
  box-shadow: 0 4px 6px -6px #222;
}

.navbar-brand {
  font-weight: bold;
}

.nav-item .nav-link {
  color: #275fda;
  padding: 10px; /* Add padding for spacing between links */
}

.nav-item .nav-link:hover {
  color: #0b53da;
}

/* Ensure header items are centered */
header {
  display: flex;
  justify-content: center; /* Center the content in the header */
  padding: 20px 0; /* Add padding to separate the header from the content */
}
.about{
  text-align: center;
}
</style>
