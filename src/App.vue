<template>
  <el-container id="app">
    <el-header height="40px" class="headerBox">Vue</el-header>
    <el-main class="mainBox">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
  import ElHeader from 'element-ui/packages/header/src/main';
  import ElMain from 'element-ui/packages/main/src/main';
  import ElContainer from "element-ui/packages/container/src/main";
  import './global.less';
export default {
  components: {
    ElContainer,
    ElHeader,
    ElMain,
  },
  name: 'App',
  data(){
    return {
      pageStatus:"/first",
    }
  },
}
</script>

<style scoped lang="less">
#app {
  width: 100%;
  height: 100%;
  position: relative;
}

  .headerBox{
    width: 100%;
    box-sizing: border-box;
    position: relative;
    background-color: rgba(0,0,0,0.8);
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
  }

  .mainBox{
    width: 100%;
    height: 100%-40;
    background-color: #FFFFFF;
    padding: 0;
    margin: 0;
  }
</style>
