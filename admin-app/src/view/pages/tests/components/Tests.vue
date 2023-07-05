<template>
  <div class="flex-row-fluid ml-lg-8 mt-6">
    <div class="row">
      <div class="col-lg-3" v-for="test in tests" :key="test.id">
        <div class="checkbox-inline">
          <label class="checkbox mb-2">
            <input
              type="checkbox"
              name="Checkboxes5"
              :value="test.id"
              @change="getTestIds(test)"
              class="ml-2"
            />
            <span></span>
            {{ test.name }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../../../axios";

export default {
  name: "Tests",
  data() {
    return {
      tests: [],
      getTestsUrl: "/users/tests"
    };
  },
  methods: {
    getTestIds(value) {
      this.$emit("getSelected", value);
    },
    getTests() {
      axios
        .get(this.getTestsUrl)
        .then(response => (this.tests = response.data.data))
        .catch(e => console.log(e));
    }
  },
  created() {
    this.getTests();
  }
};
</script>

<style scoped></style>
