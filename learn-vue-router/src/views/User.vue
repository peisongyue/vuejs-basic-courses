<template>
  <div>
    <div>User</div>
    {{ this.$route.params.id }}
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'className',
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style>
</style>
