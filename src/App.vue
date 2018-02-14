<template>
  <el-container id="app">
    <el-header height="40px" class="headerBox">Header</el-header>
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
    background-color: #000000;
  }

  .mainBox{
    width: 100%;
    height: 100%-40;
    background-color: blue;
  }
</style>
