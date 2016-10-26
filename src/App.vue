<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>



<script>
export default {
  name:'app',
  methods:{
  }
}
</script>


<style>
html {
    height: 100%;
  }
  body{
    background-color: #ffc056;
  }
  /*alert*/
  .weui_dialog{
    margin-left:-43%!important;
  }
  .weui_dialog_ft{
    font-size: 23px!important;
  }
  .weui_dialog_bd{
    font-size:17px!important;
  }
</style>
