<template>
  <div class="container mt-5">
    <header class="mb-4">
      <nav class="navbar navbar-expand-lg navbar-light bg-light rounded shadow-sm">
        <div class="container">
          <!-- <router-link :to="{ name: 'home' }" class="navbar-brand text-primary">Home</router-link> -->
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'contact' }" class="nav-link">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
/* Optional custom styles can go here */
.navbar-brand {
  font-weight: bold;
}
.nav-link {
  color: #007bff;
}
.nav-link:hover {
  color: #0056b3;
}
</style>
