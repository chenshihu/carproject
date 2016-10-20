<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>


<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script charset="utf-8" src="http://map.qq.com/api/js?v=2.exp&key=7KNBZ-IASWP-SLYDL-LL446-ACEE6-Y4BLX"></script>


<script>
import carframe from './views/car-frame'
var data={
  a:1
}
export default {
   name:'app',
   data:function(){
    return {
      a:'1',
      b:'nihao'
    }
  },
  component:[carframe],
  methods:{
    doit:function(){
      
    }
  }
}
</script>


<style>
html {
  height: 100%;
}

</style>
