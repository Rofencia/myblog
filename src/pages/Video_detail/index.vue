<template>
  <div class="content">
    <div class="bigbox">
      <div class="box">
        <div class="videolist">
          <h3 class="title">{{ video.title }}</h3>
          <div class="video" v-html="video.iframe_url"></div>
        </div>
      </div>
    </div>
    <div class="video_slider">
      <div class="list">
        <div>
          <span class="anthology">视频</span>
          <ul>
            <li
              class="videonumber"
              v-for="video in videos"
              :key="video.id"
              :class="video.id == id ? 'choose' : ''"
            >
              <a @click="getVideo(video.id)">{{ video.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <slider />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: {},
      videos: [],
      id: this.$route.query.id,
    };
  },
  methods: {
    async getVideo(id) {
      if (id) {
        this.$router.push({ path: "/videodetail", query: { id } });
        this.id = id;
      }
      let result = await this.$API.getVideo(this.$route.query.id);
      if (result.code == 200) {
        this.video = result.data;
      }
    },
    async getVideos() {
      let result = await this.$API.getVideos(this.$route.query.id);
      if (result.code == 200) {
        this.videos = result.data;
      }
    },
  },
  mounted() {
    this.getVideo();
    this.getVideos();
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin-left: 0px;
}
.content {
  max-width: 126rem;
  min-width: 126rem;
  background-color: #f6f6f6;
  margin: 0 auto;
  display: flex;

  .bigbox {
    width: 100%;
    margin-right: 1.5rem;
    min-height: 115rem;

    .box {
      width: 100%;
      margin-top: 1.5rem;
      background-color: #ffffff;
      margin-bottom: 1.5rem;

      .videolist {
        list-style: none;
        overflow: hidden;

        .title {
          margin-left: 2rem;
          margin-top: 2rem;
          font-size: 18px;
        }

        .video {
          margin-top: 3rem;
          height: 72rem;
          background-color: #333333;
          text-align: center;

          ::v-deep iframe {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .video_slider {
    width: 29rem;

    .list {
      width: 29rem;
      height: 44.2rem;
      margin-top: 1.5rem;

      div {
        background-color: #ffffff;
        width: 29rem;
        height: 47.2rem;
        float: left;

        ul {
          list-style: none;
          background-color: #ffffff;
          width: 29rem;
          height: 40.9rem;
          float: left;
          overflow: scroll;
          overflow-y: scroll;
          overflow-x: hidden;

          &::-webkit-scrollbar {
            width: 0.6rem;
          }

          &::-webkit-scrollbar-thumb {
            background-color: #8899a7;
            border-radius: 3px;
          }

          .choose {
            a {
              color: #0084ff !important;
            }
          }

          .videonumber {
            margin-top: 1rem;
            margin-bottom: 2rem;

            a {
              font-size: 16px;
              text-decoration: none;
              color: #a7a7a7;
              margin-left: 23px;
            }
          }
        }

        .anthology {
          margin-top: 1.4rem;
          margin-bottom: 0.6rem;
          margin-left: 2.3rem;
          font-family: 微软雅黑;
          font-size: 18px;
          float: left;
        }
      }
    }
  }
}
</style>