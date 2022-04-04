<template>
  <div class="card">
    <img :src=" card_data.img_src" :alt=" card_data.img_alt">
    <div class="title">{{ card_data.title }}</div>
    <div class="description">{{  card_data.description }}</div>
  </div>
</template>

<script>
export default {
  name: "CardListItem",
  props: {
    card_data: {
      type: Object
    }
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
</style>