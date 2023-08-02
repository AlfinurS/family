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
@import "@/assets/scss/style.scss";
</style>
