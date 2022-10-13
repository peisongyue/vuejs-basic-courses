<template>
  <div>
    <h2>Vuex</h2>
    <div>state :: userName: {{ userName }} userAge: {{ userAge }}</div>
    <div>getters :: laterName: {{ laterName }} laterAge: {{ laterAge }}</div>
    <div>
      mutations ::
      <button @click="AddAge">AddAge</button>
    </div>
    <div>
      actions ::
      <button @click="asyncAddAge">asyncAddAgeBtn</button>
      <button @click="asyncChangeNameBtn">asyncChangeNameBtn</button>
      {{ data }}
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Foo",
  components: {},
  props: {},
  data() {
    return {
      data: 0,
    };
  },
  watch: {},
  computed: {
    ...mapState(["userName", "userAge"]),
    ...mapGetters(["laterName", "laterAge"]),
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations(["addUserAge"]),
    ...mapActions(["asyncAddAge", "asyncChangeName"]),
    AddAge() {
      // this.$store.commit("addUserAge", { n: 2 });
      this.addUserAge({ n: 1 });
    },
    asyncAddAgeBtn() {
      this.$store.dispatch("asyncAddAge");
      console.log(111111);
      this.data = 111;
      // await this.asyncAddAge();
    },
    asyncChangeNameBtn() {
      this.asyncChangeName();
    },
  },
};
</script>
<style></style>
