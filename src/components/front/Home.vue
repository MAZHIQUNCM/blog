<template>
  <div class="home">
    <div class="bg-wrapper">  
      <div class="bg">
        <div class="txt">
          <p >> Hey! It's Maz.</p>
        </div>    
      </div>
    </div>
    <div class="container">
      <div class="article-list" >
         
          <div class="article-wrapper"
          v-for="item in article" >
              <div class="text" @click="goDetail(item)">
                <div class="title">{{item.title}}</div>
                <div class="message" style="font-size: 16px; color:#999999">
                  <div class="date">{{item.createTime}}</div> 
                  <div class="view">阅读量{{item.view}}</div> 
                </div>
                <div class="markdown-body markdownSummary">
                  <div class="summary">
                    <p style="display: block">{{item.summary}}</p>
                  </div>
                  
                  <p>塔雷斯威夫特 新专 </p>
                  <div class="readall">阅读全文 »</div>
                </div>
                
                </div>
              <div class="pic" >
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569914530349&di=9b24db9ed244b11c195d43e05b7e2935&imgtype=0&src=http%3A%2F%2Fmp3.iqiyipic.com%2Fimage%2F20180823%2F53%2Fd4%2Fppu_467890810102_pp_601_300_300.jpg"
                style="max-width: 100%;">
              </div>
          </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  data () {
    return {
      article:[]
        
        
    }
  },
  created(){
    this.getArticleAll();
  },
  methods:{
     getArticleAll(){
        this.$http.get('/api/getArticleAll')
        .then( (res) => {
           console.log('res', res.data);
            this.article = res.data;
      }).catch((err)=>{
        this.$router.push(`/error`)
      })
    },
    goDetail(article){
      this.$router.push(`/blog/${article.id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.article-wrapper{
  display: flex;
}
.text{
  text-align: left;
      width: 100%;
}

</style>
