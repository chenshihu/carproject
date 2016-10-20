<template>
	<section id="info_add" >
        <header>
            <div class="titlebar">
                <a href="javascript:back()"> <i class="icon icon-arrowleft"></i>
                </a>
                <h1><router-link class="backoff" to='/index'>&lt;</router-link>我司查无信息车辆</h1>
            </div>
        </header>
        <article class="info_add">
            <div class="no_chepai_div" style="display: none;">
                <label class="tips" style="color: #e93737">查无此车牌号信息</label> 
                <input calss='checkbox' type="text" id="no_chepai_input" readonly="readonly">
            </div>
            <div class="no_chejia_div" style="">
                <label class="tips" style="color: #e93737">查无此车架号信息</label> <input class='checkbox' type="text" id="no_chejia_input"
                                                                      readonly="readonly">
            </div>
            <label class="address"><img src="../assets/gps.png"></label>
            <button id="checkNo">登记</button>
        </article>
    </section>
</template>
<script></script>

<style scoped>
    header,h1{
        padding:0;
        margin:0;}
    body {
        padding:0;
        margin:0;
        width:auto;
        background-color: #ffc056;
    }
     .titlebar h1 .backoff{
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