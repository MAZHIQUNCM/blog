<template>
<div>
    <div class="article-detail">
   
      <div class="article-title">
        <h1>{{ article.title }}</h1>
        <div class="article-mes">
          <span class="article-postdata">{{ article.post_time }}</span>
          <span class="article-view"><i class="el-icon-search title-icon"></i>{{ article.view }}</span>
        </div>
      </div>
      <div class="markdown-body" v-html="article.content"></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: []
    }
  },
  created(){
    this.getArticle();
  },
  methods:{
     getArticle() {
      // axios.get('/', {params: ''})
      console.log(this.$route.params)
      this.$http.get('/api/getArticle', {
        params: {id: this.$route.params.id}
      }).then( (res) => {
        console.log('res', res);
        this.article = res.data[0];
      })
    },
     
   
  }
}
</script>


<style lang="scss" scoped>

</style>
