<template>
  <ve-histogram :data="chartData" :extend="chartExtends" />
</template>

<script>
export default {
  data() {
    this.chartExtends = {
      legend: {
        show: false
      }
    };
    return {
      chartData: {
        columns: ["客户类型", "数量"],
        rows: [
          { 客户类型: "新客户", 数量: 1393 },
          { 客户类型: "旧客户", 数量: 3530 }
        ]
      }
    };
  }
};
</script>

<style scoped>
</style>