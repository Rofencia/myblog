<template>
  <div class="content">
    <div class="data">
      <h2 class="title">
        精选手册<router-link class="more" to="/book">查看更多 ></router-link>
      </h2>
      <div id="reco_list" class="clear">
        <div class="jump" v-for="book in books" :key="book.id">
          <div class="picture">
            <img class="pic" :src="book.img" alt="" />
          </div>
          <div class="introduce">
            <h3 class="name">{{ book.title }}</h3>
            <!-- 书的简介 -->
            <p class="description">{{ book.description }}</p>
            <button class="enter" @click="goSection(book.id)">阅读</button>
          </div>
        </div>
      </div>
      <h2 class="title">
        精选博客<router-link class="more" to="/blog">查看更多 ></router-link>
      </h2>
      <div id="reco_list" v-for="blog in blogs" :key="blog.id">
        <a class="jump" @click="goBlogDetail(blog.id)">
          <div class="picture">
            <img class="pic" :src="blog.img" alt="" />
          </div>
          <div class="introduce">
            <h3 class="name">{{ blog.title }}</h3>
            <p class="videooutline">{{ blog.create_time }}</p>
            <a class="blog">
              {{ blog.description }}
            </a>
          </div>
        </a>
      </div>

      <h2 class="title">
        精选视频<router-link class="more" to="/video">查看更多 ></router-link>
      </h2>
      <div id="reco_list" v-for="video in videos" :key="video.id">
        <div class="jump" href="">
          <div class="picture">
            <img class="pic" :src="video.img" alt="" />
          </div>
          <div class="introduce">
            <h3 class="name">{{ video.title }}</h3>
            <p class="videooutline">{{ video.create_time }}</p>
            <p class="description">{{ video.description }}</p>
            <button class="enter" @click="goVideoDetail(video.id)">观看</button>
          </div>
        </div>
      </div>
    </div>
    <div class="slider">
      <slider />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
      blogs: [],
      videos: [],
    };
  },
  methods: {
    async getPriorityBooks() {
      let result = await this.$API.getPriorityBooks();
      if (result.code == 200) {
        this.books = result.data;
      }
    },
    async getPriorityBlogs() {
      let result = await this.$API.getPriorityBlogs();
      if (result.code == 200) {
        this.blogs = result.data;
      }
    },
    async getPriorityVideos() {
      let result = await this.$API.getPriorityVideos();
      if (result.code == 200) {
        this.videos = result.data;
      }
    },
    goSection(id){
      this.$router.push({path:"/bookdetail",query:{id}})
    },
    goBlogDetail(id){
      this.$router.push({path:'/blogdetail',query:{id}})
    },
    goVideoDetail(id){
      this.$router.push({path:'/videodetail',query:{id}})
    }
  },
  mounted() {
    this.getPriorityBooks();
    this.getPriorityBlogs();
    this.getPriorityVideos();
  },
};
</script>

<style lang="scss" scoped>
.content {
  max-width: 126rem;
  min-width: 126rem;
  margin: 0 auto;

  .data {
    width: 95.5rem;
    float: left;
    margin-right: 1.5rem;
    margin-bottom: 2.5rem;

    .title {
      margin-top: 1.5rem;
      width: 100%;
      height: 5rem;
      font-size: 20px;
      line-height: 50px;
      padding-left: 2.3rem;
      background-color: #fff;
      font-family: "微软雅黑";

      .more {
        display: block;
        font-size: 14px;
        line-height: 50px;
        color: #808080;
        float: right;
        padding-right: 2rem;
      }
    }

    #reco_list {
      width: 100%;
      min-height: 20rem;
      // background-color: #fff;
      a {
        text-decoration: none;
      }

      .jump {
        display: flex;
        width: 100%;
        height: 20rem;
        background-color: #fff;
        margin-top: 1rem;
        flex-direction: row;

        .picture {
          width: 25%;
          height: 15rem;
          margin-top: 2.5rem;
          margin-left: 1.5rem;
          // float: left;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .introduce {
          width: 70%;
          // float: left;
          margin-left: 2.5rem;
          margin-top: 3.5rem;

          .name {
            margin-top: 0;
            margin-bottom: 1rem;
            font-size: 18px;
            color: #000;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .videooutline {
            margin-bottom: 1rem;
            color: #ccc;
          }

          .description {
            display: block;
            width: 40rem;
            height: 2rem;
            margin-bottom: 1rem;
            color: #808080;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .blog {
            display: block;
            width: 40rem;
            height: 5.5rem;
            margin-bottom: 3rem;
            color: #808080;
            overflow: hidden;
            white-space: normal;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }

          button {
            width: 9rem;
            height: 4rem;
            background-color: #e3f0fc;
            border: 0px;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>