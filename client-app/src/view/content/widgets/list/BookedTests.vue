<template>
  <!--begin::Base Table Widget 2-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Booked Tests</span>
      </h3>
      <div class="card-toolbar">
        <router-link
          to="/book-test"
          class="btn btn-primary font-weight-bolder font-size-sm"
          >Book test</router-link
        >
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2 pb-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table
          class="table table table-head-custom table-vertical-center"
          id="kt_advance_table_widget_4"
        >
          <thead>
            <tr>
              <th style="min-width: 150px">Booking Date</th>
              <th style="min-width: 140px">Number of Tests</th>
              <th style="min-width: 120px">Status</th>
              <th class="pr-0 text-right" style="min-width: 120px">Actions</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="!tests.length">
              <tr>
                <td colspan="9" align="center" class="text-muted">No Data</td>
              </tr>
            </template>
            <template v-for="(test, i) in tests">
              <tr v-bind:key="i">
                <td class="pl-0">
                  <a
                    href="#"
                    class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >{{ test.createdAt | moment("ddd, MMM Do YYYY") }}</a
                  >
                  <span class="text-muted font-weight-bold d-block">{{
                    test.createdAt | moment("h:mma")
                  }}</span>
                </td>
                <td>
                  <span class="text-dark font-size-lg font-weight-bold">{{
                    test.tests.length
                  }}</span>
                </td>
                <td>
                  <span
                    class="label label-lg label-inline"
                    :class="displayLabel(test.status)"
                    >{{ test.status }}
                  </span>
                </td>
                <td class="pr-0 text-right">
                  <router-link
                    :to="`/booked-test/${test.id}`"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm mr-3"
                  >
                    <view-button />
                  </router-link>
                  <a
                    v-if="test.status === 'Concluded'"
                    href="#"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <printicon />
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--end::Table-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Base Table Widget 2-->
</template>

<script>
import ViewButton from "../../components/ViewButton";
import Printicon from "../../components/PrintIcon";
export default {
  name: "BookedTests",
  components: { Printicon, ViewButton },
  data() {
    return {
      tests: [
        {
          id: 1,
          appointment_date: "2021-06-15T09:25:00.000Z",
          createdAt: "2021-06-15T09:25:51.441Z",
          status: "Pending",
          tests: [1]
        },
        {
          id: 2,
          appointment_date: "2021-06-29T09:25:00.000Z",
          createdAt: "2021-06-26T09:25:51.441Z",
          status: "Concluded",
          tests: [1, 2, 3]
        }
      ]
    };
  },
  methods: {
    displayLabel(status) {
      if (status === "Pending") return "label-warning";
      if (status === "Concluded") return "label-primary";
      if (status === "Confirmed") return "label-success";
      return "label-dark";
    }
  }
  // computed: {
  //   arrivals() {
  //     return this.$store.state.dashboard.arrivals;
  //   }
  // },
  // created() {
  //   this.$store.dispatch("dashboard/fetchArrivals");
  // }
};
</script>
