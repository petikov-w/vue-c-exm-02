<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
<!--  <router-view/>-->
  <div class="wrapper-top">
    <div class="wrapper">
      <Header :screen_width="window.width"></Header>
    </div>
  </div>
  <div class="wrapper">
    <LogoNav :screen_width="window.width"></LogoNav>
    <Hero></Hero>
    <a name="whatisit"></a>
    <div class="title-eva">Что такое <span class="colortext">EVA</span> коврики?</div>
    <CardList class="mrg2"></CardList>
  </div>
  <a name="otziv"></a>
  <TestimonialsList class="mrg"></TestimonialsList>
  <div class="wrapper">
    <a name="contacts"></a>
    <Footer :screen_width="window.width"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/HeroSection.vue'
import LogoNav from './components/LogoNavSection.vue'
import CardList from './components/CardList.vue'
import TestimonialsList from './components/TestimonialsList.vue'
import Footer from './components/Footer'

export default {
    components: {
      Header,
      Hero,
      LogoNav,
      CardList,
      TestimonialsList,
      Footer
    },
  data() {
    return {
      window: { width: 0 }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  color: $main_color;
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
  @include wrapper(1200px);
  @media (min-width: 768px) and (max-width: 1200px) {
    //width: 100vw;
    @include wrapper(100vw);
    //left: 0;
  }
  @media (max-width: 500px) {
      @include wrapper(100vw);
    }
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

.mrg {
  margin-bottom: 20px!important;
}

.mrg2 {
  margin-bottom: 200px!important;
}

@media (max-width: 500px) {
  .wrapper {
    //@include wrapper(100vw);
  }
  .title-eva, .colortext {
    font-size: 22px;
    margin: 0;
    margin-top: -60px;

  }

}

</style>

