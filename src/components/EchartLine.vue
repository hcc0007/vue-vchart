<template>
  <div>
    <ve-line :data="chartData" :extend="chartSettings" />
    <!-- :settings="chartSettings"  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ["日期", "销售量"],
        rows: [
          { 日期: "1月1日", 销售量: 123 },
          { 日期: "1月2日", 销售量: 1223 },
          { 日期: "1月3日", 销售量: 2123 },
          { 日期: "1月4日", 销售量: 4123 },
          { 日期: "1月5日", 销售量: 3123 },
          { 日期: "1月6日", 销售量: 7123 }
        ]
      },
      chartSettings: {
        xAxis: {
          splitLine: {
            lineStyle: {
              type: "solid"
            },
            show: true
          }
        },
        yAxis: {
          splitLine: {
            //网格线
            lineStyle: {
              type: "solid" //设置网格线类型 dotted：虚线   solid:实线   dashed
            },
            show: true //隐藏或显示
          }
        }
      },
      chartExtends: {
        series: {
          barWidth: 10
        },
        tooltip: {
          trigger: "none"
        }
      }
    };
  }
};
</script>

<style scoped>
</style>
