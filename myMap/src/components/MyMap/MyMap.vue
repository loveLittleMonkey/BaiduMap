<template>
  <div id='container'></div>
</template>

<script>
import BMap from 'BMap'

export default {

  name: 'MyMap',
  data () {
    return {}
  },
  mounted () {
    var map = new BMap.Map('container')
    var point = new BMap.Point(113.275, 23.117)
    map.centerAndZoom(point, 12)
  }
}
</script>

<style>
#container{
  width: 100%;
  height:100%;
  position:absolute;
}
</style>
