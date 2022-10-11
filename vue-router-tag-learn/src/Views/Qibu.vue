<template>
  <div>
    qibu
    <!-- <router-link to="/qibu/foo/123" tag="div">Foo</router-link> -->
    <h4>tag 属性 将router-link 伪装成对应的标签</h4>
    <router-link to="/qibu/foo/123">Foo</router-link>
    <router-link to="/qibu/bar/321">Bar</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Qibu",
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
  created() {
    console.log(this.$route.params.username);
  },
  mounted() {},
  methods: {},
};
</script>
<style>
</style>
