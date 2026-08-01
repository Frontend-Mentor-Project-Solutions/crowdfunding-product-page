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
  <component
    :is="interactionType === 'radio' ? 'label' : 'div'"
    class="card reward"
    :class="{ disabled: !hasStock(stock) }"
  >
    <div class="header">
      <input
        v-if="interactionType === 'radio'"
        type="radio"
        name="reward"
        :disabled="!hasStock(stock)"
      />

      <span class="h3">{{ title }}</span>
      <span v-if="minPledge" class="pledge">Pledge ${{ minPledge }} or more</span>
    </div>

    <span v-if="stock !== undefined" class="stock">
      <span class="text-xl">{{ stock }}</span> left
    </span>

    <p class="description">{{ description }}</p>

    <button
      v-if="interactionType === 'button'"
      class="modal-toggle"
      :disabled="!hasStock(stock)"
      command="show-modal"
      commandfor="rewards-modal"
    >
      Select Reward
    </button>
  </component>
</template>

<style>
.reward {
  display: grid;
  row-gap: 1rem;
}

.reward:has(.modal-toggle) {
  .header {
    display: grid;
    grid-template-columns: subgrid;
    row-gap: 0.5rem;
    column-gap: 1rem;
  }

  .stock {
    order: 1;
  }

  .modal-toggle {
    order: 2;
  }
}

.reward:has(input[type="radio"]),
input[type="radio"] {
  cursor: pointer;
}

.reward:has(input[type="radio"]) {
  grid-template-columns: 24px auto 1fr auto;
  column-gap: 1.5rem;

  .text-xl {
    font-size: var(--fs-heading-s);
  }

  .header {
    display: contents;
  }

  .stock {
    justify-self: end;
  }

  .description {
    grid-column: 2 / -1;
  }
}

@container reward (inline-size > 30rem) {
  .reward:has(.modal-toggle) {
    grid-template-columns: auto auto;

    .header,
    .description {
      grid-column: 1 / -1;
    }

    .pledge,
    .modal-toggle {
      justify-self: end;
    }
  }
}

@container reward (inline-size < 35rem) {
  .reward:has(input[type="radio"]) {
    grid-template-columns: auto 1fr;

    .header {
      display: grid;
      column-gap: 1rem;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
    }

    input[type="radio"] {
      grid-row: 1 / -1;
    }

    .stock {
      order: 1;
      justify-self: start;
    }

    .description {
      grid-column: 1 / -1;
    }
  }
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
