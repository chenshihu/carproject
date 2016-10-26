<template>
	<section id="info_add" >
        <header>
            <div class="titlebar">
                <a href="javascript:back()"> <i class="icon icon-arrowleft"></i>
                </a>
                <h1><button class="backoff" @click='back'>&lt;</button>我司查无信息车辆</h1>
            </div>
        </header>
        <article class="info_add">
            <div class="no_chepai_div" v-if="hascar">
                <label class="tips" style="color: #e93737">查无此车牌号信息</label> 
                <input class='checkbox' type="text" id="no_chepai_input" readonly="readonly">
            </div>
            <div class="no_chejia_div" v-if="!hascar">
                <label class="tips" style="color: #e93737">查无此车架号信息</label> 
                <input class='checkbox' type="text" id="no_chejia_input"
                                                                      readonly="readonly">
            </div>
            <label class="address"><img src="../assets/gps.png">{{address}}</label>
            <button id="checkNo" v-on:click="login">登记</button>
        </article>
    </section>
</template>
<script>
    import wx from 'weixin-js-sdk'
    import "../../static/jquery-2.1.4.js"
    import "../../static/jquery-weui.min.css"
    import "../../static/jquery-weui.min.js"
    import "../../static/weui.min.css"
    import store from '../vuex/store'
    export default{
        data:function(){
            return{
            hascar:store.state.hascar,
            param:'',
            address:store.state.address
        }
        },
        methods:{
            login:function(){
                this.param=store.state.param;
                $.post("${ctx}/checkNo",this.param,function(data){
                    $.alert('登记成功！',function(){
                        wx.closeWindow();
                    })
                });
            },
            back:function(){
                this.$router.go(-1);
            }

        }
    }
</script>
        
<style scoped>
     .titlebar .backoff{
            float: left;
            text-decoration: none;
            color:#30A29E;
            font-size:32px;
            font-weight: normal;
            margin-left: 10px;
        }
    .titlebar h1{
        width:100%;
        height:44px;
        color:#fff;
        background-color: #2A2E36;
        font-size:17px;
        text-align: center;
        line-height: 44px;
        margin-top: -25px;
    }
   .info_add .tips{
        display: block;
        font-size: 20px;
        margin:15% 0 0 0;
        text-align: center;
    }
    .address img{
        height: 20px;
        display:block;
        margin:15% auto 0 auto;  
    }
    .checkbox{
        display:block;
        margin:5% 4% 0 4%;
        width:90%;
        height:70px;
        font-size:30px;
        color: #666;
        text-align: center;
    }
    #checkNo{
        display: block;
        background-color: #ffc056;
        width: 70%;
        height: 70px;
        font-size:24px;
        color: #fff;
        border:2px solid #fff;
        border-radius: 15px;
        margin-right: auto;
        margin-left: auto;
        margin-top:10%;

        }
</style>