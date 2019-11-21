<template>
  <div>
    <ul>
      <template v-for="(item) in items">
        <li @mouseover="selectStyle (item) "
            :class="{'active':item.active}" 
            @mouseout="outStyle(item)">
          {{item.select}}
          <span class="icon" v-show="item.active">{{item.icon}}</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        active: false,
        items: [
          {select:'第一行',icon:1},
          {select:'第二行',icon:2},
          {select:'第三行',icon:3},
          {select:'第四行',icon:4}
        ]
      }
    },
    methods: {
      selectStyle (item) {
        var _this=this;
        this.$nextTick(function () {
          this.items.forEach(function (item) {
            _this.$set(item,'active',false);
          });
          this.$set(item,'active',true);
        });
      },
      outStyle (item) {
        this.$set(item,'active',false);
      }
    }
  }
</script>

<!-- 样式 -->
<style lang="scss" scoped>
  ul{
    padding-top:100px;
    overflow: hidden;
  }
  li{
    float: left;
    color:#000; 
    transition: width .3s linear;
    outline: 1px solid red;
  }
  .active{
    color: red;
    background: chartreuse; 
  }
  .icon{
    float: right;
    font-size: 12px;
  }
</style>

