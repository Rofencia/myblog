<template>
  <div class="content">
    <div class="box">
      <p>资源下载</p>
      <hr />
      <ul>
        <li v-for="resource in resources" :key="resource.id">
          <img
            :key="resource.img"
            alt=""
          />
          <span class="title">{{resource.title}}</span>
          <br />
          <span class="code">提取码：{{resource.code}}</span>
          <a class="blueText" :href="resource.url" target="_blank">立即下载</a>
        </li>
      </ul>
    </div>
    <slider />
  </div>
</template>

<script>
export default {
  data() {
    return {
      resources: [],
    };
  },
  methods: {
    async getResources() {
      let result = await this.$API.getResources();
      if (result.code == 200) {
        this.resources = result.data;
      }
    },
  },
  mounted() {
    this.getResources();
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 126rem;
  max-width: 126rem;
  min-width: 100rem;
  background-color: #f6f6f6;
  margin: 0 auto;
  position: relative;

  .box {
    width: 95.5rem;
    min-height: 97.5rem;
    float: left;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    background-color: #ffffff;

    p {
      font-size: 20px;
      font-family: 微软雅黑;
      margin-left: 3rem;
      margin-top: 2rem;
    }

    hr {
      width: 91.5rem;
      margin-top: 2rem;
      margin-left: 2rem;
    }

    ul {
      list-style: none;

      li {
        width: 87.5rem;
        height: 9.7rem;
        border-bottom: 1px solid #e6e6e6;
        margin-left: 4rem;

        img {
          margin-left: 1rem;
          margin-top: 2rem;
          float: left;
          width: 7rem;
          height: 5rem;
        }

        .title {
          position: relative;
          top: 2.3rem;
          margin-left: 2rem;
          margin-top: 2.3rem;
          font-size: 14px;
          color: #000000;
          font-family: 微软雅黑;
        }

        .code {
          position: relative;
          top: 2.8rem;
          margin-left: 2rem;
          font-size: 12px;
          font-family: 微软雅黑;
          color: #808080;
        }

        .blueText {
          font-size: 12px;
          color: #0083fc;
          float: right;
          margin-right: 3rem;
          line-height: 5.7rem;
          text-decoration: none;

          &:hover {
            cursor: pointer;
            color: red;
          }
        }
      }
    }
  }
}
</style>