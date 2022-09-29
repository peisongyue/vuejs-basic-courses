<template>
  <div class="className">
    <h2>RouterProps</h2>
    <p>router params id : {{ id }}</p>
    <p>router query pp : {{ pp }}</p>
  </div>
</template>
<script>
export default {
  name: "RouterProps",
  components: {},
  props: ["id", "pp"],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    console.log("component", this.$route);
  },
  methods: {},
};
</script>
<style>
</style>
