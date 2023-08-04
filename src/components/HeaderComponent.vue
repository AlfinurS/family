<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <img src="@/assets/img/logo.png" alt="#" />
      </div>
      <div class="header__btn">
        <div class="btn-left">
          <router-link
            class="button btn"
            active-class="active"
            :to="{ name: 'User' }"
            >Форма</router-link
          >
        </div>
        <div class="">
          <router-link
            class="button btn"
            active-class="active"
            :to="{ name: 'UserPreview' }"
            >Превью</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderComponent",
  components: {},

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: inline-block;
  width: 100%;
  min-height: 76px;
  margin-bottom: 22px;
  background: #fff;
  position: relative;
  box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);

  box-sizing: border-box;
  &__logo {
    position: absolute;
  }
  &__btn {
    display: flex;
    justify-content: center;
    margin-top: 28px;
    margin-bottom: 28px;
  }
  &__wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 1264px;
    box-sizing: border-box;
  }
}
.btn-left {
  margin-right: 24px;
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
