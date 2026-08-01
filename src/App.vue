<script setup lang="ts">
import Card from "./components/Card.vue"
import Header from "./components/Header.vue"
import FundingInfo from "./components/FundingInfo.vue"
import { rewards } from "@/store"
import ProjectLogo from "./components/icons/ProjectLogo.vue"
import CloseIcon from "./components/icons/CloseIcon.vue"
</script>

<template>
  <div class="breakout-grid">
    <Header />

    <main>
      <section class="section project-info card">
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
        <button command="show-modal" commandfor="rewards-modal" data-variant="primary">
          Back this project
        </button>
        <button data-variant="secondary">Bookmark</button>

        <ProjectLogo />
      </section>

      <FundingInfo />

      <div class="card">
        <section class="section">
          <h2>About this project</h2>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
            screen to a more comfortable viewing height. Placing your monitor at eye level has the
            potential to improve your posture and make you more comfortable while at work, helping
            you stay focused on the task at hand.
          </p>
        </section>

        <section class="section">
          <h2 hidden>Rewards</h2>

          <p>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
            your computer to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>

          <ul role="list" class="rewards-list">
            <li class="card-item" v-for="reward in rewards" :key="reward.id">
              <Card
                :title="reward.title"
                :minPledge="reward.minPledge"
                :description="reward.description"
                :stock="reward.stock"
                interactionType="button"
              />
            </li>
          </ul>
        </section>
      </div>
    </main>

    <dialog id="rewards-modal" class="modal card">
      <div class="section">
        <h2>Back this project</h2>

        <button
          command="close"
          commandfor="rewards-modal"
          data-variant="transparent"
          class="modal-close"
        >
          <CloseIcon />
        </button>

        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

        <fieldset role="list" class="rewards-list">
          <legend hidden>choose a reward</legend>

          <Card
            title="Pledge with no reward"
            description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
            interactionType="radio"
          />
          <Card
            v-for="reward in rewards"
            :key="reward.id"
            :title="reward.title"
            :minPledge="reward.minPledge"
            :description="reward.description"
            :stock="reward.stock"
            interactionType="radio"
          />
        </fieldset>
      </div>
    </dialog>
  </div>
</template>
