<template>
  <div class="bg">
    <div class="Bookcontent clearfix">
      <div class="bookimg">
        <div class="title">{{ book.title }}</div>
        <img src="./images/bg.png" alt="" />
      </div>
      <div class="Maincontent">
        <div class="contentlist">
          <el-menu
            default-active="0"
            mode="vertical"
            unique-opened
            @open="handleOpen"
          >
            <el-submenu
              :index="'' + chapter.id"
              v-for="chapter in chapters"
              :key="chapter.id"
            >
              <template slot="title">{{ chapter.title }}</template>
              <el-menu-item :index="''+section.id" v-for="section in sections" :key="section.id" @click="goSection(section.id)">{{section.title}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div class="bookinfo">
          <h3>简介</h3>
          <p>
            {{ book.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="long">
        <ul>
          <li>个人学习空间 web端</li>
          <li>|</li>
          <li>饶方霄</li>
          <li>|</li>
          <li>2022年</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      book: {},
      chapters: [],
      sections: [],
    };
  },
  methods: {
    async getBook() {
      let result = await this.$API.getBook(this.id);
      if (result.code == 200) {
        this.book = result.data;
      }
    },
    async getChapters() {
      let result = await this.$API.getChapters(this.id);
      if (result.code == 200) {
        this.chapters = result.data;
      }
    },
    async getSections(id) {
      let result = await this.$API.getSections(id);
      if (result.code == 200) {
        this.sections = result.data;
      }
    },
    handleOpen(key) {
      this.getSections(key);
    },
    goSection(id){
      this.$router.push({path:'/section',query:{id}})
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getBook();
    this.getChapters();
  },
};
</script>

<style lang="scss">
.bg {
  background-color: #f6f6f6;

  .Bookcontent {
    display: flex;
    flex-direction: column;
    max-width: 126rem;
    min-width: 126rem;
    margin: 0 auto;
    background-color: #fff;

    .bookimg {
      position: relative;
      padding-bottom: 2rem;

      img {
        width: 100%;
        height: 20rem;
      }

      .title {
        width: 27.2rem;
        height: 3.4rem;
        font-family: MicrosoftYaHei;
        font-size: 34px;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
        color: #000000;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
      }
    }

    .Maincontent {
      display: flex;
      flex-direction: row;
      min-height: 50rem;

      .contentlist {
        width: 75%;
      }

      .bookinfo {
        width: 25%;
        border-left: 2px dotted #ccc;

        h3 {
          padding: 0.5rem 1rem;
          width: 6rem;
          height: 1.7rem;
          font-family: MicrosoftYaHei;
          font-size: 18px;
          font-weight: normal;
          line-height: 24px;
        }

        p {
          display: block;
          padding: 1rem;
          width: 30.5rem;
          height: 39.9rem;
          font-family: MicrosoftYaHei;
          font-size: 16px;
          line-height: 24px;
          color: #808080;
          overflow: hidden;
        }
      }
    }
  }

  .footer {
    width: 100%;
    height: 4rem;
    color: #bebebe;
    margin-top: 31px;
    background-color: #fff;

    ul {
      width: 47.1rem;
      height: 100%;
      margin: 0 auto;
      line-height: 4rem;

      li {
        list-style: none;
        float: left;
        margin-left: 10px;
      }
    }
  }
}
</style>