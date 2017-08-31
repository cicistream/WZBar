<template>
    <div>
        <ul class="footer">
            <router-link to='/home' class="footNav" style="padding-top:0;" ><span class="iconfont" style="font-size: 0.5rem;">&#xe61f;</span><br/>吧台</router-link>
            <router-link to='/order' class="footNav"><span class="iconfont">&#xe623;</span><br/>订单</router-link>
            <router-link to='/mine' class="footNav"><span class="iconfont">&#xe63d;</span><br/>我的</router-link>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
