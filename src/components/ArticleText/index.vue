<template>
  <div class="content">
    <div class="box">
      <div class="BlogText">
        <h4>
          <strong>{{title}}</strong>
        </h4>
        <p class="releaseTime">{{ time||'' }}</p>
        <div class="content-text">
          <div v-html="html"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props:['title','html','time']
};
</script>

<style lang="scss" scoped>
body {
  background-color: #f6f6f6;

  .content {
    width: 132.2rem;
    margin-top: 1.5rem;
    margin: 0 auto;
    max-width: 132.2rem;
    min-width: 100rem;
    background-color: #f6f6f6;

    .box {
      width: 95.5rem;
      float: left;
      margin-left: 3rem;
      margin-top: 1.5rem;
      margin-right: 1.5rem;
      background-color: #fff;
      padding: 2rem;
      min-height: 50.4rem;
      margin-bottom: 2rem;

      .BlogText {
        clear: both;
        width: 100%;
        
        .releaseTime{
          color: #ccc;
        }

        h4 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .content-text {
          margin-bottom: 20px;
          font-size: 16px;
        
          ::v-deep img {
            max-width: 100%;
          }
        }
      }
    }
  }
}
</style>