<template>
  <div class="content">
    <div class="box">
      <ul class="comment">
        <a v-for="item in result" :key="item.id" @click="goDetail(item)">
          <li class="block">
            <div class="picture">
              <img class="pic" :src="item.img" alt="" />
            </div>
            <div class="right">
              <h4 class="title">{{ item.title }}</h4>
              <div class="type">{{ item.type }}</div>
              <p class="outline">{{ item.create_time }}</p>
              <div class="paragraph">
                {{ item.description || "提取码：" + item.code }}
              </div>
            </div>
          </li>
        </a>
      </ul>
      <div v-if="result.length == 0" class="footer">没有找到相关信息</div>
    </div>
    <slider />
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [],
    };
  },
  methods: {
    async getSearch() {
      let result = await this.$API.getSearch(this.$route.query.keyword);
      if (result.code == 200) {
        result.data.forEach((t) => {
          if (t.orderby != undefined) {
            t.type = "书籍";
          } else if (t.md_text != undefined) {
            t.type = "博客";
          } else if (t.iframe_url != undefined) {
            t.type = "视频";
          } else if (t.code != undefined) {
            t.type = "资源";
          }
        });
        this.result = result.data;
      }
    },
    goDetail(obj) {
      switch (obj.type) {
        case "书籍":
          this.$router.push({ path: "/bookdetail", query: { id: obj.id } });
          break;
        case "博客":
          this.$router.push({ path: "/blogdetail", query: { id: obj.id } });
          break;
        case "视频":
          this.$router.push({ path: "/videodetail", query: { id: obj.id } });
          break;
        case "资源":
          window.open(obj.url,'_blank');
          break;
        default:
          break;
      }
    },
  },
  watch:{
    '$route.query.keyword'(){
      this.getSearch();
    }
  },
  mounted() {
    this.getSearch();
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
          position: relative;

          .title {
            font-size: 18px;
            margin-bottom: 1rem;
          }

          .type {
            position: absolute;
            right: 1rem;
            top: 0;
            width: 3rem;
            height: 2rem;
            background-color: #206cba;
            color: #f6f6f6;
            text-align: center;
            border-radius: 5px;
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