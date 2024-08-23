<script setup>
</script>

<template>
  <div class="container">
    <header>
      <nav>
        <router-link :to="{name: 'home'}" class="me-4">Home</router-link>
        <router-link :to="{name: 'contact'}">Contact</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
</style>
