<template>
  <div>
    <!--begin::Dashboard-->
    <stats />

    <!--begin::Row-->
    <div class="row">
      <div class="col-lg-12">
        <booked-test />
      </div>
    </div>
    <!--end::Row-->
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Stats from "@/view/content/widgets/list/Stats.vue";
import BookedTest from "@/view/content/widgets/list/BookedTests.vue";

export default {
  name: "dashboard",
  components: {
    Stats,
    BookedTest
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },
  methods: {
    setActiveTab1(event) {
      this.tabIndex = this.setActiveTab(event);
    },
    setActiveTab2(event) {
      this.tabIndex2 = this.setActiveTab(event);
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      return parseInt(event.target.getAttribute("data-tab"));
    }
  }
};
</script>
