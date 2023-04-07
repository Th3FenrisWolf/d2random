<template>
  <div id="homeView">
    <h1>Welcome To The Soon-To-Be D2Random!</h1>

    <h2>More to come soon!</h2>

    <div class="temp-nav">
      <router-link to="/random">
        <div class="card glass">Random</div>
      </router-link>

      <router-link to="/loadout">
        <div class="card glass">Loadout</div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
#homeView {
  display: flex;
  flex-direction: column;
  align-items: center;

  .temp-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    a {
      text-decoration: none;

      .card {
        color: var(--white);
        font-size: 36px;
        transition: var(--standard-transition);

        &:hover {
          background-color: var(--red-50);
          transform: scale(1.05);
          transition: var(--standard-transition);
        }
      }
    }
  }
}
</style>
