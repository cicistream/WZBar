<template>
  <div id="app">
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import foot from './components/footer'
export default{
  components:{
    foot
  },
  beforeCreate:function(){
    var countDown = 300;
      setInterval(()=>{
          if(countDown==0){
             alert(0)
             sessionStorage.clear()
          }
          if (countDown>0) {
              countDown-=1;
          }
          sessionStorage.timeM =  parseInt(countDown/60);
          sessionStorage.timeS =  parseInt(countDown%60);
      },1000)
    },
   watch:{
      '$route':function(to,from){
          document.body.scrollTop = '0';
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #605352;
}
</style>
