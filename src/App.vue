<template>
  <div id="app">
    <main>
      <User></User>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from "@/components/User.vue";
export default defineComponent({
  name: "App",
  components: {
    User,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
