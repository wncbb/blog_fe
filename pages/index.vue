<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-card>
        <div v-for="article in articleList" :key="article.id">
          <a v-bind:href="getArticleHref(article.id)">
            {{ article.title }}
          </a>
        </div>

      </el-card>
    </el-main>
  </el-container>

</template>

<script>
export default {
  async asyncData(ctx){
    let resp=await ctx.app.$axios.$get('/api/articles?offset=0&limit=10');
    console.log(resp)
    return {
      articleList: resp.data.list,
      articleNum: resp.data.num,
    };
  },
  data() {
    return {
      articleList: [],
      articleNum: 0,
    };
  },
  methods: {
    getArticleHref(id){
      return '/articles/'+id;
    },
  },

}
</script>