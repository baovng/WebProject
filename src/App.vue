<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Table from './components/Table.vue';

import Nav from './components/Nav.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
<div>
  <Nav />
  <router-view></router-view>
</div>

  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0573e0;
  // margin-top: 60px;
}

</style>
