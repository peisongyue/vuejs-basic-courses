<template>
  <div>
    <h2>Child</h2>
    <div>title: {{ title }}</div>
    <div>msg: {{ msg }}</div>
    <button @click="toParent">to Parent</button>
    <button @click="getParent">getParent</button>
  </div>
</template>
<script>
export default {
  name: "Child",
  components: {},
  props: {
    title: String,
  },
  data() {
    return {
      msg: "$refs: default msg",
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    toParent() {
      this.$emit("to-parent", "$emit: this is a msg from Child");
    },
    setMsg(val) {
      this.msg = val;
    },
    getParent() {
      console.log("$parent:", this.$parent);
      // console.log(this.$parent.foucs());
    },
  },
};
</script>
<style></style>
