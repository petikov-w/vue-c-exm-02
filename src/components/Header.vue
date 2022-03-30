<template>
  <div class="wrapper">
    <div class="header">
      <div class="t-area">
        <img width="20" height="20" src="../assets/i-telefon.png" alt="ico-telefon">
<!--        <div class="telefon">{{ telefon_1 }}</div>-->
        <div class="telefon">{{ PhoneNumberFormat(telefon_1) }}</div>
        <div class="telefon">{{ PhoneNumberFormat(telefon_2) }}</div>
      </div>
      <div class="m-area">
        <img width="15" height="25" src="../assets/i-mesto.png" alt="ico-area">
        <div class="telefon">{{ city }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: function () {
    return {
      telefon_1: "+79094282463",
      telefon_2: "+79059202069",
      city: "Ростов-на-Дону"
    }
  },
  methods: {
    PhoneNumberFormat(number) {
      let temp_number, pref;
      temp_number = `${number}`;
      if (temp_number[0] == '8') { pref = temp_number.substr(0,1)}
      if (temp_number[0] == '+') { pref = temp_number.substr(0,2);}
      temp_number = temp_number.substr(-10);
      return `${pref}  (${temp_number.substr(0,3)}) ${temp_number.substr(3,3)}
              ${temp_number.substr(6,2)} ${temp_number.substr(8,2)}`;
    }
  }
}
</script>

<style scoped>

.wrapper {
  width: 100%;
  background: linear-gradient(269.91deg, rgba(46, 49, 146, 0.7) 0%, rgba(212, 20, 90, 0.7) 98.16%);
}

.header {
  width: 1120px;
  margin: 0 auto;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .telefon {
  font-family: 'Roboto', sans-serif;
  /*font-style: normal;*/
  font-weight: 500;
  font-size: 15px;
  line-height: 10px;
  color: #FFFFFF;
  padding-left: 13px;
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
