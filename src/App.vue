<script setup>
</script>

<template>
  <div class="container mx-auto flex flex-col min-h-screen">
    <header class="p-7 shrink-0 flex flex-col gap-y-5 flex-wrap content-center">
      <div class="text-5xl">totdy.pt</div>
      <nav class="flex flex-row gap-x-5 *:cursor-pointer *:text-gray-500 hover:*:text-gray-300 ">
        <router-link class="[&.router-link-active]:text-gray-700" to='/'>Home</router-link>
        <router-link class="[&.router-link-active]:text-gray-700" to='/games'>Games</router-link>
        <router-link class="[&.router-link-active]:text-gray-700" to='/about'>About</router-link>
      </nav>
    </header>
    <main class="p-7 grow">
      <router-view></router-view>
    </main>
    <footer class="p-7 shrink-0">
      <router-link to='/privacyPolicy'>Privacy Policy</router-link>
    </footer>
  </div>
</template>

<style scoped>
</style>