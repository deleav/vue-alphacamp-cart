<template>
  <div id="app">
    <MainVue />
  </div>
</template>

<script>
import MainVue from './components/Main.vue';

export default {
  name: 'App',
  components: {
    MainVue,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
