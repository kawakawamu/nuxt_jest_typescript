<template>
  <div>
    <header class="py-6 bg-greenC-500 flex justify-between shadow-md">
      <div class="px-5">Nuxt.jsでjest</div>
      <!-- click Open menu -->
      <div class="px-5">
        <button class="header__btn" @click="ismenuOpen = !ismenuOpen">
          <span class="line line_01" :class="{ btn_line01: ismenuOpen }"></span>
          <span class="line line_02" :class="{ btn_line02: ismenuOpen }"></span>
          <span class="line line_03" :class="{ btn_line03: ismenuOpen }"></span>
        </button>
      </div>
    </header>
    <div>
      <transition name="menu">
        <div class="menu" :class="ismenuOpen ? 'block' : 'hidden'">
          <ul>
            <li><a href="#">項目1</a></li>
            <li><a href="#">項目2</a></li>
            <li><a href="#">項目3</a></li>
            <li><a href="#">項目4</a></li>
            <li><a href="#">項目5</a></li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {
  ismenuOpen: boolean = false
}
</script>
<style lang="scss">
.header__btn {
  position: fixed;
  top: 8px;
  right: 0;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 50;
  & .line {
    position: absolute;
    top: 0;
    left: 20px;
    width: 32px;
    height: 2px;
    background: #333333;
    text-align: center;
  }
  & .line_01 {
    top: 16px;
    transition: 0.4s ease;
  }
  & .line_02 {
    top: 26px;
    transition: 0.4s ease;
  }
  & .line_03 {
    top: 36px;
    transition: 0.4s ease;
  }
}

.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
}
.menu-leave,
.menu-enter-to {
  opacity: 1;
}

.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
}
.menu {
  background-color: rgba(197, 197, 197, 0.671);
  z-index: 30;
  padding: 2rem 1rem;
  position: fixed;
  width: 20rem;
  height: 80rem;
  top: 0;
  right: 0;
}
.menu a {
  color: rgb(66, 66, 66);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 2rem;
}
.menu ul {
  margin: 1rem;
  padding: 0;
}
</style>
