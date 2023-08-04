<template>
  <button class="btn-plain" @click="onClick" :disabled="isDisabled">
    <iconPlus />
    <span class="btn-text">Добавить ребенка</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconPlus from "@/components/icons/iconPlus.vue";
export default defineComponent({
  name: "ButtonComponent",
  components: { iconPlus },
  emits: ["onClick"],

  props: {
    classProps: {
      type: String,
      default: "btn-plain",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onClick(): void {
      this.$emit("onClick");
    },
  },
});
</script>

<style lang="scss" scoped>
.btn-plain {
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  flex-direction: row;
  padding: 10px 20px;
  align-items: center;
  border-radius: 100px;
  border: 2px solid #01a7fd;
  box-sizing: border-box;
  background-color: #fff;
  &:hover {
    border: 2px solid #01a7fd;
    background: rgba(110, 65, 226, 0.04);
  }
  &:disabled {
    opacity: 0.56;
    cursor: none;
  }
}

.btn-text {
  margin-left: 4px;
  color: #01a7fd;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>
