<template>
    <v-point :points=points v-if="flag"></v-point>
</template>

<script>
  import Point from '../Point/Point'
  import axios from 'axios'

  const ERR_OK = 0

  export default {
    name: 'MyPoint',
    self: this,
    data () {
      return {
        points: {},
        flag: false
      }
    },
    created () {
      axios.get('/api/points')
        .then(function (response) {
          response = response.data
          if (response.errno === ERR_OK) {
            self.points = response.data
            self.flag = true
            console.log('axios', self.points)
            console.log('axios', self.flag)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    mounted () {
      console.log('mounted', self.flag)
    },
    components: {
      'v-point': Point
    }
  }
</script>

<style>

</style>
