<template>
  <div>
    <h2>ComB</h2>
    <ComC v-bind="$attrs"></ComC>
    <button @click="getListeners">getListeners</button>
  </div>
</template>
<script>
import ComC from "./ComC.vue";
export default {
  name: "ComB",
  components: { ComC },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    console.log("$attrs ComB: ", this.$attrs);
  },
  methods: {
    getListeners() {
      console.log("$listeners ComB: ", this.$listeners);
      this.$listeners.a();
    },
  },
};
</script>
<style></style>
