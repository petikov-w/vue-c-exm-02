<template>
  <div class="wrapper-top">
    <div class="header">
      <div class="t-area">
        <img width="20" height="20" src="../assets/i-telefon.png" alt="ico-telefon">
        <Telefon class="tels" :tel="79094282463"></Telefon>
        <Telefon class="tels" :tel="79059202069"></Telefon>
      </div>
      <div class="m-area">
        <img width="15" height="25" src="../assets/i-mesto.png" alt="ico-area">
        <div class="mesto">{{ city }}</div>
      </div>
    </div>
  </div>
  <div class="logo-nav">
    <div class="logo">
      <img src="../assets/logo-header.svg" alt="logo">
      <span>evarugs</span>
    </div>
    <div class="nav-menu">
      <ul>
        <li><a href="#">отзывы</a></li>
        <li><a href="#">что это?</a></li>
        <li><a href="#">контакты</a></li>
      </ul>
    </div>

  </div>
</template>

<script>
import Telefon from '@/components/NumberTelefon';
export default {
  components: {
    Telefon
  },
  name: "Header",
  data: function () {
    return {
      city: "Ростов-на-Дону"
    }
  },

}
</script>

<style scoped>

.wrapper-top {
  width: 100%;
  background: linear-gradient(269.91deg, rgba(46, 49, 146, 0.7) 0%, rgba(212, 20, 90, 0.7) 98.16%);
  margin-bottom: 45px;
}

.logo-nav {
  width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.logo span {
  font-family: 'Roboto', sans-serif;
  /*font-style: normal;*/
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  padding-left: 11px;
  text-transform: uppercase;
  font-style: italic;
}

.nav-menu {
  width: 35%;
}
.nav-menu ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
}
.nav-menu ul a {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 21px;
  color: #737373;
  text-transform: lowercase;
  text-decoration: none;
}
.nav-menu ul a:hover {
  padding-bottom: 5px;
  border-bottom: 1.5px solid #4d4d4d;
}

.tels {
  margin-left: 15px;
}

.header {
  width: 1120px;
  margin: 0 auto;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .mesto {
  font-family: 'Roboto', sans-serif;
  /*font-style: normal;*/
  font-weight: 500;
  font-size: 15px;
  line-height: 10px;
  color: #FFFFFF;
  padding-left: 13px;
  text-decoration: none;
}

.t-area {
  display: flex;
  align-items: center;
}

.m-area {
  display: flex;
  align-items: center;
  margin-left: 175px;
}

/*Адаптивные стили*/
/*----------------*/
@media (min-width: 800px) and (max-width: 1200px) {
  .header {
    width: 80vw;
    margin: 0 auto;
  }
}

@media (min-width: 500px) and (max-width: 750px) {
  .header {
    width: 60vw;
    margin: 0 auto;
  }
  .m-area {
    margin-left: 5vw;
  }
}

@media (max-width: 500px) {
    .header {
      display: flex;
      flex-direction: column;
      height: 28vh;
      width: 100vw;
      margin: 0 auto;
    }
    .t-area {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 15px;
    }
    .telefon {
      margin-top: 15px;
    }

  .m-area {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 15px 0;
  }
}

</style>
