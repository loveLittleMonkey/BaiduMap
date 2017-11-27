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

    var myMarker = new SquareOverlay(location, 30, 'red')
    self.map.addOverlay(myMarker)

    myMarker.addEventListener('click', function () {
      self.$emit('clickEvent', self.point.id)
    })

    myMarker.addEventListener('touchstart', function () {
      console.log('touch')
      self.$emit('touchstartEvent', self.point.id)
    })
  }
}
</script>
