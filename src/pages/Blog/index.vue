<template>
  <div class="content">
    <div class="box">
      <ul class="comment">
        <a v-for="blog in blogs" :key="blog.id" @click="goDetail(blog.id)">
          <li class="block">
            <div class="picture">
              <img
                class="pic"
                :src="blog.img"
                alt=""
              />
            </div>
            <div class="right">
              <h4 class="title">{{blog.title}}</h4>
              <p class="outline">{{blog.create_time}}</p>
              <div class="paragraph">
                {{blog.description}}
              </div>
            </div>
          </li>
        </a>
      </ul>
      <div class="footer">更多精彩内容敬请期待</div>
    </div>
    <slider />
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    async getBlogs() {
      let result = await this.$API.getBlogs();
      if (result.code == 200) {
        this.blogs = result.data;
      }
    },
    goDetail(id){
      this.$router.push({path:'/blogdetail',query:{id}})
    }
  },
  mounted() {
    this.getBlogs();
  },
};
</script>

<style lang='scss' scoped>
.content {
  max-width: 126rem;
  min-width: 126rem;
  background-color: #f6f6f6;
  margin: 0 auto;

  .box {
    width: 95.5rem;
    min-height: 97.5rem;
    float: left;
    margin-top: 0.5rem;
    margin-right: 1.5rem;

    .comment {
      a {
        text-decoration: none;
        color: black;
      }

      .block {
        padding: 2.5rem;
        list-style: none;
        width: 95.5rem;
        height: 21rem;
        margin-top: 1rem;
        background-color: #ffffff;

        .picture {
          width: 23rem;
          height: 15rem;
          float: left;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .right {
          width: 70%;
          height: 100%;
          margin-left: 2.5rem;
          float: left;

          .title {
            font-size: 18px;
            margin-bottom: 1rem;
          }

          .outline {
            margin-bottom: 0.5rem;
            color: #ccc;
          }

          .paragraph {
            width: 100%;
            height: 68%;
            line-height: 22px;
            float: left;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #808080;
            font-size: 15px;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
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