<script setup>

</script>

<template>
  <div class="conteiner">
    <header>
      <div class="logo">totdy.pt</div>
      <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/games'>Games</router-link>
        <router-link to='/about'>About</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-link to='/privacyPolicy'>Privacy Policy</router-link>
    </footer>
  </div>
</template>

<style scoped></style>