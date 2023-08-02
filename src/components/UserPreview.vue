<template>
  <div class="">
    Персональные данные

    <div class="user">
      <div class="user__wrapper">
        <span class="user__label">Имя</span>
      </div>
      <div class="user__wrapper">
        <span class="user__label">Возраст</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserPreview",
  components: {},

  data() {
    return {
      user: {
        name: "Василий",
        age: 99,
        children: [
          {
            id: 1,
            name: "Петр",
            age: 10,
          },
        ],
      },
    };
  },

  computed: {},

  methods: {},
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
