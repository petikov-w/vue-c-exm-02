<template>
    <div>
      <a :href="`tel:${PhoneNumberLink(tel)}`" class="telefon">{{ PhoneNumberFormat(tel) }}</a>
    </div>
</template>

<script>
export default {
  name: "NumberTelefon",
  props: {tel: String},
  // data: function () {
  //   return {
  //     telefon: "+79094282463",
  //   }
  // },
  methods: {
    PhoneNumberFormat(number) {
      let temp_number;
      let pref;
      temp_number = `${number}`;
      if (temp_number[0] == '8') {
        pref = temp_number.substr(0, 1)
      }
      console.log(temp_number);
      if (temp_number[0] == '7') {
        pref = '+' + temp_number.substr(0, 1)
      }
      temp_number = temp_number.substr(-10);
      return `${pref} (${temp_number.substr(0, 3)}) ${temp_number.substr(3, 3)}
              ${temp_number.substr(6, 2)} ${temp_number.substr(8, 2)}`;
    },
    PhoneNumberLink(number) {
      let temp_number;
      let pref;
      temp_number = `${number}`;
      if (temp_number[0] == '8') {
        pref = temp_number.substr(0, 1)
      }
      if (temp_number[0] == '7') {
        pref = '+' + temp_number.substr(0, 1)
      }
      // temp_number = temp_number.substr(-10);
      return `${pref}${temp_number.substr(-10)}`;

    }
  }
}
</script>

<style scoped>
.telefon {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 10px;
  color: #FFFFFF;
  /*padding-left: 13px;*/
  text-decoration: none;
}
</style>