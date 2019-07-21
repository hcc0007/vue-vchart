<template>
  <div id="app">
    <vBar />
    <vPie />
    <Echart-line2 />
    <Echart-line />
    <Echart />
  </div>
</template>

<script>
import Echart from "./components/Echart";
import EchartLine from "./components/EchartLine";
import EchartLine2 from "./components/EchartLine2";
import vPie from "./components/vPie";
import vBar from "./components/vBar";

export default {
  name: "app",
  components: {
    Echart,
    EchartLine2,
    EchartLine,
    vPie,
    vBar
  },
  data() {
    return {
      nodeData: ""
    };
  },
  created() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
