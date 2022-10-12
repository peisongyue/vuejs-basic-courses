<template>
  <div>
    <h2>ComC</h2>
    <div>title: {{ title }}</div>
    <button @click="setComAMsgByComC">setComAMsg</button>
  </div>
</template>
<script>
export default {
  name: "ComC",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    console.log("$attrs ComC: ", this.$attrs);
  },
  methods: {
    setComAMsgByComC() {
      this.ComA.setMsg("provide: this is a msg from ComC");
      this.ComA.addChild(this);
    },
  },
  inject: ["title", "ComA"],
};
</script>
<style></style>
