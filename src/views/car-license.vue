<template>
	   <section id="chepai" >
        <header>
            <div class="titlebar">
                <h1>
                <a class="backoff"  v-on:click="childClick">&lt;</a>车牌号识别结果
                </h1>
            </div>
        </header>
        <article>
            <div class="query">
                <input class="center-block" type="text" id="chepai_input" v-modal="chepaiData">
                <button class="center-block" id="chepai_query" @click="chepai_query">查询</button>
            </div>
            <div class="box  text-center">
                <router-link class="turn-car" to="/carframe"  style="color: #FFF;">通过车架号查询</router-link>
            </div>
        </article>
    </section>
</template>



<script>
 export default{
   props:['chepaiData','param'],
   data:function(){
    return{
        ok:true,
    }
   },
    methods:{
        childClick: function () { 
                this.$emit("test", 'ok'); 
                }, 
        chepai_query:function(){
                console.log(this.param);
                if(this.chepaiData){
                    loading.show();
                    param.licenseNo=this.chepaiData;
                    param.frameNo="";
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
                            $(".no_chepai_div").show();
                            $(".no_chejia_div").hide();
                            $("#no_chepai_input").val(chepai);
                            openPage("#info_add");
                        }
                    })
                }else{
                    // new Alert("请输入车牌号").show();
                }
            },
            events: { 
                test: function () { 
                // console.log(test); 
                }, 
            }
    }
 }

</script>


<style >
        #chepai .titlebar{

            width:100%;
            margin-top:0px;
        }
        #chepai  .backoff{
            display: block;
            float: left;
            text-decoration: none;
            color:#30A29E;
            font-size:32px;
            font-weight: normal;
            margin-left: 10px;
        }
        #chepai .titlebar h1{
            text-align: center;
            height:44px;
            line-height:44px;
            color:#fff;
            font-size:17px;
            font-weight: normal;
            background-color:#393a3f;
        }
        #chepai #chepai_input{
            display:block;
            margin: 50% 5% 10% 5%;
            width:90%;
            height:60px;
            font-size:30px;
            text-align: center;
            color:#666;
            border: 1px solid gray;
        }
        #chepai #chepai_query{
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
        #chepai .turn-car{
             display: block;
            margin-right: auto;
            margin-left:auto;
            text-align: center;
            font-size:18px;
            text-decoration: none;
            cursor: pointer;
        }
</style>