<template>
  <div>
    <div class="aside">
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="aside-wrapper">
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    sheet: false
  })
};
</script>
<style>
.aside {
  width: 160px;
  height: 600px;
  position: relative;
}
.aside-wrapper {
  width: 160px;
  height: 600px;
  background-color: #48a5ea;
  margin-left: 34px;
  border-radius: 8px 0px 0px 8px;
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
</style>