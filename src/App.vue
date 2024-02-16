<script setup>

</script>

<template>
  <div class="conteiner">
    <header>
      <div class="logo">totdy.pt</div>
      <nav>
        <RouterLink to='/'>Home</RouterLink>
        <RouterLink to='/games'>Games</RouterLink>
        <RouterLink to='/about'>About</RouterLink>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <RouterLink to='/privacyPolicy'>Privacy Policy</RouterLink>
    </footer>
  </div>
</template>

<style scoped></style>