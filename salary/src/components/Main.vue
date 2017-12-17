<template>
  <div class="mains">
    <Headers/>
    <div class="content">
      <div class="cont-left">
        <Left/>
      </div>
      <div class="cont-right">
        <router-view></router-view>
      </div>
      <!-- <el-row :gutter="20">
        <el-col :span="6">
          <Left/>
        </el-col>
        <el-col :span="18">
          <router-view></router-view>
        </el-col>
      </el-row> -->
    </div>
  </div>
</template>

<script>
import Headers from './Header/HeaderBar'
import Left from './subject/left'
export default {
  name: 'mains',
  components: {
    Headers,
    Left
  }
}
</script>

<style scoped>
.content{
  width: 100%;
  height: 100%;
  display: -webkit-flex;
}
.cont-left{
  width: 200px;
  height: 100%;
}
.cont-right{
  flex: 1;
  height: 100%;
}
</style>
