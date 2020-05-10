<template>
  <div id="app">
      <!-- <transition name="slide" mode="out-in"> -->
        <router-view/>
      <!-- </transition> -->
      
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorlddddddd
  },
  data() {
    return {
      nav_list: [
        {
          name: '首页',
          path: '/home'
        },
        {
          name: '个人中心',
          path: '/me'
        }
      ]
    }
  },
  created(){
    console.log(1234567890, this.$route)
  },  
  methods: {
    jumpPage(path) {
      let current_path = this.$route.path
      if(current_path === path) return 
      this.$router.push({path})
      
    }
  }
}
</script>

<style scoped lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* width: 100%; */
  height: 100%;
  overflow-x: hidden;
}
.slide-leave-active{
  opacity: 0;
  transform: translateX(100px);
  transition: all 1.5s;
}

.slide-enter{
  transform: translateX(-100px);
  opacity: 0;
}
.slide-enter-active{
  transition: all 2s;
}
</style>
