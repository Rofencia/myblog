<template>
  <div class="bigContent">
    <articleText :title="blog.title" :html="blog.html_text" :time="blog.create_time"/>
    <slider />
  </div>
</template>

<script>
import articleText from "@/components/ArticleText";
export default {
  components: {
    articleText,
  },
  data(){
    return{
      blog:{}
    }
  },
  watch:{
    '$route.query.id'(){
      this.getBlog()
    }
  },
  methods:{
    async getBlog() {
      let result = await this.$API.getBlog(this.$route.query.id);
      if (result.code == 200) {
        this.blog = result.data;
      }
    },
  },
  mounted(){
    this.getBlog()
  }
};
</script>

<style lang="scss" scoped>
.bigContent{
  min-width: 136rem;
  margin: 0 auto;
}
</style>