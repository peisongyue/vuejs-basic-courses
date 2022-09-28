<template>
  <div class="className">
    DongTaiRouterChange
    <div>
      <h3>动态路由匹配</h3>
      <p>/dongTaiRouterChange/:id</p>
      {{ this.$route.params }}
      <p>/dongTaiRouterChange/:id/post/:post_id</p>
      {{ this.$route.params }}
      <p>/dongTaiRouterChange/:id/post/:post_id?username=:username</p>
      {{ this.$route.params }} {{ this.$route.query }}
      <h4>响应路由参数的变化</h4>
      <router-link to="/dongTaiRouterChange/foo">To Foo</router-link>
      <router-link to="/dongTaiRouterChange/bar">To Bar</router-link>
      <p>{{ this.$route.params.id }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "DongTaiRouterChange",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  // eslint-disable-next-line no-unused-vars
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next();
  },
};
</script>
<style>
</style>
