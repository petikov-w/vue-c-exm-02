<template>
<!--  <div class="cards-box" v-for="card in card_data" :key="card.id" :card_data="cards">-->
  <div class="cards-box">
    <CardListItem v-for="card in cards" :key="card.id" :card_data="card"></CardListItem>
  </div>
</template>

<script>
import CardListItem from '../components/CardListItem';
export default {
  name: "CardList",
  components: {
        CardListItem
  },
  data: function () {
    return {
      cards: [
        {
          id: 1,
          img_src: require('../assets/images/material.jpg'),
          img_alt: "material",
          title: "материал",
          description: "Коврики EVA всесезонные и отличаются уникальной поверхностью материала с " +
              "ячейками ромбовидной формы. Из-за чего вода не проливается при изъятии ковра и не плещется " +
              "при езде. Коврики воду не пропускают."
        },
        {
          id: 2,
          img_src: require('../assets/images/otlichie.jpg'),
          img_alt: "otlichie",
          title: "отличия",
          description: "Резиновые коврики загибаются и лезут на педали. EVA коврики такого не допустят! " +
              "Специальные липучки держат его в одном положении. При желании, для водителя устанавливается подпятник " +
              "из рельефного алюминия."
        },
        {
          id: 3,
          img_src: require('../assets/images/rascvetka.jpg'),
          img_alt: "rascvetka",
          title: "расцветка",
          description: "Автомобильные коврики EVA можно заказать и в индивидуальных размерах и в разных цветах, " +
              "которые комбинируется на выбор покупателя с такими же цветами окантовочной полипропиленовой " +
              "ременной ленты."
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.cards-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
}
</style>