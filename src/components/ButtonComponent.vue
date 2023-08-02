<template>
  <div class="buttons__wrapper">
    <div class="btn-plain">
      <iconPlus />
      <span class="btn-text">Добавить ребенка</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconPlus from "@/components/icons/iconPlus.vue";
export default defineComponent({
  name: "ButtonComponent",
  components: { iconPlus },

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.btn-plain {
  display: inline-flex;
  flex-direction: row;
  padding: 10px 20px;
  align-items: center;
  border-radius: 100px;
  border: 2px solid #01a7fd;
}
.btn-text {
  margin-left: 4px;
}
</style>
