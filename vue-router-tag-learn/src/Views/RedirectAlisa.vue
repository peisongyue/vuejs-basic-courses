<template>
  <div class="className">
    <h2>RedirectAlisa</h2>
    <h3>重定向</h3>
    <p>" path: '/redirectAlisa', redirect: '/qibu' "</p>
    <p>" path: '/redirectAlisa', redirect: { name: 'qibu' } "</p>
    // 方法接收 目标路由 作为参数 <br />// return 重定向的 字符串路径/路径对象
    <p>" path: '/redirectAlisa', redirect: to => { return 'qibu' } "</p>
    <h3>别名</h3>
    <p>" path: '/redirectAlisa', alias: '/alisaRedirect'"</p>
  </div>
</template>
<script>
export default {
  name: "RedirectAlisa",
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
