<template>
  <div></div>
</template>

<script>
  var self = this
  export default {
    props: {
      points: {
        type: Object
      }
    },
    created () {
      console.log('point', self.points)
    }
  }
</script>

<style>

</style>
