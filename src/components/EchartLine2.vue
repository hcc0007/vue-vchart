<template>
  <div>
    <ve-line :data="chartData" :extend="chartExtends" :not-set-unchange="['dataZoom']" />
    <!-- :settings="chartSettings"  -->
  </div>
</template>

<script>
import visited from "../../mock/visited";
export default {
  data() {
    return {
      dataZoom: 20,
      chartData: {
        columns: ["日期", "访客人数"],
        rows: []
      },
      chartExtends: {},
      translate: {
        date: "日期",
        number: "访客人数"
      }
    };
  },
  created() {
    this.chartData.rows = [...visited.getVisitorsList].reduce(
      (init, item, list) => {
        const obj = {};
        Object.keys(item).map(key => {
          const index = Object.keys(this.translate).indexOf(key);
          obj[Object.values(this.translate)[index]] = item[key];
        });
        init.push(obj);
        return init;
      },
      []
    );

    console.log(this.chartData.rows);
  }
};
</script>

<style scoped>
</style>
