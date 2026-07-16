<script setup lang="ts">
import Header from "./components/Header.vue"
</script>

<template>
  <Header />

  <main>
    <section>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
      <button>Back this project</button>
      <button>Bookmark</button>
    </section>

    <section>
      <ul role="list" class="funding-stats">
        <li><span>$89,914</span> <span>of $100,000 backed</span></li>
        <li><span>5,007</span> <span>total backers</span></li>
        <li><span>56</span> <span>days left</span></li>
      </ul>

      <progress value="89914" max="100000"></progress>
    </section>

    <section>
      <h2>About this project</h2>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
        screen to a more comfortable viewing height. Placing your monitor at eye level has the
        potential to improve your posture and make you more comfortable while at work, helping you
        stay focused on the task at hand.
      </p>

      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
        your computer to allow notepads, pens, and USB sticks to be stored under the stand.
      </p>
    </section>

    <section>
      <ul role="list"></ul>
    </section>
  </main>
</template>

<style scoped></style>
