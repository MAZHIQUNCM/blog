
<template>
  <div class="catalog-wrapper">
    <div>count:{{this.$store.state.count}}</div>
    <el-timeline>
        <el-timeline-item v-for="(item, index) in catalog" :key="index" 
        :timestamp="item.createTime" placement="top" >

          <el-card class="catalog-card" 
           
          :class="{'chover-active':index==hoverIndex}">
            <h4  
            @mouseover="hoverIndex = index"
           @mouseout="hoverIndex = -1" 
           @click="goDetail(item)">{{ item.title }}</h4>
            <p >浏览量{{ item.view }},最后编辑于{{ item.createTime }} </p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    
  </div>
</template>
 
<script>
 export default {
   data: function(){
     return {
       catalog:{},
        hoverIndex: -1,
      
     }
   },
   mounted(){
       this.$store.commit('increment');
       this.getArticleAll()
       
   },
   
   computed:{
      
    
   },
   methods:{
      getArticleAll(){
        this.$http.get('/api/getArticleAll')
        .then( (res) => {
           console.log('res', res.data);
            this.catalog = res.data;
      }).catch((err)=>{
        this.$router.push(`/error`)
      })
    },
    goDetail(article){
      console.log(1)
      this.$router.push(`/blog/${article.id}`)
    }, 
   },
  watch:{
    'hoverIndex':function(){
      console.log(this.hoverIndex)
    }
  }
 }
</script>
 
<style lang="scss">

.chover-active{
  background: #eee;
}
</style>
