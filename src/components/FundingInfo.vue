<script setup lang="ts">
import { store, fundingStats } from "@/store"
</script>

<template>
  <section class="section funding-info card">
    <ul role="list" class="funding-stats switcher">
      <li>
        <span class="text-xl stat">{{ fundingStats.pledged }}</span>
        <span class="stat-text"> of $100,000 backed</span>
      </li>
      <li>
        <span class="text-xl stat">{{ fundingStats.backers }}</span>
        <span class="stat-text"> total backers</span>
      </li>
      <li>
        <span class="text-xl stat">56</span>
        <span class="stat-text"> days left</span>
      </li>
    </ul>

    <div class="progress-bar" :style="{ '--progress': store.totalPledged / 1000 + '%' }"></div>
  </section>
</template>

<style>
.stat-text {
  font-size: var(--fs-body-small);
}

.funding-stats li {
  display: grid;
  justify-items: center;

  &:not(:last-of-type)::after {
    content: "";
    width: 80px;
    height: 2px;
    background-color: var(--border-color-default);
    margin-block-start: 1.5rem;
  }
}

.progress-bar {
  background-color: var(--colors-gray-200);
  border-radius: 100vw;
  height: 12px;
  position: relative;

  &::before {
    content: "";
    height: inherit;
    border-radius: inherit;
    background-color: var(--color-primary);
    width: var(--progress);
    position: absolute;
  }
}

.funding-stats {
  container-type: inline-size;

  @container (inline-size > 35rem) {
    li {
      justify-items: start;
      grid-template-rows: 1fr auto;
      grid-template-columns: auto auto;

      .stat,
      .stat-text {
        grid-column: 1 / 2;
      }

      &:not(:last-of-type)::after {
        width: 2px;
        height: auto;
        margin-block-start: unset;
        justify-self: end;
        grid-row: 1 / 3;
        grid-column: 2;
      }

      &:not(:first-of-type) {
        margin-inline-start: 1.5rem;
      }
    }
  }
}
</style>
