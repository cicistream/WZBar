<template>
	<div class="order bg">
		<div class="kinds flex">
			<router-link to="waiting" class="kinds-btn">等候中</router-link>
			<router-link to='battle' class="kinds-btn">激战中</router-link>
			<router-link to="end" class="kinds-btn">已结束</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{

			}
		}
	}
</script>
<style type="text/css">
	.order{
		background-color: #251711;
	}
	.kinds{
		width: 88%;
		margin: auto;
	}
	.kinds .kinds-btn{
		font-size: 0.3rem;
		color: #301919;
		width: 1.72rem;
		line-height: 0.56rem;
		background-color: rgba(255,255,255,0.3);
		border-radius: 0.4rem;
		border: 3px solid rgba(255,255,255,0.5);
		margin-top: 0.78rem;
	}
</style>