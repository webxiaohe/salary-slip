<template>
  <div class="subject-left">
    <el-menu
      default-active="2"
      :router="true"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <template v-for="(val, index) in $router.options.routes" v-if="val.meta">
        <el-submenu :index="index + ''" v-if="val.children" :key="index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{val.meta.title}}</span>
          </template>
          <el-menu-item :route="{path: val.path + '/' + item.path}" v-for="(item, key) in val.children" :key="key" :index="index + '-' + key">{{item.meta.title}}</el-menu-item>    
        </el-submenu>
        <el-menu-item :index="index + ''" v-else :key="index" :route="{path: val.path}">
          <i class="el-icon-setting"></i>
          <span slot="title">{{val.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      list: []
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.subject-left{
    width: 100%;
    height: 100%;
}
.el-menu{
  height: 1000px;
}
</style>
