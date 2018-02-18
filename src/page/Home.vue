<template>
  <el-container id="home">
    <div class="leftBox">
      <router-link class="leftBoxMenu" to="/home/chartsList">列表</router-link>
      <router-link class="leftBoxMenu" to="/editor">创建</router-link>
      <router-link class="leftBoxMenu" to="/home/myCharts">我的</router-link>
    </div>
    <div class="homeMain">
      <router-view/>
    </div>
  </el-container>
</template>

<script>
  import ElContainer from "element-ui/packages/container/src/main";
  import ElMain from "element-ui/packages/main/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
  import ElAside from "element-ui/packages/aside/src/main";
  export default {
    components: {
      ElHeader,
      ElAside,
      ElMain,
      ElContainer,
    },
    name:"Home",
  }
</script>

<style lang="less" scoped>
  #home{
    width: 100%;
    height: 100%;
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
  .homeMain{
    overflow: hidden;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .leftBoxMenu{
    width: 200px;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 40px;
    display: block;
    font-size: 16px;
    color: cornflowerblue;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    &:hover{
      opacity: 0.5;
    }
  }
</style>
