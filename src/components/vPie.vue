<template>
  <ve-pie :data="chartData" :settings="chartSettings" />
</template>

<script>
// refrence: https://echarts.baidu.com/option.html#series-pie.label
export default {
  data() {
    this.chartSettings = {
      limitShowNum: 2,
      selectedMode: "single",
      label: {
        show: true,
        position: "inner",
        fontSize: 16,
        formatter: "{b} \n {d}%"
      }
    };
    return {
      chartData: {
        columns: ["性别", "人数"],
        rows: [{ 性别: "男", 人数: 1393 }, { 性别: "女", 人数: 3530 }]
      }
    };
  }
};
</script>

<style scoped>
</style>