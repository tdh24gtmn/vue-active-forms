<template>
  <v-container class="home">
    <Aside />
    <Main />
  </v-container>
</template>
<script>
import Aside from "@/components/Aside.vue";
import Main from "@/components/Main.vue";

export default {
  name: "home",
  components: {
    Aside,
    Main
  }
};
</script>
<style>
.home {
  max-width: 1034px;
  min-height: 600px;
  border-radius: 8px;
  box-shadow: 80px 0 60px 0 rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0;
  margin: 50px auto 50px auto;
  display: flex;
  padding: 0px;
}
@media all and (max-width: 600px) {
  .home {
    margin: 0px;
  }
}
</style>
