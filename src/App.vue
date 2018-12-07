<template>
  <div class="page-group">
    <div class="page page-current">
      <!-- 工具栏 -->
      <nav class="bar bar-tab">
        <a class="tab-item external active" href="#">
          <span class="icon icon-home"></span>
          <span class="tab-label"><router-link to="/">首页</router-link></span>
        </a>
        <a class="tab-item external" href="#">
          <span class="icon icon-star"></span>
          <span class="tab-label"><router-link to="/new_tuany">新人</router-link></span>
        </a>
        <a class="tab-item external" href="#">
          <span class="icon icon-friends"></span>
          <span class="tab-label"><router-link to="/develop_turany">发展</router-link></span>
        </a>
        <a class="tab-item external" href="#">
          <span class="icon icon-emoji"></span>
          <span class="tab-label"><router-link to="/excellent_tuany">推优</router-link></span>
        </a>
        <a class="tab-item external" href="#">
          <span class="icon icon-me"></span>
          <span class="tab-label"><router-link to="/me">个人中心</router-link></span>
        </a>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
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
  margin-top: 60px;
}
</style>
