<template>
  <div class="card-body">
    <div class="table-responsive">
      <table
        class="table table-head-custom table-head-bg table-borderless table-vertical-center"
      >
        <thead>
          <tr>
            <th></th>
            <th>Sample Type</th>
            <th>Description</th>
            <th>Local Abbreviation</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(sample, i) in samples" :key="i">
            <td><input type="checkbox" class="form-control-sm" /></td>
            <td>{{ sample.name }}</td>
            <td>
              {{ sample.description }}
            </td>
            <td>
              {{ sample.abbreviation }}
            </td>
            <td>
              {{ sample.createdAt | moment("ddd, MMM, YYYY") }}
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
  name: "SamplesTable",
  data() {
    return {
      samples: [],
      getSampleUrl: "/users/samples"
    };
  },
  methods: {
    getSamples() {
      axios
        .get(this.getSampleUrl)
        .then(response => (this.samples = response.data.data))
        .catch(e => console.log(e));
    }
  },
  created() {
    this.getSamples();
  }
};
</script>

<style scoped></style>
