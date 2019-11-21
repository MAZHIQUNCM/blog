<template>
   <div class="about">
    我是关于
  </div>
</template>

<script>
export default {
  data () {
    return {
      inpContent: ''
    }
  },
  methods:{
     getValue() {
      // axios.get('/', {params: ''})
      this.$http.get('/api/getValue', {
        params: {id: 1}
      }).then( (res) => {
        console.log('res', res);
        this.inpContent = res.data[0].name;
      })
    },
    setValue() {
      // axios.post('/', {})
      this.$http.post('/api/setValue', {
        id: 1, name: this.inpContent
      }).then( (res) => {
        console.log('res', res);
      })
    }
  }
}
</script>


<style lang="scss" scoped>


</style>
