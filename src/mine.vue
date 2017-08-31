<template>
	<div class="mine bg">
        <div :class="{'black':takeMoney}" @click="takeUp"></div>
		<div class="userInfo">
			<p class="userPic">
				<img src="../src/assets/user.png">
			</p>
			<p class="idNum">ID:wr123540</p>
			<p class="nickname">董小姐</p>
		</div>
		<div class="userMoney">
			<p class="money flex"><span class="iconfont">&#xe61f; 我的余额</span><span class="moneyNum">￥0<span class="deposit" @click="takeUp">提现</span></span></p>
			<p class="money flex"><span class="iconfont">&#xe843; 我的金币</span><span class="moneyNum">0</span></p>
		</div>
		<div class="Minemore">
            <div style="display: flex; justify-content: space-between;padding:0.5rem 0.4rem;">
                    <img src="../src/assets/QR.png">
                    <img src="../src/assets/FP2.png">
            </div>
		</div>
        <div class="takeMoney" :class="{'show':takeMoney}">
            <p class="title">申请提现</p>
            <div class="flex">
                <div class="part" @click="chooseWay(0)" :class="{'active':way==0}"><span class="iconfont wx">&#xe659;</span><br />微信钱包提现</div>
                <div class="part" @click="chooseWay(1)" :class="{'active':way==1}"><span class="iconfont zfb">&#xe624;</span><br />支付宝提现</div>
            </div>
            <span style="display:inline-block;position: relative;" :class="{'upbg':!showQR}">
                <input accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" class="upload" type="file" id="upload" @change="uploadImg">
                <div class="hidden" :class="{'show':showQR}"><img id="showQR"><br/><p class="reload">重新上传</p></div>
            </span>
            <input class="inputMoney" type="text" name="money" placeholder="请输入提现金额">
            <button class="sure itemActive">确认提现</button>
        </div>
	</div>
</template>
<script type="text/javascript">
	export default{
        data(){
            return{
                takeMoney: false,
                showQR: false,
                way:0
            }
        },
        methods:{
            takeUp:function(){
                this.takeMoney = !this.takeMoney;
            },
            chooseWay:function(num){
                this.way = num;
            },
            uploadImg :function(){
                var self = this;
                var r = new FileReader();
                var f = document.getElementById('upload').files[0];
                r.readAsDataURL(f);
                r.onload = (e)=>{
                    document.getElementById('showQR').src=e.target.result;
                    self.showQR = true;
                }
            }
            
        }
    }
</script>
<style type="text/css">
	.mine{
        font-size: 0.26rem;
        color: #fff; 
	}
    .userPic img{
    	width: 1.8rem;
    	height: 1.8rem;
    	border-radius: 999px;
    	padding: 1.16rem 0 0;
    	margin: auto;
    }
    .idNum{
    	letter-spacing:0.04rem;
    	display: inline-block;
    	line-height: 0.25rem;
    	background-color: #564591;
    	border-radius: 0.5rem;
    	padding: 0.1rem 0.2rem;
    	margin-bottom: 0.13rem;
    }
    .nickname{
    	margin-bottom: 0.45rem;
    }
    .money{
        font-size: 0.24rem;
    	line-height: 0.82rem;
    	border-top: 3px solid #7456d0;
    	padding:0 0.4rem;
    }
    .money .iconfont{
    	font-size: 0.26rem !important;
    }
    .moneyNum{
    	color: #eb7104;
    	font-weight: bold;
    	padding-right: 0.1rem;
    }
    .deposit{
    	color: #876af7;
    	padding: 0.05rem 0.1rem;
    	border: 2px solid #876af7;
    	border-radius: 0.02rem;
    	margin-left: 0.2rem;
    }
    .Minemore{
    	width: 6.7rem;
    	height: 3.9rem;
    	margin: 0.7rem auto;
    	background:0 url(assets/attention.png) no-repeat;
    	background-size: 100%;
    }
    .Minemore img{
       width: 2.4rem;
       height: 2.4rem;
       padding-top: 0.5rem;
    }
    .takeMoney{
        display: none;
        font-size: 0.3rem;
        color: #646464;
        width: 6.3rem;
        height: 8.3rem;
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        border-radius: 0.15rem;
        z-index: 5;
    }
    .takeMoney .title{
        border: 0;
    }
    .takeMoney .flex{
        padding: 0.2rem 0.6rem;
    }
    .takeMoney .iconfont{
        font-size: 0.75rem;
    }
    .takeMoney .part{
        font-size: 0.26rem;
        width: 2.2rem;
        height: 2rem;
        padding-top: 0.4rem;
    }
    .takeMoney .part.active{
        border:1px solid #876af7;
        border-radius: 0.1rem;
    }
    .takeMoney .active .wx{
        color: #00cb00;
    }
    .takeMoney .active .zfb{
        color: #00a7ff;
    }
    .inputMoney{
        font-size: 0.24rem;
        width: 4.8rem;
        line-height: 0.6rem;
        border: 1px solid #8a8a8a;
        border-radius: 0.1rem;
        padding-left: 0.3rem;
        margin: 0.15rem 0;
    }
    .inputMoney:focus{
        border-color: #8a8a8a !important;
        outline: 0;
        box-shadow:none;
    }
    .upload{
        opacity: 0;
        font-size: 0.28rem;
        width: 5.1rem;
        height: 2.6rem;
        margin-bottom: 0.2rem;
    }
    #showQR{
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 0.3rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .uploadInfo{
        width: 3rem;
        position: absolute;
        top: 2rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .upbg{
        background:0 url(assets/upload.png) no-repeat;
        background-size: 100%;
    }
    .reload{
        position: absolute;
        top: 1.8rem;
        left: 72%;
    }
</style>