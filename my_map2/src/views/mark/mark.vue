<template>
  <div class="panel">
    我是标注的点
    <v-panel></v-panel>
  </div>
</template>

<<script>
import panel from '../panel/panel'
export default {
  components: {
    'v-panel': panel
  }
}
</script>

<style scoped>
    .panel{
        position: absolute;
    }
</style>