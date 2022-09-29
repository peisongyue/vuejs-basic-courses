<template>
  <div class="className">
    <h3>default</h3>
    <button @click="go">back</button>
  </div>
</template>
<script>
export default {
  name: "default",
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
    go() {
      this.$router.go(-1);
    },
  },
};
</script>
<style>
</style>
