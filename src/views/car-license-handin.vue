<template>
	   <section id="chepai" >
        <header>
            <div class="titlebar">
                <h1>
                <router-link class="backoff" to='/index'>&lt;</router-link>车牌号查询
                </h1>
            </div>
        </header>
        <article>
            <div class="query">
                <input class="center-block" type="text" id="chepai_input" v-model="chepaiData" placeholder="请输入车牌号">
                <button class="center-block" id="chepai_query" @click="chepai_query">查询</button>
            </div>
            <div class="box  text-center">
                <router-link class="turn-car" to="/carframe"  style="color: #FFF;">通过车架号查询</router-link>
            </div>
        </article>
    </section>
</template>



<script>
  import wx from 'weixin-js-sdk'
  import "../../static/jquery-2.1.4.js"
  import "../../static/jquery-weui.min.css"
  import "../../static/jquery-weui.min.js"
  import "../../static/weui.min.css"
  import store from '../vuex/store';
  export default{
   data:function(){
    return{
        chepaiData:store.state.data,
        param:''
    }
   },
    methods:{
        chepai_query:function(){
                this.param=store.state.param;
                if(this.chepaiData){
                    // loading.show();
                    this.param.licenseNo=this.chepaiData;
                    this.param.frameNo="";
                    $.get("${ctx}/query",this.param,function(data){
                        // loading.hide();
                        if(data){
                            if(data.isPicc){
                                this.$router.push('/carzaibao');
                            }else{
                                this.$router.push('/notzaibao');
                            }
                            store.state.carinfo=data;//fillData(data);
                        }else{
                            store.state.hascar=true,
                            this.$router.push('/nocar');//openPage("#info_add");
                        }
                    })
                }else{
                    $.alert('请输入车牌号','');
                }
            },
    },
    computed:{

    }
 }

</script>


<style scoped>
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
            margin-top: 0px;
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
            text-transform: uppercase;
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