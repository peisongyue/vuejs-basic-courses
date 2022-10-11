<template>
  <div class="className">
    <h2>数据获取</h2>
    <div v-show="loading">Loading...</div>
    <div v-show="error">error...</div>
    <div v-show="!loading">
      <p>title: {{ post.title }}</p>
      <p>body: {{ post.body }}</p>
    </div>
  </div>
</template>
<script>
import { getData } from "../config/getPost";
export default {
  name: "className",
  components: {},
  props: {},
  data() {
    return {
      loading: false,
      error: false,
      post: {},
    };
  },
  watch: {
    // $route: "fetchData",
  },
  computed: {},
  created() {
    // this.fetchData();
  },
  mounted() {},
  methods: {
    fetchData() {
      this.loading = true;
      getData(this.$route.params.id, false)
        .then((res) => {
          this.post = res;
          this.loading = false;
        })
        .catch(() => {
          this.error = true;
          this.loading = true;
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fetchData(to.params.id, false);
    });
  },
  beforeRouteUpdate(to, from, next) {
    next()
    this.fetchData(to.params.id, false)
  },
};
</script>
<style>
</style>
