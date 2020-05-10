<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // computed: mapState({
  //     type: state => state.type,
  //     number: 'number',
  //     computedAge(state) {
  //       return state.age + this.number 
  //     }
  //   }),
  computed: {
    ...mapState({
      type: state => state.type,
      number: 'number',
      computedAge(state) {
        return state.age + this.number 
      }
    }),
    ...mapState('user', {
      username: state => state.username
    })
  },
  created(){
    // this.$store.state.number = 2;
    this.$store.commit('user/updateUsername', '赵璐思')
    console.log("-1-1-1-1-1-1",this.$store.getters['user/getPwd'], this.username)
    console.log("0000000000000", this.type, this.number, this.computedAge,this.$store.getters.getType,this.$store.getters.getAge())
    console.log(1111111111111,this.$store.state)
    this.$store.commit('changeType', 'programmer')
    console.log(2222222222222,this.$store.state)
    this.$store.dispatch('changeType', 'dispatch')
    console.log(3333333333333,this.$store.state)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
