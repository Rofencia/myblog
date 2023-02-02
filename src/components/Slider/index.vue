<template>
  <div class="slider">
    <swiper />
    <account />
    <powerby />
  </div>
</template>

<script>
import swiper from "@/components/Swiper";
import account from "@/components/Account";
import powerby from "@/components/Powerby";
export default {
  name: "Slider",
  components: {
    swiper,
    account,
    powerby,
  },
};
</script>

<style scoped>
.slider {
  float: left;
  margin-top: 1.5rem;
  width: 29rem;
  height: 50rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px #f2f2f2;
}
</style>