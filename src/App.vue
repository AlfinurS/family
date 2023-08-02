<template>
  <div id="app">
    <header-component></header-component>
    <main>
      <router-view></router-view>
      <User></User>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from "@/components/User.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default defineComponent({
  name: "App",
  components: {
    User,
    HeaderComponent,
    FooterComponent,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
