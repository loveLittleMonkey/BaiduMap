<template>
    <div id="header">
      <input>
      <button id="search" >搜索</button> 
      <button v-on:click="router_push">切换面板</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      url: '/'
    }
  },
  mounted () {

  },
  methods: {
    router_push () {
      // 判断浏览器中的url 是否有main 或者有secondary,好方便切换路由
      var self = this
      var href = window.location.href
      var re1 = /main/
      var re2 = /secondary/
      var isMain = re1.test(href)
      var isSecondary = re2.test(href)
      if (isMain === true && isSecondary === false) {
        self.url = 'secondary'
      } else if (isMain === false && isSecondary === true) {
        self.url = 'main'
      } else if (isMain === false && isSecondary === false) {
        self.url = 'secondary'
      }
      self.$router.push(self.url)
    }
  }
}
</script>

<style>

#header {
  width: 100%;
  height: 10%;
  background: white;
  position: absolute;
}

</style>


