<template>
  <v-btn outlined small fab color="white" @click="UpIndex" class="asideBtns">
    <v-icon></v-icon>
  </v-btn>
</template>
<script>
export default {
  data: () => ({
    a: 0
  }),
  methods: {
    UpIndex: function() {
      if (
        this.$store.state.validateCounter > 0 &&
        this.$store.state.validateCounter >= this.$store.state.index
      ) {
        if (this.$store.state.index > 0) {
          this.$store.state.index--;
          this.a--;
          // console.log(this.$store.state.index);
          this.$emit("up", this.a);
          // console.log("a:" + this.a);
        }
      } else {
        // console.log("BtnUpStop:" + this.$store.state.index);
      }
    }
  }
};
</script>
<style scoped>
.v-btn {
  border: 2px solid #ffffff;
}

.v-icon {
  background: url("~@/assets/Arrow-Up.svg") center no-repeat;
}
@media all and (max-width: 600px) {
  .asideBtns {
    height: 30px !important;
    width: 30px !important;
    margin: 0px 2px 0px 2px !important;
  }
}
</style>