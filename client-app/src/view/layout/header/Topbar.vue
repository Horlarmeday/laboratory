<template>
  <div class="topbar">

    <!--begin::User-->
    <KTQuickUser></KTQuickUser>
    <!--end::User-->
  </div>
</template>

<style lang="scss">
.topbar {
  .dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    outline: none;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>

<script>
import KTQuickUser from "@/view/layout/extras/offcanvas/QuickUser";
export default {
  name: "Topbar",
  components: {
    KTQuickUser
  }
};
</script>

<style scoped></style>
