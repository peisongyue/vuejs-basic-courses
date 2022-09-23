<template>
  <div class="app-sd">
    <div class="app-sd-menu">
      <menu-item
        v-for="(item, index) in menu"
        :key="index"
        :data="item"
      ></menu-item>
    </div>
  </div>
</template>
<script>
import MenuItem from "@/components/MenuItem.vue";
import menu from "../config/menu";
export default {
  name: "AppAside",
  components: { MenuItem },
  props: {},
  data() {
    return {
      menu,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.app-sd {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: rgba(#fff, 0.95);
  border-right: 1px solid #eaecef;

  &-menu {
    flex: auto;
    padding-top: 1rem;
    height: 0;
    // overflow-y: auto;

    > .menu-group {
      margin-bottom: 1rem;
    }
  }
}
</style>
