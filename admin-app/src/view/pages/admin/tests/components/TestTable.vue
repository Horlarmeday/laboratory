<template>
  <div class="card-body">
    <div class="table-responsive">
      <table
        class="table table-head-custom table-head-bg table-borderless table-vertical-center"
      >
        <thead>
          <tr>
            <th></th>
            <th>Test Name</th>
            <th>Sample Type</th>
            <th>Price(₦)</th>
            <th>Test Section</th>
            <th>Description</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(test, i) in tests" :key="i">
            <td><input type="checkbox" class="form-control-sm" /></td>
            <td>{{ test.name }}</td>
            <td>
              {{ test.Sample.name }}
            </td>
            <td>
              {{ Number(test.price).toLocaleString() }}
            </td>
            <td>
              {{ test.test_section }}
            </td>
            <td>
              {{ test.description }}
            </td>
            <td>
              {{ test.createdAt | moment("ddd, MMM, YYYY") }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "../../../../../axios";

export default {
  name: "TestsTable",
  data() {
    return {
      tests: [],
      getTestsUrl: "/users/tests"
    };
  },
  methods: {
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
