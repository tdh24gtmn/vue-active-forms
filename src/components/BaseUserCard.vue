<template>
  <div class="BaseUserCard">
    <BaseAside />
    <BaseMain />
  </div>
</template>
<script>
import BaseAside from "@/components/BaseAside.vue";
import BaseMain from "@/components/BaseMain.vue";

export default {
  name: "BaseUserCard",
  components: {
    BaseAside,
    BaseMain
  }
};
</script>
<style>
.BaseUserCard {
  width: 1034px;
  height: 600px;
  border-radius: 8px;
  box-shadow: 80px 0 60px 0 rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0;
  margin: 150px 100px 150px 66px;
}
</style>