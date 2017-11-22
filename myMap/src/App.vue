<template>
  <div id="app">
    <MyMap/>
    <MyPoints/> 
  </div>
</template>

<script>
import MyMap from './components/MyMap/MyMap.vue'
import MyPoints from './components/MyPoints/MyPoints.vue'
export default {
  name: 'app',
  components: {
    MyMap,
    MyPoints
  }
}
</script>

<style>

</style>
