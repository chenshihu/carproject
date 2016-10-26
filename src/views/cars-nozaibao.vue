<template>
    <section id="cars_zaibao"   data-animation="fade" class=" section_noback" >
        <header>
            <div class="titlebar">
                <h1><router-link class="backoff" to='/index'>&lt;</router-link>非我司商业险在保车辆</h1>
            </div>
        </header>
        <article>
            <div class="group">
                <div class="inputbox underline">
                    <label class="inputbox-left">车牌号</label>
                    <div class="inputbox-right licenseNo">{{2}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">车架号</label>
                    <div class="inputbox-right frameNo">{{carinfo.carInfo.frameNo}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">发动机号</label>
                    <div class="inputbox-right engineNo">{{carinfo.carInfo.engineNo}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">初登日期号</label>
                    <div class="inputbox-right insertTime">{{carinfo.carInfo.insertTime}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">车辆型号</label>
                    <div class="inputbox-right brandName">{{carinfo.carInfo.brandName}}</div>
                </div>
            </div>
            <div class="group">
                <div class="inputbox underline">
                    <label class="inputbox-left">姓名</label>
                    <div class="inputbox-right customerName">{{carinfo.userInfo.customerName}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">手机号码</label>
                    <div class="inputbox-right mobile">{{carinfo.userInfo.mobile}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">证件号</label>
                    <div class="inputbox-right idcard">{{carinfo.userInfo.idcard}}</div>
                </div>
                <div class="inputbox underline">
                    <div class="box-flex-1 padding8">
                        <p>家庭住址</p>
                        <small class="contactAddress float-right">{{carinfo.userInfo.contactAddress}}</small>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="inputbox underline shangyexian">
                    <label class="inputbox-left"><span class="mark-info">商业险保单号</span></label>
                    <div class="inputbox-right card box-flex-1">
                        <p class="policyNo">{{carinfo.bi.policyNo}}</p>
                        <small class="nowrap comName">{{carinfo.bi.comName}}</small>
                    </div>
                </div>
                <div class="inputbox underline shangyexian">
                    <label class="inputbox-left">起保日期</label>
                    <div class="inputbox-right startDate">{{carinfo.bi.startDate}}</div>
                </div>
                <div class="inputbox underline shangyexian">
                    <label class="inputbox-left">终保日期</label>
                    <div class="inputbox-right endDate">{{carinfo.bi.endDate}}</div>
                </div>
                <div class="inputbox underline shangyexian">
                    <label class="inputbox-left">保费</label>
                    <div class="inputbox-right sumPremium">{{carinfo.sumPremium2}}</div>
                </div>
            </div>
            <div class="group">
                <div class="inputbox underline jiaoqiangxian">
                    <label class="inputbox-left"><span class="mark-warn">交强险保单号</span></label>
                    <div class="inputbox-right card box-flex-1">
                        <p class="policyNo">{{carinfo.ci.policyNo}}</p>
                        <small class="nowrap comName">{{carinfo.ci.comName}}</small>
                    </div>
                </div>
                <div class="inputbox underline jiaoqiangxian">
                    <label class="inputbox-left">起保日期</label>
                    <div class="inputbox-right startDate">{{carinfo.ci.startDate}}</div>
                </div>
                <div class="inputbox underline jiaoqiangxian">
                    <label class="inputbox-left">终保日期</label>
                    <div class="inputbox-right endDate">{{carinfo.ci.endDate}}</div>
                </div>
                <div class="inputbox underline jiaoqiangxian">
                    <label class="inputbox-left">保费</label>
                    <div class="inputbox-right sumPremium">{{carinfo.sumPremium2}}</div>
                </div>
            </div>
            <div class="group">
                <div class="inputbox underline">
                    <label class="inputbox-left">出险次数</label>
                    <div class="inputbox-right count">{{carinfo.count}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">已决金额</label>
                    <div class="inputbox-right sumPaid">{{carinfo.sumPaid}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">未决金额</label>
                    <div class="inputbox-right sumEstiPaid">0</div>
                </div>
            </div>
            <div class="group">
                <div class="inputbox underline">
                    <div class="box-flex-1 padding8">
                        <p><img class="address" src="../assets/gps.png"> 信息地址收集</p>
                        <small class="address  float-right">{{address}}</small>
                    </div>
                </div>
            </div>
            <div class="zaibao">
                <button class="block checkYes" v-on:click="checkYes">登记</button>
            </div>
        </article>
    </section>
</template>
<script >
    import wx from 'weixin-js-sdk'
    import "../../static/jquery-2.1.4.js"
    import "../../static/jquery-weui.min.css"
    import "../../static/jquery-weui.min.js"
    import "../../static/weui.min.css"
    import store from '../vuex/store'
    export default{
        data:function(){
            return{
                param:'',
                carinfo:{}
            }
        },
        methods:{
            checkYes:function(){
                $.post("${ctx}/checkYes",this.param,function(data){
                     $.alert('登记成功！',function(){
                        wx.closeWindow();
                    });
                });
            }
        },
    }
</script>
<style  scoped>
      .titlebar h1{
            position: fixed;
            text-align: center;
            width: 100%;
            height:44px;
            line-height:44px;
            color:#fff;
            font-size:15px;
            background-color:#393a3f;
        }
        .titlebar h1 .backoff{
            float: left;
            text-decoration: none;
            color:#30A29E;
            font-size:32px;
            font-weight: normal;
            margin-left: 10px;
        }
      article{
        padding-top: 60px;
      }
      .group{
        border: 1px solid #e6e6e6;
        margin-bottom: 15px;
        color:#666666;
        font-size: 15px;
      }
      #cars_zaibao{
        background-color: #fff;
        padding: 0;
        margin:0;
      }
      .underline{
          border-bottom: 1px solid #e6e6e6;
          padding: 10px;
      }
      .inputbox-right{
          position: absolute;
          left: 170px;
          display: inline-block;
      }
      .mark-info{
          background-color: #5bc0de;
          border-radius:3px ;
          padding: 10px;
          color:#fff;
      }
       .mark-warn{
           background-color: #f4984e;
           border-radius: 3px;
           padding:10px;
           color:#fff;
       }
       .checkYes{
        color: #ffc155; 
        background-color: white; 
        border: 2px solid #ffc155; 
        margin: 5% 15% 5% 15%; 
        width: 70%; 
        height: 50px; 
        border-radius: 10px;
       }
</style>