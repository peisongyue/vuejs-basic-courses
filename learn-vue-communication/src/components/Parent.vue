<template>
  <div>
    <h2>Parent</h2>
    {{ msg }}
    <Child
      ref="child"
      @to-parent="HandleToParent"
      title="props: this is a title From Parent"
    ></Child>
    <button @click="HandleGetChildByRef">HandleGetChildByRef</button>
    <button @click="foucs">focus</button>
    <input type="text" ref="input" />
    <button @click="getChildren">getChildren</button>
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  components: {
    Child,
  },
  props: {},
  data() {
    return {
      msg: "$emit: default msg ",
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    HandleToParent(msg) {
      this.msg = msg;
    },
    HandleGetChildByRef() {
      this.$refs.child.setMsg("$refs: this is msg from Parent");
    },
    foucs() {
      console.log(this.$refs);
      this.$refs.input.focus();
    },
    getChildren() {
      console.log("$children: ", this.$children);
      this.$children[0].setMsg("$children: this is msg from Parent");
    },
  },
};
</script>
<style scoped></style>
