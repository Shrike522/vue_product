<template>
  <div class="editorBox">
    <div class="leftBox"></div>

    <div class="mainBox">
      <div id="chartEditorArea"></div>
    </div>

    <div class="rightBox"></div>
  </div>
</template>

<script></script>

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
    width: 100% - 200px - 250px;
    height: 100%;
    float: left;
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
