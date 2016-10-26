<template>
	<section id="chejia">
        <header>
            <div class="titlebar">
                <h1> 
                     <router-link class="backoff" to='/index'>&lt;</router-link>
                    车架号查询
                </h1>
            </div>
        </header>
        <article>
            <div class="query">
                <input type="text" id="chejia_input" v-model="chejia" placeholder='请输入车架号'/>
                <button id="chejia_query" @click="chejia_query">查询</button>
            </div>
            <div class="box box-center">
                <router-link to="/carname"  class="turn-car" style="color: #FFF;">通过车牌号查询</router-link>
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
            return {
                chejia:'',
                param:''
            }
        },
        methods:{
            chejia_query:function(){
                this.param=store.state.param;
                if(this.chejia){
                    $.showLoading();
                    this.param.isCamera=false;
                    this.param.frameNo=this.chejia;
                    this.param.licenseNo="";
                    $.get("${ctx}/query",this.param,function(data){
                        $.hideLoading();
                        if(data){
                            if(data.isPicc){
                                this.$router.push('/carzaibao');
                            }else{
                                this.$router.push('/notzaibao');
                            }
                            store.state.carinfo=data;
                        }else{
                            store.state.hascar=false,
                            this.$router.push('/nocar');
                        }
                    });
                }else{
                    $.alert("请输入车架号",'');
                }
            },
        }
    }
</script>
<style scoped>
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
        text-transform: uppercase;
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
