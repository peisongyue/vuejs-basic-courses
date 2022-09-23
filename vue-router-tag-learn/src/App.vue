<template>
  <div class="app-ct">
    <app-header></app-header>
    <div class="app-bd">
      <app-aside></app-aside>
      <div class="app-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppAside from "@/components/AppAside.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppAside,
  },
};
</script>

<style lang="scss" scoped>
$side-width: 200px;
$just-trans: all 0.2s ease-in-out;
.app-ct {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .app-sd {
    width: $side-width;
    transition: $just-trans;

    @include screen-mob {
      left: -$side-width;
    }
  }

  .app-bd {
    flex: 1;
    position: relative;
  }
}

.app-sd {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100%;
}

.app-main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: $side-width;
  height: 100%;
  transition: $just-trans;

  @include screen-mob {
    left: 0;
  }

  ::v-deep .router-tab {
    height: 100%;

    // 路由页面
    &-page {
      padding: 15px;
      font-size: 14px;
      line-height: 1.5;
    }
  }
}
</style>

<style lang="scss" src="./assets/scss/demo.scss"></style>
