<template>
  <div id="app">
     <i class="iconfont icon-huaxue"></i>

  <!--导航-->
    <div class="header-nav" ref="HeaderNav">
      <ul>
        <li v-for="(item, index) in nav" :key="index"   
            @mouseover="hoverIndex = index"
           @mouseout="hoverIndex = -1">
          <router-link :to="item.to">
              {{item.name}}
          </router-link>
          <div class="nav-border" 
           :class="{'click-active':index==clickIndex,'hover-active':index==hoverIndex}"
           ></div>
        </li>
      </ul>
    </div>
    <router-view/>
    <!--左下角小火箭-->
    <div class="back-to-top" v-show="topShow" @click="backToTop()">
      <div class="icon-container" >
        <i class="iconfont icon-changyongtubiao-mianxing-" style="font-size:50px"></i>
      </div>
     
    </div>
    <div class="footer-containe">
      <div class="rights">
        <p>Copyright © 2019 - {{ new Date().getFullYear() }} Maz's Blog</p>
      </div>
      <div class="to-admin">
        <router-link tag="a" to="/login">后台登陆</router-link>
    </div>
  </div>
    
  </div>
</template>

<script>

import store from './store/index.js'
export default {
  store,
  name: 'App',
  data(){
    return{
      nav:[
        {name: "HOME", to: "/home"},
        {name: "CATALOG", to: "/catalog"},
        {name: "BLOG", to: "/blog"},
        {name: "OTHERS", to: "/others"},
        {name: "ABOUT", to: "/about"},   
      ],
      hoverIndex: -1, //表示当前hover的是第几个li 初始为 -1 或 null 不能为0 0表示第一个li
      clickIndex: -1, //表示当前点击的是第几个li 初始为 -1 或 null 不能为0 0表示第一个li 
      activeMap: {
          'Home': 0,
          'Catalog': 1,
          'Blog': 2,
          'Other': 3,
          'About': 4
      },
      topShow: false,
      topIcon: 'icon-top-static',
    }
  },
  mounted(){
    window.addEventListener('scroll', this.bodyScroll)
    this.clickHeaderNav()
  },
  methods:{

    //导航隐藏
    bodyScroll() {

        console.log('scroll:')
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        const HeaderNav = this.$refs.HeaderNav
        if (HeaderNav) {
          if (scrollTop >= 200) {
            HeaderNav.style.top = '-60px'
          } else {
            HeaderNav.style.top = '0'
          }
        }
        //右下标动画
        this.topShow = scrollTop > 500 ? true : false
    }, 
    clickHeaderNav(){
        const name = this.$route.name
        this.clickIndex = this.activeMap[name]
    },
    //右下标动画
    backToTop() {
        this.topIcon = 'icon-top-start'
        this.animateToTop()
    },
    animateToTop() {
        let timer = setInterval(() => {
          const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          const ispeed = Math.floor(-scrollTop / 6)
          if( scrollTop === 0 ){
            this.topIcon = 'icon-top-static'
            clearInterval(timer)
          }
          document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed
        }, 30)
      }
  },
  watch: {
      $route() {
        this.clickHeaderNav()
        console.log(this.$route.name)
      }
  },
  components:{
    
  }

}
</script>

<style lang="scss" >

.back-to-top {
    position: fixed;
    bottom: 32px;
    right: 20px;
    cursor: pointer;
}
.footer-containe {
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    color: black;
    display: flex;
    justify-content: center;
    .rights {
      margin-right: 10px;
    }
    a {
      color: black;
      &:hover {
        color: #eee;
      }
    }
  }
</style>
