<template>
	<div class="home bg">
		<div :class="{'black':newOrder}" @click="cancelOrder"></div>
		<div class="chooseArea">
		    <p class="homeTitle">填写开黑信息</p>
			<div class="part part1">
				<p class="P-title"><span class="iconfont">&#xe600;</span> &nbsp所在服务区</p>
				<div class="choose flex">
					<p class="C-item" v-for="(area,index) in map" :class="{'itemActive':Area==index}" @click="choose(0,index)">{{area}}</p>
					<p class="C-item" style="visibility: hidden;"> </p>
				</div>
			</div>
			<p class="line"></p>
			<div class="part part2">
				<p class="P-title"><span class="iconfont">&#xe63f;</span> &nbsp开黑段位</p>
				<div class="choose">
					<p class="C-item" v-for="(state,index) in ranking"  :class="{'itemActive':State==index}" @click="choose(1,index)">{{state}}</p>
					<p class="C-item" style="visibility: hidden;"> </p>
					<p class="C-item" style="visibility: hidden;"> </p>
				</div>
			</div>
			<p class="line"></p>
			<div class="part">
				<p class="P-title"><span class="iconfont">&#xe625;</span> &nbsp开黑模式</p>
				<div class="choose">
					<p class="C-item" v-for="(pattern,index) in list" :class="{'itemActive':Pattern==index}" @click="choose(2,index)">{{pattern}}</p>
					<p class="C-item" style="visibility: hidden;"> </p>
				</div>
			</div>
			<p class="line"></p>
			<div class="part part4">
				<p class="P-title"><span class="iconfont">&#xe664;</span> &nbsp期望开黑局数</p>
				<div class="gameTimes">
					<span class="iconfont numChange" id="cut" style="transform:rotateY(180deg);" @click="changeTimes(-1)">&#xe633;</span>
					<span style="font-size: 0.25rem;">&nbsp {{Times}} 局 &nbsp</span>
					<span class="iconfont numChange" @click="changeTimes(1)">&#xe633;</span>
				</div>
			</div>
			<p class="ok" @click="createOrder">我要下单</p>
		</div>
		<div class="newOrder" :class="{'show':newOrder}" >
			<p class="title">支付信息</p>
			<div class="orderInfo">
				<img class="id-bg" src="../src/assets/id-bg.png">
				<p class="gameNum">G523896953</p>
				<div class="orderDetail flex">
					<div class="orderPart">
						<span class="part1">服务器</span>
						<span class="part2">{{map[Area]}}</span>
					</div>
					<div class="orderPart">
						<span class="part1">开黑段位</span>
						<span class="part2">{{ranking[State]}}</span>
					</div>
					<div class="orderPart">
						<span class="part1">开黑模式</span>
						<span class="part2">{{list[Pattern]}}</span>
					</div>
					<div class="orderPart">
						<span class="part1">开黑局数</span>
						<span class="part2">{{Times}}局</span>
					</div>
				</div>
				<p class="orderFee flex"><span style="color: #000;">合计</span><span>￥50</span></p>
				<div class="payWay flex">
					<p><span class="iconfont" :class="{'active':way==0}" @click="chooseWay(0)">&#xe602;</span><br/>微信支付</p>
					<p><span class="iconfont" :class="{'active':way==1}" @click="chooseWay(1)">&#xe619;</span><br/>余额支付</p>
					<p id="gold"><span class="iconfont" :class="{'active':way==2}" @click="chooseWay(2)">&#xe647;</span><br/>金币支付</p>
				</div>
				<button class="sure itemActive">确认支付</button>
				<div style="text-align: left;margin-left: 0.2rem;margin-top: 0.1rem;">
					<input class="checkbox" type="checkbox" name="agree" checked="checked">
					<label class="agree">我已阅读并同意<span style="color: #00a7ff">《购买须知》</span></label>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		mouted:function(){
			var cutBtn = document.getElementById("cut");
            cutBtn.style.visibility = "hidden";
		},
		data(){
			return{
				newOrder: false,
				way:0,
				Area:0,
				State:0,
				Pattern:0,
				Times:1,
                map:["微信区","QQ区"],
                ranking:[ "最强王者","至尊星耀","永恒钻石","尊贵铂金","荣耀黄金","不屈白银","倔强青铜"],
                list:[ "排位赛","匹配赛"]
			}
		},
		methods:{
			choose:function(num,index){
				var self = this;
                switch(num){
                	case 0:
                	self.Area = index;break;
                	case 1:
                	self.State = index;break;
                	case 2:
                	self.Pattern = index;break;
                }
			},
			changeTimes: function(num){
				var self = this;
                   if(self.Times>1)
                   {
                   	self.Times+=num;
                   }
                   else if(num>0){
                   	self.Times+=num;
                   }
			},
			chooseWay: function(num){
                this.way = num ;
			},
			createOrder: function(){
				this.newOrder = true;
			},
			cancelOrder: function(){
				this.newOrder = false;

			}
		}
	}
</script>
<style type="text/css" scoped>
.homeTitle{
	font-size: 0.28rem;
	font-weight: bold;
	line-height: 0.6rem;
	width: 2.2rem;
	background-color: #fff;
	border-radius: 0.3rem;
	position: absolute;
	top: -0.32rem;
	left: 2.25rem;
}
.chooseArea{
	font-size: 0.32rem;
	width: 6.7rem;
	height: 10.3rem;
	margin: auto;
	position: relative;
	top: 1.9rem;
	background-color: #fff;
	padding: 0.32rem 0.28rem;
	border-radius: 0.1rem;
}
.part{
	padding: 0.3rem 0;
	text-align: left;
}
.P-title{
	line-height: 0.5rem;
	display: inline-block;
}
.P-title .iconfont{
	font-size:0.3rem
}
.choose{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-content: flex-start;
}
.C-item{
	width: 1.84rem;
	height: 0.67rem;
	line-height: 0.67rem;
	text-align: center;
	border: 1px solid #000;
	border-radius: 0.1rem;
	margin-top: 0.24rem;
}
.numChange{
	display: inline-block;
	font-size: 0.25rem;
	font-weight: bold;
}
.gameTimes{
	display: inline-block;
	margin-left: 1.57rem;
}
.ok{
	color: #fff;
	background-color: #876af7;
	width: 100%;
	line-height: 0.75rem;
	border-radius: 0.1rem;
}
.newOrder{
	display: none;
	font-size: 0.3rem;
	color: #9b9a9a;
	width: 6.31rem;
	height: 6.4rem;
	position: fixed;
	top: 18%;
	left: 50%;
	transform: translateX(-50%);
	background-color: #fff;
	border-radius: 0.2rem;
	padding: 0 0.39rem;
	z-index: 5;
}
.newOrder .gameNum{
	font-size: 0.18rem;
	position: absolute;
	color: #fff;
	top: 1rem;
	left: 2.6rem;
}
.id-bg{
	width: 1.56rem;
	margin-bottom: 0.1rem;
}
.newOrder .orderDetail{
	font-size: 0.22rem;
	flex-wrap: wrap;
	border-bottom: 2px solid #81d9fa;
}
.newOrder .orderPart{
	width: 2.6rem;
	text-align: left;
	margin-bottom: 0.25rem;
}
.orderDetail .part1{
	display: inline-block;
	text-align: center;
	width: 1.1rem;
	line-height: 0.32rem;
	background-color: #d2d2d2;
	color: #fff;
	border-radius: 0.04rem;
	margin-right: 0.32rem;
}
.orderFee{
	font-size: 0.27rem;
	line-height: 0.7rem;
	padding:0 0.2rem;
	border-bottom: 2px solid #ccc;
}
.payWay{
	font-size: 0.22rem;
    padding:0.4rem 0.2rem;
}
.payWay .iconfont{
	font-size: 0.6rem;
}
.payWay .iconfont.active{
	color: #00cb00;
}
.payWay #gold .iconfont.active{
	color: #fdbb3d;
}
.checkbox{
	zoom:2.4;
}
.agree{
	vertical-align: middle;
	font-size: 0.2rem;
}
.show{
	display: block;
}
</style>