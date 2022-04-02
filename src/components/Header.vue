<template>

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

.tels {
  margin-left: 15px;
}

.header {
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .mesto {
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
  .m-area {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 15px 0;
  }
}

</style>
