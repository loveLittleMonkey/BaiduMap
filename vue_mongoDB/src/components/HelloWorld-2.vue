<template>
    <div id="container">
      <div v-for="point in points" :key=point.id class="message">
        <div class="name">{{point.name}}</div>
        <div class="address">{{point.address}}</div>
        <div class="description">{{point.description}}</div>
        <div class="label">
          <li v-for="(value, key, index) in point.label" :key="index">
            {{value}}
          </li>
        </div>
      </div>
    </div>
</template>

<script>
import DB from '../../static/js/db.js'
export default {
  data () {
    return {
      points: []
    }
  },
  mounted () {
    let self = this
    self.points = DB.selectData()
  }
}
</script>

<style>
#container{
  width: 100%;
  height:90%;
  position:absolute;
  top: 10%;
  background: grey
}

</style>
