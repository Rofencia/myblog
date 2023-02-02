<template>
  <div class="account">
    <span class="selected">精选</span>
    <div class="line"></div>
    <div class="book">
      <img
        :src="book.img"
        alt=""
      />
      <div class="intro">
        <div class="name">{{book.title}}</div>
        <button @click="goSection(book.id)"><a>阅读</a></button>
      </div>
    </div>
    <ul class="others">
      <li v-for="blog in blogs" :key="blog.id">
        <div class="line"></div>
        <a @click="goBlogDetail(blog.id)">{{blog.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {},
      blogs:[]
    };
  },
  methods: {
    async RecommendBook() {
      let result = await this.$API.RecommendBook();
      if (result.code == 200) {
        this.book = result.data;
      }
    },
    async RecommendBlog() {
      let result = await this.$API.RecommendBlog();
      if (result.code == 200) {
        this.blogs = result.data;
      }
    },
    goSection(id){
      this.$router.push({path:"/bookdetail",query:{id}})
    },
    goBlogDetail(id){
      this.$router.push({path:'/blogdetail',query:{id}})
    },
  },
  mounted() {
    this.RecommendBook();
    this.RecommendBlog();
  },
};
</script>

<style lang="scss">
.account {
  width: 27rem;
  height: 32rem;
  margin: 0 auto;

  .line {
    width: 26rem;
    height: 1px;
    margin: 0 auto;
    background-color: #e5e5e5;
  }

  .selected {
    width: 3.6rem;
    height: 3rem;
    padding-left: 1rem;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    line-height: 3rem;
    color: #000000;
  }

  .book {
    display: flex;
    width: 100%;
    height: 16rem;
    flex-direction: row;
    padding: 1rem 0 0.5rem;

    img {
      width: 30%;
    }

    .intro {
      width: 70%;
      padding: 1.5rem;

      .name {
        padding-top: 2rem;
        padding-bottom: 2rem;
        font-size: 18px;
        color: #000;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      button {
        width: 6rem;
        height: 4rem;
        background-color: #e3f0fc;
        border: 0px;
        border-radius: 5px;
      }
    }
  }

  .others {
    width: 100%;
    height: 12rem;

    li {
      height: 4rem;

      a {
        display: block;
        margin: 0 auto;
        width: 86%;
        line-height: 4rem;
        font-size: 14px;
        color: #000;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>