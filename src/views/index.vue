<template scoped>
  <div id="index">
    <div id="page_start"  v-if='ok'>
        <div class="start">
          <img src="../assets/start.jpg">
          <button class="car-find"  v-on:click='selectCarNum'>车牌号</button>
          <router-link class="car-find" to="/carframe">车架号</router-link>
        </div>
    </div>
    <chepai v-if="!ok"  v-on:test="parent" chepaiData="data"></chepai> 
    <loading></loading>
  </div>
  
</template>

<script>
  import chepai from './car-license.vue'
  import chejia from './car-frame.vue'
  import wx from 'weixin-js-sdk'
  import loading from '../components/loading.vue'
  // import store from './vuex/store';
     wx.config({   
      debug : false, 
      appId : 'wx1fd89fd74dbd237c', 
      timestamp : "${timestamp}", 
      nonceStr : "${nonceStr}", 
      signature : "${signature}",
      jsApiList : [ 'openLocation', 'getLocation', 'chooseImage','previewImage', 'uploadImage', 'downloadImage' ]
    });
     // param.token="${token}";
     // param.isCamera=true;
  export default {
   data:function(){
    return {
      msg:'',
      ok:true,
      param:{
        isCamera:true,
        token:"${token}",
        
      }
      }
   },
  // store,
   components:{chepai,chejia,loading},
   events:{
 
   },
   methods:{
     parent: function (arg) { 
        this.ok=arg;
      },
    selectCarNum:function(){
      console.log(this.$root.data.a);
        wx.chooseImage({
          count : 1, // 默认9
          sizeType : ['compressed' ], // 可以指定是原图还是压缩图，默认二者都有 'original'
          sourceType : [ 'album', 'camera' ], // 可以指定来源是相册还是相机，默认二者都有
          success : function(res) {
            var localIds = res.localIds;
            this.param.isCamera=true;
            if (res.localIds.length == 1) {
              setTimeout(function() {
                wx.uploadImage({
                  localId : localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
                  isShowProgressTips : 1,// 默认为1，显示进度提示
                  success : function(res) {
                    var serverId = res.serverId; // 返回图片的服务器端ID
                    // loading.show();//进度条
                    param.mediaId=serverId;
                    $.post("${ctx}/upload/callback",param,function(data) {
                      // loading.hide();
                      if (data == null|| data == "") {
                        new Alert("车牌识别不出，请重试").show();
                      } else {
                        this.data=data;
                        this.ok=!this.ok;
                      }
                    });
                  },
                });
              },100);
            }
          },
          cancel:function(){
            new Alert("是否手动输入车牌号查询？",{
              "onClickOk":function(e){
                e.hide();
                param.isCamera=false;
                $("#chepai_input").focus();
                openPage("#chepai");
              },"onClickCancel":function(e){
                  e.hide();
              }
            }).show();
          }
        });   
    },
  }
}
</script>


<style scoped>
  #page_start .start img{
    display:block;
    width:200px;
    height: 200px;
    margin:20%  auto 22.5%;
  }
  #page_start .start .car-find{
    display:block;
    width:60%;
    height:60px;
    text-align: center;
    line-height: 60px;
    margin:0 20% 5% 20%;
    color:#fff;
    font-size:20px;
    border:2px solid #fff;
    border-radius:10px;
    background-color: #ffc056;
    text-decoration: none;
  }
  #page_start .start a:active{
    border: 2px solid #5297DC；
  }
</style>
