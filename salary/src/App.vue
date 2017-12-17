<template>
  <div id="app">
    <template v-if="$route.path !== '/login'">
      <Mains/>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import Mains from './components/Main'
import './static/font/iconfont.css'
import './assets/common.css'
export default {
  name: 'app',
  components: {
    Mains
  }
}
</script>

<style scoped>
#app {
  font-family: 'Microsoft YaHei';
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
