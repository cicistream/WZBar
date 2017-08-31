<template>
	<div class="waiting" >
        <div :class="{'black':takeIt}"></div>
        <div>
    		<div class="gameInfo">
    			<li class="gameDetail">
    				<span class="iconfont triIcon">&#xe600;</span> 
    				<span class="triInfo">微信区</span>
    			</li>
    			<li class="gameDetail">
    				<span class="iconfont triIcon">&#xe63f;</span>
    				<span class="triInfo">荣耀黄金</span> 
    			</li>
    			<li class="gameDetail">
    				<span class="iconfont triIcon">&#xe625;</span> 
    				<span class="triInfo">匹配赛</span> 
    			</li>
    			<li class="gameDetail">
    				<span class="iconfont triIcon">&#xe664;</span> 
    				<span class="triInfo">1局</span> 
    			</li>
    		</div>
    		<div class="waitInfo">
    			<div class="waitTime">
    				<p class="gameNum">G523896953</p>
    				<p class="countDown">
    					<span class="TimeM">{{timeM}}</span>
    					<span class="TimeS">{{timeS}}</span>
    				</p>
    				<p class="userId">南国小木</p>
    				<p class="gamePay">￥12</p>
    				<div class="wait-bottom">
    					<span>带飞分段：荣耀黄金</span>
    					<span class="area-btn">微信区</span>
    				</div> 
    			</div>
    			<button class="cancel" @click="cancelGame">取消订单并退款</button>
    		</div>
    		<div class="moreInfo">
    			<p class="more">长按扫码关注<span class="name">【KH电竞】</span>获得实时消息</p>
    			<div style="display: flex; justify-content: space-around; padding: 0 0.3rem;">
    				<img src="../src/assets/QR.png">
    				<img src="../src/assets/fingerPrint.png">
    			</div>
    		</div>
        </div>
        <div class="takeOrder" :class="{'show':takeIt}">
            <p class="takeTitle">大神接单啦</p>
            <p class="join">扫描下方二维码加入战斗</p>
            <img class="QR-img" src="../src/assets/game-QR.png">
        </div>
	</div>
</template>
<script>
	export default{
        mounted:function(){ 
            setInterval(()=>{
                this.timeM  = this.single(sessionStorage.timeM) ;
                this.timeS = this.single(sessionStorage.timeS) ;
                console.log(this.timeS)
            },1000)
        },
        methods:{
            cancelGame: function(){
                sessionStorage.take = false;
            },
            single: function(num){
                return (Array(2).join('0') + num).slice(-2);
            }
        },
		data(){
			return{
                takeIt: false,
				timeM:"00",
                timeS:"00"
			}
		}
	}
</script>
<style>
    .gameInfo{
    	color: #876af7;
    	font-size: 0.34rem;
    	display: -webkit-flex;
    	display: flex;
    	flex-wrap: wrap;
    	justify-content: space-between;
    	margin: 0.21rem 0.65rem 0.67rem;
    }
	.gameDetail{
		width: 2.87rem;
		height: 0.71rem;
		line-height: 0.71rem;
		background:0 url(assets/btn-bg.png) no-repeat;
		background-size: 100% 100%;
		margin-bottom: 0.2rem;
		position: relative;
		text-align: right;
	}
    .triIcon{
       display: inline-block;
       width: 0.65rem; 
       color: #fff;
       position: absolute;
       left:0;
    }
    .triInfo{
        font-size: 0.3rem;
    	display: inline-block;
    	width: 2.26rem;
    	text-align: center;
    }
    .waitTime{
    	width: 6.7rem;
    	height: 3rem;
    	margin: auto;
    	background:0 url(assets/wait-bg.png) no-repeat;
    	background-size: 100% 100%;
    	position: relative;
    }
    .gameNum{
    	color: #fff;
    	font-size: 0.26rem;
    	padding-top: 0.05rem;
    }
    .countDown{
    	color: #fff;
    	font-size: 0.5rem;
    	position: absolute;
    	top: 0.64rem;
    	left: 2.4rem;
    }
    .TimeM{
        margin-right: 0.43rem;
    }
    .TimeM,
    .TimeS{
        display: inline-block;
        width: 0.53rem;
    }
    .userId{
    	font-size: 0.3rem;
    	color: #000;
    	position: absolute;
    	top: 1.4rem;
    	left: 0.8rem;
    }
    .gamePay{
    	color: #ff6d01;
    	font-size: 0.46rem;
    	font-weight: bold;
    	position: absolute;
    	right: 0.3rem;
    	top: 1.6rem;
    }
    .wait-bottom{
    	font-size: 0.26rem;
    	color: #636363;
    	position: absolute;
    	bottom: 0.13rem;
    	left: 0.3rem;
    }
    .area-btn{
    	margin-left: 3.1rem;
    	color: #fff;
    }
    .cancel{
    	font-size: 0.3rem;
    	color: #979797;
    	background-color: #fff;
    	width: 6.7rem;
    	line-height: 0.65rem;
    	border-radius: 0.1rem;
    	position: relative;
    	top: -0.47rem;
    }
    .moreInfo .more{
    	font-size: 0.3rem;
    	color: #9c8dd6;
    }
    .moreInfo .name{
    	color: #bd72ec;
    }
    .moreInfo img{
    	width: 2.4rem;
    	height: 2.4rem;
    	margin-top: 0.4rem;
    }
    .takeOrder{
        display: none;
        width: 6.7rem;
        height: 7.2rem;
        background: url(assets/alert.png) no-repeat;
        background-size: 100%;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        top: 25%;
    }
    .takeTitle{
        margin-top: 2.1rem;
        font-size: 0.32rem;
        color: #939393;
        line-height: 0.8rem;
        z-index: 2;
    }
    .join{
        font-size: 0.28rem;
        color: #c1c1c1;
    }
    .QR-img{
        width: 3.1rem;
        height: 3.1rem;
        margin: 0.3rem auto;
    }
</style>