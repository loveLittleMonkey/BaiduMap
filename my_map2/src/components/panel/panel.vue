<template>
  <div class="message">
  </div>
</template>

<script>
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
    console.log('panel', self.point)
  }
}
</script>

<style>
  .message {
    background: black;
    width: 100px;
    height: 100px;
    position: absolute;
  }
</style>

