<template>
  <div class="aside aside-left d-flex flex-column" id="kt_aside" ref="kt_aside">
    <!--begin::Brand-->
    <KTBrand></KTBrand>
    <!--end::Brand-->
    <!--begin::Nav Wrapper-->
    <div
      class="aside-nav d-flex flex-column align-items-center flex-column-fluid pt-7 scroll scroll-pull ps"
    >
      <!--begin::Nav-->
      <ul class="nav flex-column">
        <!--begin::Item-->
        <li class="nav-item mb-5 active" v-b-tooltip.hover.right="'Dashboard'">
          <router-link
            to="/dashboard"
            class="nav-link btn btn-icon btn-clean btn-lg active"
          >
            <i class="fas fa-home icon-xl"></i>
          </router-link>
        </li>
        <!--end::Item-->
        <!--begin::Item-->
        <li class="nav-item mb-5" v-b-tooltip.hover.right="'Tests'">
          <router-link
            to="/tests"
            class="nav-link btn btn-icon btn-lg"
            data-toggle="tab"
            data-target="#kt_aside_tab_2"
            role="tab"
          >
            <i class="fas fa-user-md icon-xl"></i>
          </router-link>
        </li>
        <!--end::Item-->
        <!--begin::Item-->
        <li class="nav-item mb-5" v-b-tooltip.hover.right="'Settings'">
          <router-link
            to="/settings"
            class="nav-link btn btn-icon btn-lg"
            data-toggle="tab"
            data-target="#kt_aside_tab_6"
            role="tab"
          >
            <i class="flaticon2-settings icon-xl"></i>
          </router-link>
        </li>
        <!--end::Item-->
      </ul>
      <!--end::Nav-->
    </div>
    <!--end::Nav Wrapper-->
  </div>
</template>

<style lang="scss">
/* hide default vue-bootstrap tab links */
.hide-tabs > div:not(.tab-content) {
  display: none;
}
</style>

<script>
import KTBrand from "@/view/layout/brand/Brand";
import KTLayoutAside from "@/assets/js/layout/base/aside.js";

export default {
  name: "Aside",
  components: {
    KTBrand
  },
  mounted() {
    this.$nextTick(() => {
      // Init Aside
      KTLayoutAside.init(this.$refs["kt_aside"]);
    });
  }
};
</script>
