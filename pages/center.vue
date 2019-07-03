<template>
  <div class="personal">
    <header-component />
    <div class="personal-main">
      <aside-component class="mr16" />
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key"/>
      </transition>
    </div>
  </div>
</template>

<script>
import headerComponent from "@/components/center/header.vue";
import asideComponent from "@/components/center/aside.vue";

export default {
  name: 'personal',
  components:{
    headerComponent, asideComponent
  },
  data() {
    return {

    }
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.personal {
  width: 1180px;
  margin: 0 auto;
  margin-top: 20px;
  .personal-main {
    margin-top: 14px;
    margin-bottom: 60px;
    display: flex;
  }
}
</style>

