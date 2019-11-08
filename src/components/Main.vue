<template>
  <div class="main">
    <div class="main-container">
      <h1>Basic Details</h1>
      <div class="line"></div>
      <MainForm />
    </div>
  </div>
</template>
<script>
import MainForm from "@/components/MainForm.vue";

export default {
  components: {
    MainForm,
  },
  data: () => ({})
};
</script>
<style scoped>
.main {
  min-height: 600px;
  margin-left: 34px;
  background-color: #ffffff;
  width: 100%;
  border-radius: 0px 8px 8px 0px;
  position: static;
}
.main-container {
  margin: 40px;
}
h1 {
  font-size: 24px;
  font-family: "ProximaNova-Semibold";
  color: rgb(56, 151, 217);
  margin: 0px;
  padding: 0px;
}
.line {
  margin-top: 30px;
  margin-bottom: 40px;
  width: 100%;
  height: 1px;
  background-color: rgb(216, 216, 216);
  opacity: 0.302;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
@media all and (max-width: 600px) {
  .main {
    margin-left: 0px;
    border-radius: 0px;
  }
  .main-container {
    margin: 10px;
  }
}
</style>
