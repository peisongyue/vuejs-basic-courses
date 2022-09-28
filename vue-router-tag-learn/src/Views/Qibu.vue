<template>
  <div>
    qibu
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
