<template>
  <el-container id="home">
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
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

<style scoped>
  #app{
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>

<style scoped>
  #home{
    width: 100%;
    height: 100%;
  }
</style>
