<template>
  <div class="user">
    <div class="user__container">
      <div class="user__wrapper">
        <input
          @change="sendData"
          v-model="form.name"
          class="user__input"
          type="text"
          placeholder="Имя"
        />
      </div>
      <div class="user__wrapper">
        <input
          @change="sendData"
          v-model="form.age"
          class="user__input"
          type="text"
          placeholder="Возраст"
        />
      </div>
      <div @click="deleteChild" class="button__wrapper button__wrapper--delete">
        Удалить
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { userType } from "@/types/common";

export default defineComponent({
  name: "FormUser",
  components: {},
  props: {
    dataProps: {
      type: Object as PropType<userType>,
      default: () => ({}),
    },
  },

  emits: ["sendData", "deleteChild"],

  data() {
    return {
      form: {
        id: null,
        name: "",
        age: null,
      } as userType,
    };
  },

  methods: {
    deleteChild() {
      this.$emit("deleteChild", this.form);
    },

    sendData() {
      this.$emit("sendData", this.form);
    },
  },

  watch: {
    dataProps(newValue) {
      this.form = newValue;
    },
  },

  created() {
    this.form = JSON.parse(JSON.stringify(this.dataProps));
  },
});
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  &__container {
    display: grid;
    grid-template-columns: 260px 260px 60px;
    gap: 18px;
    width: 100%;
    margin-bottom: 30px;
  }
  &__wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  &__input {
    display: flex;
    max-width: 260px;
    min-height: 56px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border-color: #f1f1f1;
    border-width: 1px;
    border-style: solid;
    padding-left: 16px;
  }
  &__label {
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
  }
}
.button__wrapper {
  cursor: pointer;
  user-select: none;
  &--delete {
    display: flex;
    align-items: center;
    color: #01a7fd;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
}

@import "@/assets/scss/style.scss";
</style>
