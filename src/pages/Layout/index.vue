<template>
  <div>
    <div class="long">
      <div class="header">
        <div class="title">
          <router-link to="/"
            ><img src="./images/logo.png" alt="!"
          /></router-link>
        </div>
        <ul class="meun">
          <li :class="path == 'home' ? 'active' : ''">
            <router-link to="/">首页</router-link>
          </li>
          <li :class="path == 'book' ? 'active' : ''">
            <router-link to="/book">学习手册</router-link>
          </li>
          <li :class="path == 'blog' ? 'active' : ''">
            <router-link to="/blog">技术博客</router-link>
          </li>
          <li :class="path == 'video' ? 'active' : ''">
            <router-link to="/video">学习视频</router-link>
          </li>
          <li :class="path == 'resource' ? 'active' : ''">
            <router-link to="/resource">学习资源</router-link>
          </li>
        </ul>

        <div class="search" action="/search">
          <input
            type="text"
            placeholder="搜索"
            name="searchkey"
            v-model="keyword"
            @keydown.enter="search"
          />
          <button>
            <img
              class="icon"
              src="./images/search.png"
              alt=""
              @click="search"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="hyperlink">
      <div class="Code" v-show="this.index == 1">
        <img src="./images/WXCode.png" alt="weixin " />
        <p style="font-size: 12px; text-align: center">添加微信</p>
      </div>
      <div class="CodeQQ" v-show="this.index == 2">
        <img src="./images/QQCode.jpg" alt="weixin " />
        <p style="font-size: 12px; text-align: center">添加QQ</p>
      </div>
      <ul>
        <li
          class="user"
          @mouseenter="changIndex(1)"
          @mouseleave="changIndex(0)"
        >
          <img src="./images/wx.png" alt="" />
        </li>
        <li
          class="codeUser"
          @mouseenter="changIndex(2)"
          @mouseleave="changIndex(0)"
        >
          <img src="./images/QQ.png" alt="" />
        </li>
        <li class="toTop" @click="toTop()">
          <img src="./images/top.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      index: 0,
      keyword: "",
    };
  },
  methods: {
    changIndex(index) {
      this.index = index;
    },
    toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    search() {
      if (!this.keyword) {
        return;
      } else if (
        this.$route.path == "/search" &&
        this.$route.query.keyword == this.keyword
      ) {
        return;
      }
      this.$router.push({ path: "/search", query: { keyword: this.keyword } });
    },
  },
  computed: {
    path() {
      return this.$route.meta.type;
    },
  },
};
</script>

<style lang="scss" scoped>
.long {
  width: 100vw;
  min-width: 100rem;
  height: 6rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px #f2f2f2;

  .header {
    max-width: 120rem;
    min-width: 120rem;
    top: 0;
    margin: 0 auto;

    .title {
      text-decoration: none;
      color: black;
      font-size: 1.8rem;
      width: 11.5rem;
      height: 2.8rem;
      margin-top: 1.6rem;
      float: left;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .meun {
      float: left;
      margin-left: 2.4rem;

      li {
        list-style: none;
        font-size: 15px;
        font-family: 微软雅黑;
        line-height: 5.8rem;
        margin-top: 0.1%;
        width: 11.4rem;
        text-align: center;
        float: left;

        a {
          display: block;
          color: black;
          text-decoration: none;
        }

        &:hover {
          box-sizing: border-box;
          border-bottom: 2px solid#0084ff;
        }
      }

      .active {
        box-sizing: border-box;
        border-bottom: 2px solid#0084ff;
      }
    }

    .search {
      float: right;
      width: 30rem;
      height: 4rem;
      box-sizing: border-box;
      border-radius: 5px;
      border: 1px solid #e5e5e5;
      margin-right: 2rem;
      margin-top: 1rem;

      input {
        width: 26.8rem;
        height: 100%;
        border: 0px;
        padding-left: 1.5rem;
        font-size: 16px;
        box-sizing: border-box;
        outline: none;
      }

      button {
        width: 3rem;
        height: 100%;
        float: right;
        background-color: #fff;
        border: none;

        .icon {
          width: 3rem;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

.content {
  background-color: #f6f6f6;
}

.hyperlink {
  z-index: 9;
  position: fixed;
  width: 4.1rem;
  right: 2%;
  bottom: 6%;

  & > ul img {
    width: 3rem;
  }

  & > div img {
    width: 100%;
  }

  .Code {
    position: absolute;
    left: -19.6rem;
    top: -6.8rem;
    width: 17.5rem;
    height: 21.5rem;
    border: 1px solid #b3b3b3;
    background-color: #fff;
    box-sizing: border-box;
  }

  .CodeQQ {
    position: absolute;
    left: -19.6rem;
    top: -3rem;
    width: 17.5rem;
    height: 21.5rem;
    border: 1px solid #b3b3b3;
    background-color: #fff;
    box-sizing: border-box;
  }

  p {
    text-align: center;
    font-size: 18px;
  }

  ul li {
    line-height: 5rem;
    width: 4.1rem;
    height: 3.6rem;
    margin-top: 1.5rem;
  }
  .toTop:hover {
    cursor: pointer;
  }
}
</style>