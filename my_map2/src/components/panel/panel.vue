<template>
  <div class="message">
    名称：{{point.name}}<br>
    地址：{{point.address}}<br>
    描述：{{point.description}}<br>
    标签：
    <li v-for="(value, key, index) in point.label" :key="index">
      {{value}}
    </li>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    point: {
      type: Object
    },
    map: {
      type: Object
    }
  },
  mount () {
    console.log('panel is created')
  }
}
</script>

<style>
  .message {
    background: white;
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: 0;
    overflow: scroll
  }
</style>

