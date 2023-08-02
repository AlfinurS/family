<template>
  <div class="user">
    <div class="user__wrapper">
      <input
        @change="sendData"
        v-model="form.surname"
        class="user__input"
        type="text"
        placeholder="Фамилия"
      />
    </div>
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
        v-model="form.phone"
        class="user__input"
        type="text"
        placeholder="Телефон"
      />
    </div>
    <div class="user__wrapper">
      <input
        @change="sendData"
        v-model="form.email"
        class="user__input"
        type="text"
        placeholder="E-mail"
      />
    </div>
    <div @click="deleteuser" class="button__wrapper-close link">
      <iconDelete></iconDelete>
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

  emits: ["sendData", "deleteUser"],

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
    deleteuser() {
      this.$emit("deleteUser", this.form);
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
.contact {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  &__wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 200px;
  }
  &__input {
    width: 100%;
    min-height: 36px;
    margin-top: 0px;
    padding-left: 8px;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    border: 1px solid $border-color;
    box-shadow: inset 0px -4px 7px -2px rgba(80, 80, 80, 0.14);
    border-radius: 5px;
    box-sizing: border-box;
  }
  &__label {
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    color: $disabled-text;
  }
}
</style>
