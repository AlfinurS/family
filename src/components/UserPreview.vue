<template>
  <div class="container">
    <h4 class="user__headline">Персональные данные</h4>
    <div class="user__wrapp">
      <p class="user__name" v-if="user <= 0">
        {{ "Данные не заполнены" }}
      </p>
      <p class="user__name" v-if="user">
        {{ user.name ? user.name : "Данные не заполнены" }},&nbsp;

        {{ user.age ? user.age : "Данные не заполнены" }}
      </p>
    </div>

    <h4 class="user__headline">Дети</h4>

    <div
      class="user__name user__children--wrapp"
      v-for="child in user.children"
      :key="child.id"
    >
      <span class="user__childrene" v-if="user.children"
        >{{ child.name ? child.name : "Данные не заполнены" }},&nbsp;
        {{ child.age ? child.age : "Данные не заполнены" }}
      </span>
    </div>

    <div class="" v-if="user === 0">
      <p class="user__name">Данные не заполнены</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { userType } from "@/types/common";

export default defineComponent({
  name: "UserPreview",
  components: {},

  data() {
    return {
      user: {
        id: null,
        name: "",
        age: null,
        children: [
          {
            id: null,
            name: "",
            age: null,
          } as userType,
        ],
      },
    };
  },

  created() {
    const value: any = localStorage.getItem("user");
    if (value) {
      this.user = JSON.parse(value);
    }
  },
});
</script>

<style lang="scss" scoped>
.user {
  &__headline {
    color: #111;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 20px;
  }
  &__name {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #111;
  }
  &__childrene {
    padding: 10px 20px;
    background: #f1f1f1;
    border-radius: 5px;
  }
  &__children--wrapp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    margin-top: 20px;
  }
  &__wrapp {
    margin-bottom: 60px;
  }
}
@import "@/assets/scss/style.scss";
</style>
