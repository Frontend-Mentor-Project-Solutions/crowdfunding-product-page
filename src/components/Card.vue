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
</script>

<template>
  <div class="card reward">
    <span class="h3">{{ title }}</span>
    <span class="pledge">Pledge ${{ minPledge }} or more</span>
    <p class="description">{{ description }}</p>

    <span class="stock">
      <span class="text-xl">{{ stock }}</span> left
    </span>
    <button v-if="interactionType === 'button'" class="modal-toggle">Select Reward</button>
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

.pledge,
.modal-toggle {
  justify-self: end;
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
</style>
