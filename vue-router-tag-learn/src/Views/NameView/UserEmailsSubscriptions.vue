<template>
  <div class="className">
    <h4>UserEmailsSubscriptions</h4>
    <button @click="go">back</button>
  </div>
</template>
<script>
export default {
  name: "UserEmailsSubscriptions",
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
