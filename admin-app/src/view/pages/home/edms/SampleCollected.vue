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
              <span class="text-dark-75">Accession Number</span>
            </th>
            <th style="min-width: 100px" class="pl-7">
              Patient ID
            </th>
            <th style="min-width: 200px">Patient Name</th>
            <th style="min-width: 250px">Sections Name</th>
            <th style="min-width: 50px">Pending Tests</th>
            <th style="min-width: 100px">Pending Validation</th>
            <th style="min-width: 160px">Status</th>
            <th class="text-right" style="min-width: 130px">Action</th>
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
                    >{{ sample.accession_number }}</a
                  >
                </div>
              </div>
            </td>
            <td>
              <span
                class="text-dark-75 font-weight-bolder d-block font-size-lg"
              >
                {{ sample.patient_id }}
              </span>
            </td>
            <td>
              <span
                class="text-dark-75 font-weight-bolder d-block font-size-lg"
              >
                {{ sample.patient_name }}
              </span>
            </td>
            <td>
              <span
                class="text-dark-75 font-weight-bolder d-block font-size-lg"
              >
                {{ sample.section_name }}
              </span>
            </td>
            <td>
              <span
                class="text-dark-75 font-weight-bolder d-block font-size-lg"
              >
                {{ sample.pending_tests }}
              </span>
            </td>
            <td>
              <span
                class="text-dark-75 font-weight-bolder d-block font-size-lg"
              >
                {{ sample.pending_validations }}
              </span>
            </td>
            <td>
              <span
                class="label label-lg label-inline"
                :class="getTestsStatus(sample.status)"
                >{{ sample.status }}</span
              >
            </td>
            <td class="text-right pl-2">
              <router-link
                to="/add-result"
                class="btn btn-icon btn-light btn-hover-primary btn-sm mr-1"
              >
                <ArrowRightIcon />
              </router-link>
              <router-link
                to="/validate-result"
                class="btn btn-icon btn-light btn-hover-primary btn-sm mr-1"
              >
                <validation-icon />
              </router-link>
              <router-link
                to="/add-result"
                class="btn btn-icon btn-light btn-hover-primary btn-sm"
              >
                <printicon />
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
import ValidationIcon from "../../../../assets/icons/ValidationIcon";
import Printicon from "../../../../assets/icons/PrintIcon";
export default {
  name: "SampleCollected",
  components: { Printicon, ValidationIcon, ArrowRightIcon },
  data() {
    return {
      samples: [
        {
          accession_number: "23112021-001",
          patient_id: "PTF331",
          patient_name: "Mike Tominay",
          pending_tests: 5,
          pending_validations: 0,
          section_name: "Microbiology Department",
          status: "Unfinished"
        },
        {
          accession_number: "23112021-002",
          patient_id: "PTF737",
          patient_name: "Terry Nathan",
          pending_tests: 3,
          pending_validations: 0,
          section_name: "Heamatology Department",
          status: "Unfinished"
        },
        {
          accession_number: "23112021-003",
          patient_id: "PTF535",
          patient_name: "Peter Pan",
          pending_tests: 2,
          pending_validations: 0,
          section_name: "Biochemistry Department",
          status: "Unfinished"
        }
      ]
    };
  },
  methods: {
    getTestsStatus(status) {
      if (status === "Unfinished") return "label-warning";
      if (status === "Completed") return "label-success";
      return "label-primary";
    }
  }
};
</script>

<style scoped></style>
