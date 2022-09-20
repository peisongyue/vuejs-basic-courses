<template>
  <div class='about'>
    <p>{{ id }}</p>
  </div>
</template>
<script>
export default {
  name: 'about',
  components: {},
  props: ['id'],
  data() {
    return {}
  },
  watch: {},
  computed: {},
  created() {
    console.log(this.$route);
  },
  mounted() {},
  methods: {}
}
</script>
<style>
</style>
