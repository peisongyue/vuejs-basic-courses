<template>
  <div class="className">
    <h3>QiTaoCode</h3>
    <h4>嵌套路由</h4>
    <button @click="ToBar">To Bar</button>
    <button @click="ToFoo">To Foo</button>
    <router-view></router-view>
    <h4>编程式导航</h4>
    <button @click="ToQibu">To Qibu</button>
    <button @click="ToDongTaiRouterChange">To dongTaiRouterChange</button>
  </div>
</template>
<script>
export default {
  name: "QiTaoCode",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    ToBar() {
      this.$router.push({ path: "/qiTaoCode/bar" });
    },
    ToFoo() {
      this.$router.push({ path: "/qiTaoCode/foo" });
    },
    ToQibu() {
      this.$router.push({ path: "/qibu" });
    },
    ToDongTaiRouterChange() {
      // this.$router.push({ path: "/dongTaiRouterChange/123" });
      this.$router.push({
        name: "dongTaiRouterChange",
        params: { id: 321 },
        query: { name: "name" },
      });
    },
  },
};
</script>
<style>
</style>
