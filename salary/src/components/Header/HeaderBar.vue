<template>
  <div class="headers">
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <div class="logo">
            <img src="https://pro.modao.cc/uploads3/images/1142/11425140/raw_1501225715.png" alt="">
          </div>
          <div class="head-infor">
            <i class="iconfont icon-xin"></i>
            <small>北京八维研修学院</small>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content head-right">
          <i class="iconfont icon-bangzhu help"></i>
          <i class="iconfont icon-lingdang"></i>
          <span>webxiaohe</span>
          <i class="iconfont icon-xia"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'headers'
}
</script>

<style>
.headers{
    position: relative;
    width: 100%;
    height: 64px;
    background-color: #919191;
    color: #fff;
}
.logo{
    position: absolute;
    width: 120px;
    height: 90px;
    left: 70px;
    top: -15px;
}
.logo img{
    width: 100%;
    height: auto;
}
.head-infor{
    margin-left: 300px;
    display: -webkit-flex;
    width: 150px;
    line-height: 64px;
}
.head-infor i{
  padding-right: 5px;
}
.head-infor small{
    font-size: 14px;
}
.head-infor i{
    color: red;
    font-size: 22px;
}
.head-right{
    font-size: 16px;
    text-align: center;
    margin-top: 16px;
}
.help{
    margin-right: 10px;
}
.head-right span{
  padding-left: 10px;
  padding-right: 10px;
}
</style>
