<template>
   <div class="cards-box" v-for="card in card_data" :key="card.id" :card_data="card">
     <div class="card">
       <img :src="card.img_src" :alt="card.img_alt">
       <div class="title">{{ card.title }}</div>
       <div class="description">{{ card.description }}</div>
   </div>
 </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card_data: {
      type: Array
    }
  },
  computed: {
    imgUrl() {
      return require(`${this.result.img}`)
    },
    // imgAlt() {
    //   return `Комплект ${this.result.title}`)
    // }
  }

}
</script>

<style lang="scss" scoped>
    .card {
      border: 1px solid #f5f5f5;
      width: 344px;
      height: 414px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border-radius: 9px;
      box-shadow: 0px 1px 20px 6px rgba(236, 198, 217, 0.5);
      margin-bottom: 30px; // Потом убрать!
      img {
        height: 242px;
      }
      .title {
        @include font(36px, 700, 42px);
        margin: 20px 0 15px 22px;
        text-transform: uppercase;
      }
      .description {
        @include font(14px, 300, 17px, #767676);
        margin-left: 22px;
        margin: 0 0 30px 22px;
        max-width: 290px;
      }
    }
    .cards-box {
      display: flex;
      justify-content: space-between;
    }
</style>