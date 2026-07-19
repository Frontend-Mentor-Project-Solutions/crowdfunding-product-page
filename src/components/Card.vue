<script setup lang="ts">
import type { PropType } from "vue"

const props = defineProps({
  title: { type: String, required: true },
  minPledge: Number,
  description: { type: String, required: true },
  stock: Number,
  interactionType: {
    type: String as PropType<"button" | "radio">,
    default: "button",
  },
})

function hasStock(stock: number | undefined): boolean {
  if (stock === 0) {
    return false
  }

  return true
}
</script>
<!-- TODO: disable for screenreaders as well -->
<template>
  <div class="card reward" :class="{ disabled: !hasStock(stock) }">
    <div class="header">
      <span class="h3">{{ title }}</span>
      <span class="pledge">Pledge ${{ minPledge }} or more</span>
    </div>

    <p class="description">{{ description }}</p>

    <span class="stock">
      <span class="text-xl">{{ stock }}</span> left
    </span>

    <button v-if="interactionType === 'button'" class="modal-toggle" :disabled="!hasStock(stock)">
      Select Reward
    </button>
  </div>
</template>

<style>
.reward {
  display: grid;
  row-gap: 1.25rem;
}

.header {
  display: grid;
  grid-template-columns: subgrid;
  row-gap: 0.5rem;
}

/* styles */

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

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
