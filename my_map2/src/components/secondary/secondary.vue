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
import axios from 'axios'
const ERR_OK = 0
export default {
  name: 'secondary',
  data () {
    return {
      points: []
    }
  },
  mounted () {
    let self = this
    // 异步获取得到json数据
    axios.get('/api/points')
      .then(function (response) {
        response = response.data
        if (response.errno === ERR_OK) {
          self.points = response.data
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style>
#container{
  width: 100%;
  height:90%;
  position:absolute;
  top: 10%;
  background: grey;
  overflow: scroll
}

</style>
