<template>
  <div class="container">
    <h4 class="user__headline">Персональные данные</h4>
    <div class="">
      <form action="#" class="form">
        <input
          type="text"
          class="form__input"
          v-model="search"
          placeholder="Имя"
        />
        <input
          type="text"
          class="form__input"
          v-model="search"
          placeholder="Возраст"
        />
      </form>
      <div class="user__children--wrapp">
        <h4 class="user__headline">Дети (макс. 5)</h4>
        <ButtonComponent />
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
import ButtonComponent from "@/components/ButtonComponent.vue";

export default defineComponent({
  name: "User",
  components: { ButtonComponent },

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
.user {
  &__headline {
    color: #111111;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  &__children {
    &--wrapp {
      max-width: 616px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
.form {
  display: flex;
  flex-direction: column;
  &__input {
    display: flex;
    max-width: 616px;
    min-height: 56px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border-color: #f1f1f1;
    border-width: 1px;
    border-style: solid;
    margin-bottom: 10px;
  }
}

@import "@/assets/scss/style.scss";
</style>
