<template>
  <div id="appBar">
    <div class="logo">
      <a href="/">
        <img
          src="../assets/logo.png"
          alt="D2Random"
          :style="{ height: '50px', width: '50px' }"
        />
      </a>
    </div>

    <div class="search">
      <div class="search-bar">
        <label for="searchBarInput" class="sr-only">Search</label>
        <input
          id="searchBarInput"
          class="glass"
          type="text"
          placeholder="Search..."
        />

        <div class="glow-stick-red" />

        <button id="searchBarSubmit" type="submit">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
      </div>
    </div>

    <div class="menu">Menu</div>

    <div class="user">
      <a
        href="https://www.bungie.net/en/oauth/authorize?client_id=43690&response_type=code"
      >
        <button type="button" class="glass">
          <font-awesome-icon :icon="['fas', 'user']" />
          <label for="user" class="user-text">{{
            destinyMembershipId ? 'User' : 'Login'
          }}</label>
        </button>

        <div class="glow-stick-red" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const Store = useStore();

const destinyMembershipId = computed(
  () => Store.getters['bungie/destinyMembershipId']
);
</script>

<style lang="scss">
#appBar {
  display: grid;
  grid-template-areas: 'logo search menu user';
  grid-template-columns: 4fr 13fr 2fr 2fr;
  padding: 8px;

  .logo {
    grid-area: logo;
  }

  .menu {
    align-items: center;
    display: flex;
    grid-area: menu;
    justify-content: flex-end;
    position: relative;
    z-index: 5;
  }

  .user {
    align-items: center;
    display: flex;
    grid-area: user;
    justify-content: flex-end;
    position: relative;
    z-index: 5;

    a {
      border-radius: 25px;

      &:active {
        text-decoration: none;
      }

      &:focus-visible {
        button {
          backdrop-filter: none;
          border-color: #00000000;
        }

        .glow-stick-red {
          display: none;
        }
      }
    }

    button {
      align-items: center;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      height: 40px;
      overflow: hidden;
      transition: var(--standard-transition);
      width: 56px;
      z-index: 10;

      &:hover {
        cursor: pointer;
        width: 84px;

        .user-text {
          opacity: 1;
          width: 40px;
        }

        svg {
          opacity: 0;
          width: 0;
        }

        & + .glow-stick-red::before {
          width: 28px;
        }
      }

      .user-text {
        font-size: 14px;
        opacity: 0;
        transition: var(--standard-transition);
        width: 0;
        z-index: 20;

        &:hover {
          cursor: pointer;
        }

        &:focus {
          text-decoration: none;
        }
      }

      svg {
        transition: var(--standard-transition);
        width: 40px;
        z-index: 20;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .glow-stick-red::before {
      height: 6px;
      width: 0;
      right: 28px;
      bottom: 4px;
      transition: var(--standard-transition);
      z-index: 9;
    }
  }

  .search {
    align-items: center;
    display: flex;
    grid-area: search;
    justify-content: center;
    position: relative;
    width: 100%;

    .search-bar {
      align-items: center;
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 5;

      &:hover {
        #searchBarInput {
          width: 512px;
        }
      }

      #searchBarInput {
        border-radius: 20px;
        font-size: 14px;
        height: 40px;
        padding: 0 56px 0 24px;
        transition: var(--standard-transition);
        width: 156px;
        z-index: 10;

        &:focus {
          width: 512px;

          & + .glow-stick-red::before {
            width: 460px;
            margin-left: -230px;
          }
        }

        &::placeholder {
          color: var(--white);
        }
      }

      #searchBarSubmit {
        background: none;
        border: none;
        height: 40px;
        margin-left: -56px;
        position: relative;
        width: 56px;
        z-index: 20;

        &:hover {
          cursor: pointer;
        }
      }

      .glow-stick-red::before {
        height: 6px;
        width: 0;
        left: 50%;
        bottom: -3px;
        transition: var(--standard-transition);
        z-index: 9;
      }
    }
  }
}
</style>
