<template>
  <div id="app-bar">
    <div class="logo">
      <img src="../assets/logo.png" alt="D2Random" :style="{ height: '50px', width: '50px' }" />
    </div>

    <div class="search-bar">
      <div class="search-wrapper">
        <label for="searchQueryInput" class="sr-only">Search</label>
        <input id="searchQueryInput" type="text" placeholder="Search..." />

        <div class="glow" />

        <button id="searchQuerySubmit" type="submit">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
      </div>
    </div>

    <div class="empty">
      <div class="login">
        <a href="https://www.bungie.net/en/oauth/authorize?client_id=43690&response_type=code">
          <label for="login" class="sr-only">Login</label>
          <v-btn icon>
            <font-awesome-icon :icon="['fas', 'user']" />
          </v-btn>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" />

<style lang="scss">
#app-bar {
  display: grid;
  grid-template-areas: 'logo search-bar empty';
  grid-template-columns: 1fr 4fr 1fr;

  .logo {
    grid-area: logo;
  }

  .search-bar {
    align-items: center;
    display: flex;
    grid-area: search-bar;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  .search-wrapper {
    align-items: center;
    box-shadow: 5px 5px 25px var(--gray-dark-50);
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 5;

    &:hover {
      #searchQueryInput {
        width: 512px;
      }
    }

    #searchQueryInput {
      backdrop-filter: blur(7px);
      background-color: var(--white-10);
      color: var(--white);
      height: 40px;
      outline: none;
      padding: 0 56px 0 24px;
      position: relative;
      transition: all 0.15s cubic-bezier(0.6, 0, 0.6, 1.6);
      width: 156px;
      z-index: 10;

      border: none;
      border-radius: 20px;
      border-top: 1px solid var(--white-50);
      border-left: 1px solid var(--white-50);

      &:focus {
        width: 512px;

        & + .glow::before {
          width: 460px;
          margin-left: -230px;
        }
      }

      &::placeholder {
        color: var(--white);
      }
    }

    #searchQuerySubmit {
      background: none;
      border: none;
      color: var(--white);
      font-size: 16px;
      height: 40px;
      margin-left: -56px;
      outline: none;
      position: relative;
      width: 56px;
      z-index: 20;

      &:hover {
        cursor: pointer;
      }
    }

    .glow::before {
      content: '';
      height: 6px;
      width: 0;
      position: absolute;
      left: 50%;
      bottom: -3px;
      transition: all 0.15s cubic-bezier(0.6, 0, 0.6, 1.6);
      border-radius: 5px;
      box-shadow: 0 0 2px var(--red), 0 0 4px var(--red), 0 0 6px var(--red), 0 0 8px var(--red),
        0 0 10px var(--red);
      background-color: var(--red);
      z-index: 9;
    }
  }
}
</style>
