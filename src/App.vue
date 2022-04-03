<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
<!--  <router-view/>-->
  <div class="wrapper-top">
    <div class="wrapper">
      <Header></Header>
    </div>
  </div>
  <div class="wrapper">
    <LogoNav></LogoNav>
    <Hero></Hero>
    <div class="title-eva">Что такое <span class="colortext">EVA</span> коврики?</div>
  </div>

</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/HeroSection.vue'
import LogoNav from './components/LogoNavSection.vue'

export default {
    components: {
      Header,
      Hero,
      LogoNav
    }
}

</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  color: #000000;
}
body {
  margin: 0;
}

.wrapper-top {
  width: 100%;
  background: linear-gradient(269.91deg, rgba(46, 49, 146, 0.7) 0%, rgba(212, 20, 90, 0.7) 98.16%);
  margin-bottom: 45px;
}

.wrapper {
  width: 1200px;
  margin: 0 auto;
}

.title-eva {
  @include font (50px, 400, 58px);
  text-align: center;
  margin: 70px 0 100px 0;
  .colortext {
    background: linear-gradient(180deg, #B90160 2.23%, #2E3192 69.51%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

</style>
