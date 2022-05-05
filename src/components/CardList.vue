<template>
  <div class="cards-box">
    <img class="blik-1" src="../assets/images/blik-eva.png" alt="blik">
    <img class="blik-2" src="../assets/images/blik-eva-m.png" alt="blik">
    <img class="blik-3" src="../assets/images/blik-eva-s.png" alt="blik">
    <CardListItem class="west" v-for="card in cards" :key="card.id" :card_data="card"></CardListItem>
  </div>
</template>

<script>
import CardListItem from '../components/CardListItem';
import {listCards} from "@/_card_content";

export default {
  name: "CardList",
  components: {
        CardListItem
  },
  data: function () {
    return {
      cards: listCards,
    }
  }
}
</script>

<style lang="scss" scoped>
.cards-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 150px;
  position: relative;
  @media (min-width: 768px) and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
  .blik-1 {
    position: absolute;
    top: -6px;
    left: -140px;
  }
  .blik-2 {
    position: absolute;
    top: 210px;
    left: 337px;
  }
  .blik-3 {
    position: absolute;
    top: 460px;
    left: 255px;
  }

  .west {
     background-color: #ffffff;
     position: relative;
  }
}

@media (max-width: 500px) {
  .cards-box {
    flex-direction: column;
    align-items: center;
  }
  .cards-box img {
    display: none;
  }
}


</style>