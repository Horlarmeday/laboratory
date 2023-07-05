<template>
  <div>
    <div class="card-title mt-4 align-items-start flex-column col-3 offset-9">
      <input
        type="text"
        class="form-control-sm form-control"
        placeholder="Search"
      />
    </div>
    <div class="table-responsive">
      <table
        class="table table-head-custom table-head-bg table-borderless table-vertical-center"
      >
        <thead>
          <tr class="text-uppercase">
            <th style="min-width: 150px" class="pl-7">
              <span class="text-dark-75">Patient ID</span>
            </th>
            <th style="min-width: 200px">Patient Name</th>
            <th style="min-width: 150px">Total Tests</th>
            <th style="min-width: 150px">Status</th>
            <th class="text-right" style="min-width: 130px">Action</th>
            <th style="min-width: 120px"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sample in samples" :key="sample.id">
            <td class="pl-7 py-8">
              <div class="d-flex align-items-center">
                <div>
                  <a
                    href="#"
                    class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >{{ `PTF00${sample.User.id}` }}</a
                  >
                </div>
              </div>
            </td>
            <td>
              <span
                class="text-dark-75 font-weight-bolder d-block font-size-lg"
              >
                {{ sample.User.name }}
              </span>
            </td>
            <td>
              <span
                class="text-dark-75 font-weight-bolder d-block font-size-lg pl-7"
              >
                {{ getTotalTests(sample.LabTests) }}
              </span>
            </td>
            <td>
              <span class="label label-lg label-light-warning label-inline">{{
                sample.status
              }}</span>
            </td>
            <td class="text-right pr-0">
              <router-link
                :to="`/add-sample/${sample.id}`"
                class="btn btn-icon btn-light btn-hover-primary btn-sm"
              >
                <ArrowRightIcon />
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ArrowRightIcon from "../../../../assets/icons/ArrowRightIcon";
import axios from "../../../../axios";

export default {
  name: "SampleToCollect",
  components: { ArrowRightIcon },
  data() {
    return {
      samples: [],
      getTestUrl: "/users/samples-to-collect"
    };
  },
  methods: {
    getSamples() {
      axios
        .get(this.getTestUrl)
        .then(response => (this.samples = response.data.data))
        .catch(e => console.log(e));
    },
    getTotalTests(tests) {
      return tests.length;
    }
  },
  created() {
    this.getSamples()
  },
};
</script>

<style scoped></style>
