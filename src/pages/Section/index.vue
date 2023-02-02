<template>
  <div>
    <articleText :title="section.title" :html="section.html_text"/>
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
      section:{}
    }
  },
  methods:{
    async getSection() {
      let result = await this.$API.getSection(this.$route.query.id);
      if (result.code == 200) {
        this.section = result.data;
      }
    },
  },
  mounted(){
    this.getSection()
  }
};
</script>

<style>
</style>