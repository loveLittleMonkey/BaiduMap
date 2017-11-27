<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header'
export default {
  name: 'app',
  components: {
    'v-header': header
  }

}
</script>

<style>
#app {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

</style>
