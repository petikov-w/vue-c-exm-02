<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Добро пожаловать в ваше Vue.js приложение"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
