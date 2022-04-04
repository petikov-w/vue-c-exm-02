<template>
  <div class="logo-nav">
    <div class="logo">
      <img src="../assets/images/logo-header.svg" alt="logo">
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
export default {
  name: "LogoNavSection"
}
</script>

<style lang="scss" scoped>
.logo-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
}

.logo {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    @include font(36px, 900, 42px);
    font-style: italic;
    text-transform: uppercase;
    padding-left: 11px;
  }
}

.nav-menu {
  width: 35%;
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  ul a {
    @include font(20px, 300, 21px, #737373);
    text-transform: lowercase;
    text-decoration: none;
    &:hover {
      padding-bottom: 5px;
      border-bottom: 1.5px solid #4d4d4d;
    }
  }
}

</style>