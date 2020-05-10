<template>
<!-- <transition name="slide" mode="out-in"> -->
    <div class="container">
        
            <div :style="{ background: '#000' }">home</div>
        
    </div>
<!-- </transition> -->
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  beforeCreate() {
    console.log("beforeCreate----home", this.data);
  },
  created() {
    console.log("created----home", this.data);
  },
  beforeMount() {
    console.log("beforeMount----home", this.data);
  },
  mounted() {
    console.log("mounted----home", this.data);
  },
  beforeUpdate() {
    console.log("beforeUpdate----home", this.data);
  },
  updated() {
    console.log("updated----home", this.data);
  },
  beforeDestroy() {
    console.log("beforeDestroy----home", this.data);
  },
  destroyed() {
    console.log("destroyed----home", this.data);
  },
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
.container {
  color: #fff;
  height: 100%;
  background: #000;
}

</style>
