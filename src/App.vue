<template>
  <v-app>
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "app",
  components: {
    Home
  },
  data: () => ({})
};
</script>

<style lang="scss">
@import "~@/assets/css/normalize.module.css";

@font-face {
  font-family: "ProximaNova-Regular";
  src: url("~@/assets/fonts/ProximaNova-Regular.woff") format("woff");
}

@font-face {
  font-family: "ProximaNova-Semibold";
  src: url("~@/assets/fonts/ProximaNova-Semibold.woff") format("woff");
}
#app {
  font-family: "ProximaNova-Regular", sans-serif;
  font-size: 20px;
}

.v-content {
  background-color: #f0f0f0;
}
</style>

