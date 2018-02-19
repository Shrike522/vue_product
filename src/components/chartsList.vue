
<template>
  <div class="chartsListContent">
    <div class="titleBox">图表列表</div>

    <ul class="chartsListBox">

      <li class="chartsBox" v-for="theChart in chartsList" @click="()=>editorChart(theChart)" :title="chartsListObj[theChart].chart.name" :key="theChart">
        <div class="chartImgBox">
          <img :src="chartsListObj[theChart].chart.img" :alt="chartsListObj[theChart].chart.name">
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name:"chartsList",
    computed:{
      chartsList(){
        return Object.keys(this.chartsListObj);
      },
      chartsListObj(){
        return this.$store.state.charts;
      }
    },
    methods:{
      editorChart(theChart){
        this.$store.commit("setChart",theChart);
        this.$router.push("/editor");
      }
    }
  }
</script>

<style lang="less" scoped>
  .chartsListContent{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .titleBox{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #333333;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .chartsListBox{
    width: 100%;
    position: relative;
    box-sizing: border-box;
    &:after{
      content: "";
      clear: both;
      display: block;
    }
  }
  .chartsBox{
    float: left;
    width: 300px;
    height: 150px;
    margin-right: 30px;
    margin-top: 30px;
    position: relative;
    top: 0;
    box-sizing: border-box;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    &:hover{
      top: -5px;
      box-shadow: 0 0 5px rgba(0,0,0,0.4);
    }
  }
  .chartImgBox{
    width: 100%;
    height: 100%;
    img{
      width: 100%;
    }
  }
</style>
