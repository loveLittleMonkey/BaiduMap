<<template>
  <div>
      <div id="container">这里显示地图</div>
      <v-mark :points=points></v-mark>
  </div>
</template>

<script>
import mark from '../mark/mark'
import BMap from 'BMap'
import axios from 'axios'
const ERR_OK = 0
export default {
  data () {
    return {
      points: {},
      flag: false
    }
  },
  mounted () {
    // 绘制地图
    var map = new BMap.Map('container')
    var point = new BMap.Point(113.275, 23.117)
    map.centerAndZoom(point, 12)

    // 异步获取得到json数据
    axios.get('/api/points')
      .then(function (response) {
        response = response.data
        if (response.errno === ERR_OK) {
          self.points = response.data
          self.flag = true
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  components: {
    'v-mark': mark
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
