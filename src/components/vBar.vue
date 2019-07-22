<template>
  <ve-bar :data="chartData" :settings="chartSettings" :extend="chartExtends" />
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      dimension: ["渠道"],
      metrics: ["数量"]
    };
    this.chartExtends = {
      series: {
        barMaxWidth: 20
      },
      legend: {
        show: false
      }
    };
    return {
      chartData: {
        columns: ["渠道", "数量"],
        rows: [
          { 渠道: "链家", 数量: 12 },
          { 渠道: "自如", 数量: 32 },
          { 渠道: "富力", 数量: 22 },
          { 渠道: "富力2", 数量: 44 }
        ]
      }
    };
  }
};
</script>

<style scoped>
</style>