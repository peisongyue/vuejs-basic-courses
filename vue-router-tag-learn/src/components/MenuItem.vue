<template>
  <router-link class="menu-item" v-if="data.to" :to="data.to">
    {{ data.text }}
  </router-link>
  <div class="menu-group" v-else-if="data.children && data.children.length">
    <h3 class="menu-title">
      {{ data.text }}
    </h3>
    <div class="menu-list">
      <menu-item
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
      >
      </menu-item>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuItem",
  components: {},
  props: {
    data: Object,
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
$fs: 0.875rem;
.menu-item {
  display: block;
  padding: 0.35rem 1rem 0.35rem 1.25rem;
  font-size: $fs;
  color: #2c3e50;
  text-decoration: none;
  cursor: pointer;
  &.router-link-active,
  &:hover {
    color: $color;
  }
  &.router-link-active {
    font-weight: 700;
  }
}
.menu-title {
  padding: 0 1.25rem;
  margin: 0.5rem 0;
  font-size: 1em;
  font-weight: 600;
}

.menu-list {
  margin: 0;
  padding: 0;
  padding-left: 1rem;

  .menu-list .router-link-active {
    font-weight: 400;
  }

  .menu-group .menu-title {
    margin: 0.3rem 0;
    font-size: $fs;
  }
}
</style>
