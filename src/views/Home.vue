<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <BaseUserCard />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import BaseUserCard from "@/components/BaseUserCard.vue";

// import BaseAside from "@/components/BaseAside.vue";
// import BaseMain from "@/components/BaseMain.vue";

export default {
  name: "home",
  components: {
    // HelloWorld,
    // BaseAside,
    // BaseMain,
    BaseUserCard
  }
};
</script>
<style>
.home {
  /* margin: 150px 100px 150px 66px; */
}
</style>
