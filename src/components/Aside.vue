<template>
  <div class="aside">
    <div class="oval"></div>
    <div class="oval"></div>
    <div class="oval"></div>
    <div class="oval"></div>
    <div class="aside-wrapper">
      <div class="aside-wrapper-container">
        <AsideButtonUp @up="btnUp" v-bind:style="{alignSelf:flex.start}" />
        <div class="pagination">
          <div class="paginationItem" v-for="(item, index) in items" v-bind:key="index">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="18"
              viewBox="0 0 12 18"
              v-if="+items[indexUpdate].name === index"
            >
              <path
                fill="rgb(255, 255, 255)"
                d="M180,461a6,6,0,1,1-6,6A6,6,0,0,1,180,461Zm-6,7s-0.5-6.5,6-13a17.5,17.5,0,0,1,6,13H174Z"
                transform="translate(-174 -455)"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6px"
              height="6px"
              viewBox="0 0 6 6"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              v-else
            >
              <path
                fill="rgb(255, 255, 255)"
                d="M3.000,-0.000 C4.657,-0.000 6.000,1.343 6.000,3.000 C6.000,4.657 4.657,6.000 3.000,6.000 C1.343,6.000 -0.000,4.657 -0.000,3.000 C-0.000,1.343 1.343,-0.000 3.000,-0.000 Z"
              />
            </svg>
          </div>
        </div>
        <AsideButtonDown @down="btnDown" v-bind:style="{alignSelf:flex.end}" />
      </div>
    </div>
  </div>
</template>
<script>
import AsideButtonUp from "@/components/AsideButtonUp.vue";
import AsideButtonDown from "@/components/AsideButtonDown.vue";
export default {
  components: {
    AsideButtonUp,
    AsideButtonDown
  },
  data: () => ({
    flex: {
      start: "flex-start",
      center: "center",
      end: "flex-end"
    },
    counter: 0,
    items: [{ name: "0" }, { name: "1" }, { name: "2" }, { name: "3" }]
  }),
  computed: {
    indexUpdate: function() {
      return this.$store.state.index;
    }
  },
  methods: {
    btnUp: function(data) {
      this.counter = data;
      // console.log(this.counter);
    },
    btnDown: function(data) {
      this.counter = data;
      // console.log(this.counter);
    }
  }
};
</script>
<style>
.aside {
  width: 160px;
  min-height: 600px;
  position: relative;
}
.aside-wrapper {
  width: 160px;
  min-height: 600px;
  height: 100%;
  background-color: #48a5ea;
  margin-left: 34px;
  border-radius: 8px 0px 0px 8px;
  position: static;
}
.aside-wrapper-container {
  height: 600px;
  height: 100%;
  width: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
}
.aside-wrapper-container:nth-child(1) {
  align-self: flex-start;
}
.aside-wrapper-container:nth-child(2) {
  align-self: center;
}
.aside-wrapper-container:nth-child(3) {
  align-self: flex-end;
}
.pagination {
  width: 16px;
  background-color: transparent !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.paginationItem {
  width: 12px;
  height: 18px;
  padding: 15px 0px 15px 0px;
  margin: auto;
}
.oval {
  height: 24px;
  width: 50px;
  border-radius: 12px;
  position: absolute;
}
.oval:nth-child(1) {
  background-color: #48a5ea;
}
.oval:nth-child(2) {
  top: 24px;
  background-color: #f0f0f0;
}
.oval:nth-child(3) {
  top: 48px;
  left: 17px;
  background-color: #48a5ea;
}
.oval:nth-child(4) {
  top: 72px;
  left: -4px;
  background-color: #f0f0f0;
}
@media all and (max-width: 600px) {
  .oval {
    display: none;
  }
  .aside {
    width: auto;
  }
  .aside-wrapper {
    width: auto;
    min-height: auto;
    margin-left: 0px;
    border-radius: 0px;
  }
  .aside-wrapper-container {
    margin: 0px;
  }
}
</style>
