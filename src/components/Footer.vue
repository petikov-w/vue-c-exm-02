<template>
    <div class="footer">
      <img class="blik-2" src="../assets/images/blik-eva-m.png" alt="blik">
      <img class="blik-3" src="../assets/images/blik-eva-s.png" alt="blik">
      <Telefon class="tels" :tel="79094282463"></Telefon>
      <Telefon class="tels" :tel="79059202069"></Telefon>
    </div>
</template>

<script>
import Telefon from '@/components/NumberTelefon';
export default {
  components: {
    Telefon
  },
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
}

.blik-2 {
  position: absolute;
  top: 10px;
  right: -20px;
}
.blik-3 {
  position: absolute;
  top: 82px;
  left: -70px;
}

:deep(.telefon) {
  color: #000000;
}
</style>