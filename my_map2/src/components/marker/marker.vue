<template>
  
</template>

<script>
import BMap from 'BMap'
import SquareOverlay from '../../../static/js/SquareOverlay.js'

export default {
  props: {
    point: {
      type: Object
    },
    map: {
      type: Object
    }
  },
  mounted () {
    let self = this
    var location = new BMap.Point(self.point.location.lat, self.point.location.lng)
    var myMarker = new SquareOverlay(location, 50, 'red')
    self.map.addOverlay(myMarker)
    myMarker.addEventListener('click', function () {
      console.log('myMarker is click')
      self.$emit('clickEvent', self.point.id)
    })
    console.log('myMarker', myMarker)
  }
}
</script>
