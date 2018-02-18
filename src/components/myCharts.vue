<template>
  <div>我的</div>
</template>

<script>
  export default {
    name:"myCharts",
    computed:{
      chartsList(){
        return Object.keys(this.chartsListObj);
      },
      chartsListObj(){
        return this.$store.charts;
      }
    }
  }
</script>

<style scoped></style>
