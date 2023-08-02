<template>
  <div class="phone-book">
    Персональные данные
    <div class="header">
      <form action="#" class="search__form">
        <input
          type="text"
          class="search__input"
          v-model="search"
          placeholder="Имя"
        />
        <input
          type="text"
          class="search__input"
          v-model="search"
          placeholder="Возраст"
        />
      </form>
      <p>Дети (макс. 5)</p>
      <div class="buttons__wrapper">
        <button class="btn btn-primary">Добавить</button>
        <div class="buttons__wrapp"></div>
      </div>
    </div>

    <div class="user">
      <div class="user__wrapper">
        <span class="user__label">Имя</span>
      </div>
      <div class="user__wrapper">
        <span class="user__label">Возраст</span>
      </div>

      <div class="buttons__wrapper">
        <button class="btn btn-primary">Сохранить</button>
        <div class="buttons__wrapp"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "User",
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
