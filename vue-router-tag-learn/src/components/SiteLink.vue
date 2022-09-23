<template>
  <div class='site-link'>
    <a v-for="({ label, icon}, index) in links"
        :key="index"
        :title="label"
        :class="`rt-icon-${icon}`"
        target="_blank">
    </a>
  </div>
</template>
<script>
export default {
  name: 'SiteLink',
  components: {},
  props: {},
  data() {
    return {
        links: [
        {
          label: 'GitHub',
          icon: 'github',
          url: ''
        },
        {
          label: 'Gitee',
          icon: 'gitee',
          url: ''
        },
        {
          label: '文档和API',
          icon: 'api',
          url: ''
        },
        {
          label: 'Issues',
          icon: 'feedback',
          url: ''
        }
      ]
    }
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.site-link {
  display: flex;
  justify-content: space-around;
  padding: 0.8rem 0;
  text-align: center;

  a {
    font-size: 1.5rem;
    color: #888;
    text-decoration: none;
    transition: all 0.1s ease;

    &:hover,
    &:active {
      color: $color;
      transform: scale(1.5);
    }
  }
}
</style>
