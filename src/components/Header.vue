<script setup lang="ts">
import AppLogo from "./icons/AppLogo.vue"
</script>

<template>
  <header class="full-width">
    <div class="breakout">
      <AppLogo />

      <nav aria-label="Main navigation">
        <ul role="list">
          <li><a href="#">About</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Get Started</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-image: url("../assets/images/image-hero-desktop.jpg");
}

header > * {
  display: flex;
  justify-content: space-between;
}

a {
  color: var(--colors-white);
  text-decoration: none;
  font-size: var(--fs-interactive);
}
</style>
