<script setup lang="ts"></script>

<template>
  <div class="card reward">
    <span class="h3">Blah blah stand</span>
    <span class="pledge">Pledge $0 or more</span>
    <p class="description">
      You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
      campaign, and you’ll be added to a special Backer member list.
    </p>

    <span class="stock"><span class="text-xl">100</span> left</span>
    <button>Select Reward</button>
  </div>
</template>

<style>
.reward {
  display: grid;
  row-gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
}

.description {
  grid-column: 1 / -1;
}

.pledge {
  justify-self: end;
}

.pledge {
  color: var(--color-primary);
  font-weight: 500;
}

.stock {
  font-size: var(--fs-body-small);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
