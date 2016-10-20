<template>
	<section id="cars_zaibao"   data-animation="fade" class=" section_noback" >
        <header>
            <div class="titlebar">
                <h1><router-link class="backoff" to='/index'>&lt;</router-link>我司商业险在保车辆</h1>
            </div>
        </header>
        <article>
            <div class="group">
                <div class="inputbox underline">
                    <label class="inputbox-left">车牌号</label>
                    <div class="inputbox-right licenseNo">{{}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">车架号</label>
                    <div class="inputbox-right frameNo">{{}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">发动机号</label>
                    <div class="inputbox-right engineNo">{{}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">初登日期号</label>
                    <div class="inputbox-right insertTime">{{}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">车辆型号</label>
                    <div class="inputbox-right brandName">{{}}</div>
                </div>
            </div>
            <div class="group">
                <div class="inputbox underline">
                    <label class="inputbox-left">姓名</label>
                    <div class="inputbox-right customerName">{{}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">手机号码</label>
                    <div class="inputbox-right mobile">{{}}</div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">证件号</label>
                    <div class="inputbox-right idcard">{{}}</div>
                </div>
                <div class="inputbox underline">
                    <div class="box-flex-1 padding8">
                        <p>家庭住址</p>
                        <small class="contactAddress float-right">{{}}</small>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="inputbox underline shangyexian">
                    <label class="inputbox-left"><span class="mark-info">商业险保单号</span></label>
                    <div class="inputbox-right card box-flex-1">
                        <p class="policyNo"></p>
                        <small class="nowrap comName"></small>
                    </div>
                </div>
                <div class="inputbox underline shangyexian">
                    <label class="inputbox-left">起保日期</label>
                    <div class="inputbox-right startDate">{{}}</div>
                </div>
                <div class="inputbox underline shangyexian">
                    <label class="inputbox-left">终保日期</label>
                    <div class="inputbox-right endDate">{{}}</div>
                </div>
                <div class="inputbox underline shangyexian">
                    <label class="inputbox-left">保费</label>
                    <div class="inputbox-right sumPremium">{{}}</div>
                </div>
            </div>
            <div class="group">
                <div class="inputbox underline jiaoqiangxian">
                    <label class="inputbox-left"><span class="mark-warn">交强险保单号</span></label>
                    <div class="inputbox-right card box-flex-1">
                        <p class="policyNo"></p>
                        <small class="nowrap comName"></small>
                    </div>
                </div>
                <div class="inputbox underline jiaoqiangxian">
                    <label class="inputbox-left">起保日期</label>
                    <div class="inputbox-right startDate"></div>
                </div>
                <div class="inputbox underline jiaoqiangxian">
                    <label class="inputbox-left">终保日期</label>
                    <div class="inputbox-right endDate"></div>
                </div>
                <div class="inputbox underline jiaoqiangxian">
                    <label class="inputbox-left">保费</label>
                    <div class="inputbox-right sumPremium"></div>
                </div>
            </div>
            <div class="group">
                <div class="inputbox underline">
                    <label class="inputbox-left">出险次数</label>
                    <div class="inputbox-right count"></div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">已决金额</label>
                    <div class="inputbox-right sumPaid"></div>
                </div>
                <div class="inputbox underline">
                    <label class="inputbox-left">未决金额</label>
                    <div class="inputbox-right sumEstiPaid"></div>
                </div>
            </div>
            <div class="group">
                <div class="inputbox underline">
                    <div class="box-flex-1 padding8">
                        <p><img class="address" src="../assets/gps.png"> 信息地址收集</p>
                        <small class="address  float-right"></small>
                    </div>
                </div>
            </div>
            <div class="zaibao">
                <button class="block checkYes" v-on:click="checkYes">登记</button>
            </div>
        </article>
    </section>
</template>
<script>
    export default{
        methods:{
            checkYes:function(){
                $.post("${ctx}/checkYes",param,function(data){
                     new Alert("登记成功！",{
                          "onClickOk":function(e){
                              wx.closeWindow();
                          }
                        }).show();
                });
            }
        },
    }
    
</script>
<style scoped>
      html{height: 100%;}
      body{
        margin:0;
        padding:0;
      }
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
        padding-top: 45px;
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
       .address{
        height: 20px;
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