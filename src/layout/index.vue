<template>
  <div class="container">
    <el-container>
      <el-aside>
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
            <transition name="slide" mode="out-in">
                <router-view />
            </transition>
            
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Sidebar from "./components/sidebar.vue";

export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
.container {
  height: 100%;
}
.slide-leave-active {
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s;
}

.slide-enter {
  transform: translateX(-100px);
  opacity: 0;
}
.slide-enter-active {
  transition: all 1s;
}

</style>
