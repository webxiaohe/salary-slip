<template>
  <div class="diagram-wrap">
    <chart :options="polar"></chart>
  </div>
</template>

<script>

export default {
  name: 'Diagram',
  data: function () {
    return {
      polar: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['web前端', 'PHP工程师', 'JAVA工程师', '产品经理', 'IOS工程师']
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {value: 1548, name: 'web前端'},
            {value: 310, name: 'PHP工程师'},
            {value: 234, name: 'JAVA工程师'},
            {value: 135, name: '产品经理'},
            {value: 335, name: 'IOS工程师'}
          ]
        }]
      }
    }
  }
}
</script>

<style scoped>
.diagram-wrap{
  padding-left: 10px;
  height: 200px;
}
.echarts{
  width: 400px;
  height: 200px;
}
</style>
