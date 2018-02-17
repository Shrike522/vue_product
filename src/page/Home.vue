<template>
  <el-container id="home">
    <el-aside class="leftBox" width="200px">
      <router-link to="/home/chartsList">列表</router-link>
      <router-link to="/editor">创建</router-link>
      <router-link to="/home/myCharts">我的</router-link>
    </el-aside>
    <el-main class="homeMain">
      <router-view/>
    </el-main>
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
    name:"Home"
  }
</script>

<style lang="less" scoped>
  #home{
    width: 100%;
    height: 100%;
  }
  .leftBox{
    height: 100%;
    background-color: #FFFFFF;
    position: relative;
    overflow: hidden;
    box-shadow: 1px 0 10px rgba(0,0,0,0.2);
  }
  .homeMain{
    height: 100%;
    padding: 0;
    margin: 0;
  }
</style>
