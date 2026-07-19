<script setup lang="ts">
import AppLogo from "./icons/AppLogo.vue"
</script>

<template>
  <header class="full-width">
    <div class="breakout header-inner">
      <AppLogo />

      <nav aria-label="Main navigation">
        <ul role="list" class="nav-list">
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
  min-height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.header-inner {
  padding-block-start: clamp(2rem, 0.333rem + 5.556vw, 3rem);
}

.nav-list {
  display: flex;
  gap: 2rem;
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
