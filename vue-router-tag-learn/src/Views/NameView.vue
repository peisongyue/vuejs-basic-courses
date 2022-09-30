<template>
  <div class="className">
    <h2>命名路由 & 命名视图</h2>
    <p>path:/nameView/children</p>
    <router-link to="/nameView/children">to children</router-link>

    <h3>嵌套命名视图</h3>
    <router-link to="/nameView/settings">to settings</router-link>
    <router-view></router-view>
    <router-view name="foo"></router-view>
    <router-view name="bar"></router-view>

    <h3>组件内的守卫</h3>
    <p>{{ name + path }}</p>
  </div>
</template>
<script>
export default {
  name: "NameView",
  components: {},
  props: {},
  data() {
    return {
      name: null,
      path: null,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  beforeRouteEnter(to, from, next) {
    console.log("router component beforeRouteEnter");
    console.log("beforeRouteEnter", to, from);
    next((vm) => {
      console.log("beforeRouteEnter", vm.$route.path);
      vm.name = "beforeRouteEnter";
      vm.path = vm.$route.path;
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("router component beforeRouteUpdate");
    console.log("beforeRouteUpdate", to, from);
    this.name = "beforeRouteUpdate";
    this.path = this.$route.path;
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("router component beforeRouteLeave");
    console.log("beforeRouteLeave", to, from);
    this.name = "beforeRouteLeave";
    this.path = this.$route.path;
    next();
  },
};
</script>
<style>
</style>
