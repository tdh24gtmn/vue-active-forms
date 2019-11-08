<template>
  <v-btn outlined small fab color="white" @click="downIndex" class="asideBtns">
    <v-icon></v-icon>
  </v-btn>
</template>
<script>
export default {
  data: () => ({
    a: 0
  }),
  methods: {
    downIndex: function() {
      if (
        this.$store.state.validateCounter > 0 &&
        this.$store.state.validateCounter > this.$store.state.index
      ) {
        if (this.$store.state.index < 3) {
          this.$store.state.index++;
          this.a++;
          // console.log(this.$store.state.index);
          this.$emit("down", this.a);
          // console.log("a:" + this.a);
        }
      } else {
        // console.log("BtnDownStop:" + this.$store.state.index);
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
  background: url("~@/assets/Arrow-Down.svg") center no-repeat;
}

@media all and (max-width: 600px) {
  .asideBtns {
    height: 30px !important;
    width: 30px !important;
    margin: 0px 2px 0px 2px !important;
  }
}
</style>