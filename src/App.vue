<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
<!--  <router-view/>-->
  <Header></Header>
  <Hero></Hero>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/HeroSection.vue'
export default {
    components: {
      Header,
      Hero
    }
}


</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
}
body {
  margin: 0;
}
</style>
