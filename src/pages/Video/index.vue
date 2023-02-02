<template>
  <div class="content">
    <div class="bigbox">
      <div class="box">
        <div class="box-top">
          <ul style="margin-left: 20px; list-style: none">
            <li v-for="video in videos" :key="video.id">
              <img
                :src="video.img"
                alt="封面图"
              />
              <div>
                <span class="bookname">{{video.title}}</span>
                <p class="outline">{{video.create_time}}</p>
                <p class="intro">{{video.description}}</p>
                <button class="read" @click="goDetail(video.id)">观看</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer">更多精彩内容敬请期待</div>
    </div>
    <slider />
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [],
    };
  },
  methods: {
    async getVideos() {
      let result = await this.$API.getVideos();
      if (result.code == 200) {
        this.videos = result.data;
      }
    },
    goDetail(id){
      this.$router.push({path:'/videodetail',query:{id}})
    }
  },
  mounted() {
    this.getVideos();
  },
};
</script>

<style lang="scss" scoped>
.content {
  max-width: 126rem;
  min-width: 126rem;
  background-color: #f6f6f6;
  margin: 0 auto;

  .bigbox {
    width: 95.5rem;
    min-height: 65rem;
    margin-right: 1.5rem;
    float: left;

    .box {
      width: 95.5rem;
      min-height: 50.5rem;
      padding-bottom: 1.5rem;
      float: left;
      margin-top: 1.5rem;
      background-color: #ffffff;

      .box-top {
        width: 95.5rem;
        height: 30rem;

        ul li {
          width: 93.5rem;
          height: 15rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          float: left;

          div {
            width: 65.5rem;
            height: 15rem;
            float: right;
            border-bottom: 1px solid #e6e6e6;

            .bookname {
              color: #000000;
              font-size: 17px;
              margin-top: 1rem;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .outline {
            margin-top: 0.5rem;
            color: #ccc;
          }

            .intro {
              display: block;
              color: #808080;
              font-size: 15px;
              margin-top: 1rem;
              height: 22px;
              width: 93%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .read {
              display: block;
              background-color: #e4f0fc;
              border: none;
              width: 9rem;
              height: 4rem;
              outline: none;
              border-radius: 10px;
            }
          }

          img {
            float: left;
            width: 23rem;
            height: 15rem;
          }
        }
      }
    }

    .footer {
      width: 95.5rem;
      height: 5rem;
      margin-top: 1.5rem;
      text-align: center;
      line-height: 5.1rem;
      background-color: #ffffff;
      float: left;
    }
  }
}
</style>