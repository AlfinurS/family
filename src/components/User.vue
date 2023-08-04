<template>
  <div class="container">
    <h4 class="user__headline">Персональные данные</h4>
    <div class="">
      <form action="#" class="form">
        <input
          type="text"
          class="form__input"
          v-model="user.name"
          placeholder="Имя"
        />
        <input
          type="text"
          class="form__input"
          v-model="user.age"
          placeholder="Возраст"
        />
      </form>
      <div class="user__children--wrapp">
        <h4 class="user__headline">Дети (макс. 5)</h4>
        <ButtonComponent @onClick="addChild" :isDisabled="isDisabled" />
      </div>
    </div>
    <FormUser
      @deleteChild="deleteChild"
      @sendData="setData"
      :dataProps="child"
      v-for="child in user.children"
      :key="child.id"
    />

    <div
      v-if="user.children != 0"
      class="button__wrapper button__wrapper--save button__wrapper--active"
      @click="saveLocalStorage"
    >
      Сохранить
    </div>
    <div class="compensator"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import FormUser from "@/components/FormUser.vue";
import { userType } from "@/types/common";
import { userConst } from "@/constants/common";

export default defineComponent({
  name: "User",
  components: { ButtonComponent, FormUser },

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

  computed: {
    isDisabled() {
      if (this.user.children.length >= 5) {
        return true;
      }
      return false;
    },
  },

  methods: {
    addChild() {
      const newChild: userType = JSON.parse(JSON.stringify(userConst));
      newChild.id = Date.now();
      this.user.children.push(newChild);
      this.saveLocalStorage();
    },

    setData(form: userType) {
      const index = this.user.children.findIndex((item) => {
        return item.id === form.id;
      });
      this.user.children[index] = JSON.parse(JSON.stringify(form));
      this.saveLocalStorage();
    },

    deleteChild(form: userType) {
      const index = this.user.children.findIndex((item) => {
        return item.id === form.id;
      });
      this.user.children.splice(index, 1);
      this.saveLocalStorage();
    },

    saveLocalStorage() {
      localStorage.setItem("user", JSON.stringify(this.user));
    },
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
      margin-bottom: 11px;
    }
  }
}
.form {
  display: flex;
  flex-direction: column;
  &__input {
    display: flex;
    max-width: 600px;
    min-height: 56px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border-color: #f1f1f1;
    border-width: 1px;
    border-style: solid;
    margin-bottom: 10px;
    padding-left: 16px;
  }
}

.button__wrapper {
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s;
  &--save {
    display: inline-flex;
    padding: 10px 20px;
    max-width: 118px;
    flex-direction: column;
    align-items: center;
    border-radius: 100px;
    background: #01a7fd;
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    &:hover {
      background: #0f79af;
    }
  }
  .button__wrapper--active {
    background: #59c79f;
  }
}
.disabled {
  opacity: 0.56;
  cursor: none;
}
.compensator {
  height: 76px;
}
@import "@/assets/scss/style.scss";
</style>
