<template>
  <div class="app-hd">
    <div class="app-home">
      <a class="rt-icon-menu toggle-side" @click="$emit('sidebar-change')"/>
      <img class="site-logo" src="../assets/img/logo.png" alt="Vue Router Tab - logo" />
      <h2 class="site-title"><a href="../">Vue Router Tab Learn</a> - Demo</h2>
    </div>
    <site-link></site-link>
  </div>
</template>
<script>
import SiteLink from './SiteLink.vue';
export default {
  name: 'AppHeader',
  components: { SiteLink },
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
<style lang="scss" scoped>
.app-hd {
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    position: relative;
    box-shadow: 0 0 8px rgba( 0,0,0, 0.2);
    .app-home {
        display: flex;
        align-items: center;
    }
    .toggle-side {
      display: none;
      margin-left: 0.5rem;
      padding: 0.5rem;
      font-size: 1.25rem;
      cursor: pointer;

      @include screen-mob {
        display: block;
      }
    }
    .site-logo {
      $s: 1.3rem;
      margin: 0 0.5rem 0 1.5rem;
      width: $s;
      height: $s;

      @include screen-mob {
        margin-left: 0.5rem;
      }
    }
    .site-title {
            margin: 0;
            font-weight: 400;
            font-size: 1.3rem;
            line-height: 1;
            a {
                font-weight: 600;
                text-decoration: none;
                color: $text;

                &:hover {
                    color: $color;
                }
            }
        }
}
</style>
