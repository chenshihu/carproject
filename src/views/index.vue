<template >
  <div id="index">
    <div id="page_start">
        <div class="start">
          <img src="../assets/start.jpg">
          <button class="car-find"  v-on:click='selectCarNum' >车牌号</button>
          <button class="car-find" v-on:click="toframe" >车架号</button>
        </div>
    </div>
        <div v-if='showConfirm'>
          <div class="weui_mask weui_mask_visible"></div>
          <div class="weui_dialog weui_dialog_visible">
            <div class="weui_dialog_hd">
              <strong class="weui_dialog_title">提示</strong>
            </div>
            <div class="weui_dialog_bd">是否手动输入车牌号查询？</div>
          <div class="weui_dialog_ft">
            <a href="javascript:;" class="weui_btn_dialog default" @click="closeConfirm">取消</a>
          <a href="javascript:;" class="weui_btn_dialog primary"  @click='submit'>确定</a>
          </div>
          </div>
        </div>
  </div>
</template>

<script>
  import wx from 'weixin-js-sdk'
  import "../../static/jquery-2.1.4.js"
  import "../../static/jquery-weui.min.css"
  import "../../static/jquery-weui.min.js"
  import "../../static/weui.min.css"
  import store from '../vuex/store'


    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    };

     wx.config({   
      debug : true, 
      appId : 'wx1fd89fd74dbd237c', 
      timestamp : getUrlParam("timestamp"), 
      nonceStr : getUrlParam("nonceStr"),
      signature : getUrlParam("signature"),
      jsApiList : [ 'openLocation', 'getLocation', 'chooseImage','previewImage', 'uploadImage', 'downloadImage' ]
    });
      wx.getLocation({
        type : 'gcj02', //默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success : function(res) {
          var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          var center = new qq.maps.LatLng(latitude, longitude);
          this.param.latlng=latitude+","+longitude;
          geocoder.getAddress(center);
          geocoder.setComplete(function(result) {
            store.state.address=result.detail.address;
            this.param.address=result.detail.address;
            });
        }
      });
     store.state.param.token=getUrlParam("token");
     // param.token="${token}";
     // param.isCamera=true;
  export default {
   data:function(){
    return {
      msg:'',
      ok:true,
      param:{},
      showConfirm:false
      }
   },
  // store,
   methods:{

    selectCarNum:function(){
      this.param.token=store.state.param.token;
      // console.log("clicked..selectCarNum")
      store.state.param.isCamera=true;//param.isCamera=true;
      this.param=store.state.param;
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
                    $.showLoading();// loading.show();
                    this.param.mediaId=serverId;
                    $.post("${ctx}/upload/callback",this.param,function(data) {
                      $.hideLoading();//loading.hide();
                      if (data == null|| data == "") {
                        $.alert('车牌识别不出，请重试');
                        //new Alert("车牌识别不出，请重试").show();
                      } else {
                        store.state.data=data;//$("#chepai_input").focus().val(data);
                        this.$router.push('/carlicense');//openPage("#chepai");
                      }
                    });
                  }
                });
              },100);
            }
          },
          cancel:function(){
            this.showConfirm=true;
          }
        });
    },
    toframe:function(){
      this.$router.push('/carframe');
    },
    closeConfirm:function(){
      this.showConfirm=false;
    },
    submit:function(){
       this.param.isCamera=false;
       this.showConfirm=false;
       this.$router.push('/carlicense');
    }
  }
}
</script>


<style scoped>
  html {
    height: 100%;
  }
  body{
    background-color: #ffc056;
  }

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
