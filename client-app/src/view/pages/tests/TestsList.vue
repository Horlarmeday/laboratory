<template>
  <!--begin::Advance Table Widget 10-->
  <div class="card card-custom gutter-b card-stretch">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Tests</span>
      </h3>
    </div>
    <!--    <search @search="onHandleSearch" />-->
    <!--begin::Body-->
    <div class="card-body py-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table
          class="table table-head-custom table-vertical-center table-head-bg table-borderless"
          id="kt_advance_table_widget_4"
        >
          <thead>
            <tr class="text-left">
              <th class="pl-0" style="min-width: 120px">S/N</th>
              <th style="min-width: 110px">Name</th>
              <th style="min-width: 120px">Price</th>
              <th style="min-width: 120px">Accession Number</th>
              <th style="min-width: 110px">
                <span class="text-info">Date</span>
              </th>
              <th class="pr-0 text-right" style="min-width: 160px">Action</th>
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
                    class="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                    >{{ i + 1 }}</a
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ test.test.name }}</span
                  >
                </td>
                <td>
                  <span class="font-weight-bolder d-block font-size-lg"
                    >₦{{ test.price }}</span
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ test.accession_number }}</span
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ test.createdAt | moment("ddd, MMM Do YYYY, h:mma") }}
                  </span>
                </td>
                <td class="pr-0 text-right">
                  <a
                    href="#"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <view-button />
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--end::Table-->
      <!--            <pagination-->
      <!--                    :total-pages="pages"-->
      <!--                    :total="queriedItems"-->
      <!--                    :per-page="perPage"-->
      <!--                    :current-page="currentPage"-->
      <!--                    @pagechanged="onPageChange"-->
      <!--                    @changepagecount="onChangePageCount"-->
      <!--            />-->
    </div>
  </div>
</template>

<script>
import ViewButton from "../../content/components/ViewButton";
// import EditButton from "../../content/components/EditButton";
// import Pagination from "../../../common/Pagination";
// import Search from "../../../common/Search";
export default {
  name: "TestsList",
  components: { ViewButton },
  data() {
    return {
      // displayPrompt: false,
      // roomToEdit: {},
      // currentPage: 1,
      // itemsPerPage: 10
      tests: [
        {
          id: 1,
          test_id: 1,
          test: { name: "HCV" },
          price: 700,
          createdAt: "2021-06-15T09:25:00.000Z",
          accession_number: "15062021-01-1"
        },
        {
          id: 2,
          test_id: 2,
          test: { name: "Urine" },
          price: 900,
          createdAt: "2021-06-15T09:25:00.000Z",
          accession_number: "15062021-01-2"
        }
      ]
    };
  },
  methods: {
    // handlePageChange() {
    //     this.$store.dispatch("staff/fetchStaffs", {
    //         currentPage: this.currentPage,
    //         itemsPerPage: this.itemsPerPage
    //     });
    // },
    // onPageChange(page) {
    //     this.currentPage = page;
    //     this.handlePageChange();
    // },
    onHandleSearch(search) {
      console.log(search)
      // this.$store.dispatch("staff/fetchStaffs", {
      //     currentPage: 1,
      //     itemsPerPage: this.itemsPerPage,
      //     search
      // });
    }
    // onChangePageCount(pagecount) {
    //     this.$store.dispatch("staff/fetchStaffs", {
    //         currentPage: this.currentPage,
    //         itemsPerPage: pagecount
    //     });
    // }
  }
  // computed: {
  //     staffs() {
  //         return this.$store.state.staff.staffs;
  //     },
  //     queriedItems() {
  //         return this.$store.state.staff.total;
  //     },
  //     pages() {
  //         return this.$store.state.staff.pages;
  //     },
  //     perPage() {
  //         return this.staffs.length;
  //     }
  // },
  // created() {
  //     this.$store.dispatch("staff/fetchStaffs", {
  //         currentPage: this.currentPage,
  //         itemsPerPage: this.itemsPerPage
  //     });
  // }
};
</script>

<style scoped></style>
