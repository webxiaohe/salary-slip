<template>
  <div class="home">
    <h1>首页</h1>
    <chart :options="polar"></chart>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted () {
    this.$http.get('/api/goHome').then(data => {
      console.log(data)
    })
  },
  data: function () {
    var colors = ['#5793f3', '#d14a61', '#675bba']
    return {
      polar: {
        color: colors,
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['总薪资']
        },
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return '总薪资为  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                }
              }
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0]
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '总薪资',
            type: 'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.home{
  width: 100%;
}
.home h1{
  height: 60px;
  border-bottom: 1px solid #ccc;
  padding-left: 20px;
  line-height: 60px;
  font-size: 20px;
  font-weight: normal;
}
.echarts {
  height: 300px;
}
</style>
