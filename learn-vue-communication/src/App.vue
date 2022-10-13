<template>
  <div id="app">
    <Parent></Parent>
    <ComA title="this is a title from App.vue"></ComA>
    <h5>通信方式</h5>
    <p>父子通信: props $emit / $refs ref / $parent $children</p>
    <p>多层级父子通信: provide inject / $attrs / $listeners</p>
    <Foo></Foo>
  </div>
</template>

<script>
import Parent from "./components/Parent.vue";
import ComA from "./components/ComA.vue";
import Foo from "./components/Foo.vue";
export default {
  name: "App",
  components: {
    Parent,
    ComA,
    Foo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
