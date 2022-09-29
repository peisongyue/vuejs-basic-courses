<template>
  <div class="className">
    <h4>UserProfilePreview</h4>
    <button @click="go">back</button>
  </div>
</template>
<script>
export default {
  name: "UserProfilePreview",
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
