<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page"
            >Home (Week 5)</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<style>
/* Moved from LibraryForm.vue to ensure global application */
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}

/* Bootstrap-based header styling for consistency */
.navbar {
  box-shadow: 0 4px 6px -6px #222;
}

.navbar-brand {
  font-weight: bold;
}

.nav-item .nav-link {
  color: #275fda;
}

.nav-item .nav-link:hover {
  color: #0b53da;
}
</style>
