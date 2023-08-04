<template>
  <div class="footer__wrapper">
    <div class="footer-text">all rights reserved</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterComponent",
  components: {},

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
.footer {
  &__wrapper {
    position: fixed;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #fafafa;
    width: 100%;
    min-height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-text {
    color: #000000;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }
}
</style>
