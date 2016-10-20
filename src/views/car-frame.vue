<template>
	<section id="chejia">
        <header>
            <div class="titlebar">
                <h1> 
                     <router-link class="backoff" to='/index'>&lt;</router-link>
                    车架号识别结果
                </h1>
            </div>
        </header>
        <article>
            <div class="query">
                <input type="text" id="chejia_input" v-modle="chejia"/>
                <button id="chejia_query" @click="chejia_query">查询</button>
            </div>
            <div class="box box-center">
                <router-link to="/carlicense"  class="turn-car" style="color: #FFF;">通过车牌号查询</router-link>
            </div>
        </article>
    </section>
</template>
<script>
	export default{
        props:["ok"],
        data:function(){
            return {
                chejia:''
            }
        },
        methods:{
            chejia_query:function(){
                if(this.chejia){
                    loading.show();
                    param.isCamera=false;
                    param.frameNo=this.chejia;
                    param.licenseNo="";
                    $.get("${ctx}/query",param,function(data){
                        loading.hide();
                        if(data){
                            if(data.isPicc){
                                openPage("#cars_zaibao");
                            }else{
                                openPage("#cars_notzaibao");
                            }
                            fillData(data);
                        }else{
                            $(".no_chejia_div").show();
                            $(".no_chepai_div").hide();
                            $("#no_chejia_input").val(chejia);
                            openPage("#info_add");
                        }
                    });
                }else{
                    // new Alert("请输入车架号").show();
                }
            },
        }
    }
</script>
<style >
    html{height: 100%}
    header,h1,div{
        padding:0;
        margin:0;}
    body {
        padding:0;
        margin:0;
        width:auto;
        background-color: #ffc056;
    }
    #chejia .titlebar{
        width:100%;
        margin-top: 0;
    }
    #chejia .titlebar .backoff{
        float: left;
        text-decoration: none;
        color:#30A29E;
        font-size:32px;
        font-weight: normal;
        margin-left: 10px;
    }
    #chejia .titlebar h1{
        text-align: center;
        height:44px;
        line-height:44px;
        color:#fff;
        font-size:17px;
        font-weight: normal;
        background-color:#393a3f;
    }
    #chejia #chejia_input{
        display:block;
        margin: 50% 5% 10% 5%;
        width:90%;
        height:60px;
        font-size:30px;
        text-align: center;
        color:#666;
        border: 1px solid gray;
    }
    #chejia #chejia_query{
        display:block;
        width: 70%;;
        height:70px;
        margin:10% 15% 10% 15%;
        border:2px solid #fff;
        border-radius:15px;
        background-color: #ffc056;
        font-size:24px;
        color:#fff;
    }
    #chejia .turn-car{
        display: block;
        margin-right: auto;
        margin-left:auto;
        text-align: center;
        font-size:18px;
        text-decoration: none;
        cursor: pointer;
    }

</style>
