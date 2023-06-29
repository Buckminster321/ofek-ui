<template>
    <header class="header">
        <router-link :to="{ name: 'Home' }" class="logo">Ofek.Bar-On</router-link>
        <div
            @click="isSidebarOpen = !isSidebarOpen"
            :class="{ 'bx-x' : isSidebarOpen }"
            class="bx bx-menu"
            id="menu-icon"
        />
        <nav
            :class="{ 'active' : isSidebarOpen }"
            class="navbar"
        >
            <router-link
                v-for="(item, index) in routes"
                :key="index"
                :to="{ name: item.route }"
                @click="isSidebarOpen = false"
            >
                {{ item.text }}
            </router-link>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const isSidebarOpen = ref(false);
const routes = [
    {
        text: 'Home',
        route: 'Home',
    },
    {
        text: 'About',
        route: 'About',
    },
    {
        text: 'Education',
        route: 'Education',
    },
    {
        text: 'Skills',
        route: 'Skills',
    },
    {
        text: 'Contact',
        route: 'Contact',
    },
];
</script>

<style scoped>
.header {
    height: var(--navigation-height);
    position: fixed;
    top: 0;
    left: 5px;
    width: 100%;
    padding: 0 9%;
    background: var(--bg-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}

.logo {
  font-size: 2.5rem;
  color: #ededed;
  text-decoration: none;
  font-weight: 600;
}

#menu-icon {
 font-size: 5rem;
 color: var(--text-color);
 cursor: pointer;
 display: block;
}

.navbar {
  position: absolute;
  top: 100%;
  left: -100%;
  width: 100%;
  padding: -1rem 4%;
  background: var(--bg-color);
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
  transition: left .25s ease-in-out;
}

.navbar.active {
  left: 0;
}

.navbar a {
  display: block;
  font-size: 2rem;
  margin: 2rem 0;
  font-size: 15px;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 100;
  margin-left: 35px;
  transition: .3s;
}

.navbar a:hover,
.navbar a.active {
  color: var(--main-color);
}
</style>
