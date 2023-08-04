<template>
  <div id="app">
    <header-component></header-component>
    <div class="layout">
      <main>
        <router-view></router-view>
      </main>
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default defineComponent({
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
