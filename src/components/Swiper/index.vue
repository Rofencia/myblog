<template>
  <div class="swiper-container" id="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in bannerList"
        :key="carousel.id"
        @click="goDetail(carousel)"
      >
        <img :src="carousel.img" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      bannerList: [],
    };
  },
  watch: {
    bannerList: {
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            loop: true, // 循环模式选项
            autoplay: true,

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
  methods: {
    async getSwiper() {
      let result = await this.$API.getSwiper();
      if (result.code == 200) {
        result.data.forEach((t) => {
          if (t.orderby != undefined) {
            t.type = "book";
          } else if (t.md_text != undefined) {
            t.type = "blog";
          } else if (t.iframe_url != undefined) {
            t.type = "video";
          } else if (t.code != undefined) {
            t.type = "resource";
          }
        });
        this.bannerList = result.data;
      }
    },
    goDetail(obj) {
      switch (obj.type) {
        case "book":
          this.$router.push({ path: "/bookdetail", query: { id: obj.id } });
          break;
        case "blog":
          this.$router.push({ path: "/blogdetail", query: { id: obj.id } });
          break;
        case "video":
          this.$router.push({ path: "/videodetail", query: { id: obj.id } });
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    this.getSwiper();
  },
};
</script>

<style lang="scss">
.swiper-container {
  width: 27rem;
  height: 18rem;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;

    &:hover{
      cursor: pointer;
    }
  }
}
</style>