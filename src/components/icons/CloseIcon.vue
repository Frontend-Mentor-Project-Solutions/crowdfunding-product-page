<template>
  <svg
    width="14"
    height="15"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Close menu"
    class="close-icon"
  >
    <g fill="#FFF" fill-rule="evenodd">
      <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
      <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
    </g>
  </svg>
</template>

<style>
.close-icon g {
  fill: var(--text-color-default);
  transition: fill 200ms ease-in-out;

  &:hover {
    fill: var(--colors-black);
  }
}
</style>
