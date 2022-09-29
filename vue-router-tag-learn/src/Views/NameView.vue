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
  </div>
</template>
<script>
export default {
  name: "NameView",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style>
</style>
