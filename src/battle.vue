<template>
	<div class="end battle">
		<div class="end-part" v-for="game in battleGame">
			<p class="gameNum">{{game.gameNum}}</p>
			<p class="userId">{{game.id}}</p>
			<p class="gamePay">￥{{game.pay}}</p>
			<div class="wait-bottom">
				<span>带飞分段：{{game.state}}</span>
				<span class="area-btn">{{game.area}}</span>
			</div> 
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
                battleGame:[
                    {
                    	gameNum: "G523896953",
                        id: "南国小木",
                        pay: 12,
                        state: "荣耀黄金",
                        area: "微信区"
                    }
                ]
			}
		}
	}
</script>
<style type="text/css" scoped>
	.end-part{
		width: 6.7rem;
		height: 3.4rem;
		margin:0.6rem auto;
		background:0 url(assets/battle.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	.end{
    	padding-bottom: 0.5rem;
    }
	.end .gameNum{
		color: #f9e387;
	}
	.end .userId{
		color: #fff;
		top: 2.1rem;
		left: 1rem;
	}
	.end .gamePay{
		color: #f7e186;
		font-size: 0.6rem;
		top: 1.7rem;
		right: 0.44rem;
	}
	.end .wait-bottom{
		color: #644e2c;
		left: 0.65rem;
	}
	.end .area-btn{
		margin-left: 2.1rem;
		color: #31a7ff;
	}
</style>