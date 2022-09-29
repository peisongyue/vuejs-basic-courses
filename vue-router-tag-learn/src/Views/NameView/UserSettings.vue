<template>
  <div class="className">
    <h4>UserSettings</h4>
    <Nav></Nav>
    <button @click="go">back</button>
    <router-link to="/nameView/settings/emails">to emails</router-link>
    <router-link to="/nameView/settings/profile">to profile</router-link>
    <router-view></router-view>
    <router-view name="helper"></router-view>
  </div>
</template>
<script>
import Nav from "../NameView/Nav.vue";
export default {
  name: "UserSettings",
  components: { Nav },
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
