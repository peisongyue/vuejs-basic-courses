<template>
  <div>
    <h2>ComA</h2>
    <div>msg: {{ msg }}</div>
    <button @click="getChildren">getChildren</button>
    <ComB v-bind="$attrs" @a="listenerA" @b="listenerB"></ComB>
  </div>
</template>
<script>
import ComB from "./ComB.vue";
export default {
  name: "ComA",
  components: { ComB },
  props: {},
  data() {
    return {
      msg: "ComA default msg",
      componentChildren: [],
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    console.log("$attrs ComA: ", this.$attrs);
  },
  methods: {
    setMsg(val) {
      this.msg = val;
    },
    addChild(val) {
      this.componentChildren.push(val);
    },
    getChildren() {
      console.log(this.componentChildren);
    },
    listenerA() {
      console.log("ComA AAAAAAAA");
    },
    listenerB() {
      console.log("ComA BBBBBBBB");
    },
  },
  provide() {
    return {
      title: "provide: this is a title from ComA",
      ComA: this,
    };
  },
};
</script>
<style></style>
