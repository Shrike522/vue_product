<template>
  <div class="editorBox">
    <div class="leftBox"></div>

    <div class="mainBox">
      <div id="chartEditorArea"></div>
    </div>

    <div class="rightBox"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  export default {
    name:"editor",
    computed:{
      editorChartName(){
        return this.$store.state.editorChart || "chartBar";
      },
      editorChart(){
        return this.$store.state.charts[this.editorChartName].chart;
      },
      editorChartOption(){
        return this.editorChart.option;
      }
    },
    methods:{
      readyEditorChart(option=this.editorChartOption){
        const chartArea = echarts.init(document.getElementById("chartEditorArea"));
        chartArea.setOption(option);
      },
      changeMyChart(chartName){
        this.$store.commit("setChart",chartName);
      },
      removeEditorChart(){
        const myChart = document.getElementById("chartEditorArea");
        myChart.innerHTML = "";
      }
    },
    mounted(){
      this.readyEditorChart();
    },
  }
</script>

<style lang="less" scoped>
  .editorBox{
    width: 100%;
    height: 100%;
    position: relative;
    &:after{
      content: "";
      display: block;
      clear: both;
    }
  }
  .leftBox{
    width: 200px;
    height: 100%;
    background-color: #FFFFFF;
    float: left;
    box-shadow: 1px 0 10px rgba(0,0,0,0.2);
    box-sizing: border-box;
    padding: 40px 0;
  }
  .mainBox{
    width: calc(100% - 220px - 250px);
    height: 100%;
    float: left;
    margin: 0 auto;
  }
  #chartEditorArea{
    width: 100%;
    height: 100%;
  }
  .rightBox{
    float: right;
    width: 250px;
    height: 100%;
    border-left: 1px solid rgba(0,0,0,0.2);
  }
</style>
