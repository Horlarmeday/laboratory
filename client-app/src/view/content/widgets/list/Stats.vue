<template>
  <div class="row">
    <div class="col-xl-4" v-for="stat in stats" :key="stat.id">
      <div
        class="card card-custom bgi-no-repeat card-stretch gutter-b"
        style="background-position: right top; background-size: 30% auto; background-image: url(media/svg/shapes/abstract-1.svg)"
      >
        <!--begin::Body-->
        <div class="card-body">
          <span class="svg-icon svg-icon-2x svg-icon-info">
            <i :class="stat.icon" class="icon-3x" />
          </span>
          <span
            class="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block"
            >{{ stat.count }}</span
          >
          <span class="font-weight-bold text-muted  font-size-sm">{{
            stat.name
          }}</span>
        </div>
        <!--end::Body-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stats",
  data() {
    return {
      stats: [
        {
          id: 1,
          name: "Total Number of Visits",
          icon: "fas fa-user-md",
          count: 20
        },
        {
          id: 2,
          name: "Total Upcoming Appointments",
          icon: "far fa-calendar-alt",
          count: 20
        },
        {
          id: 3,
          name: "Total Number of Tests",
          icon: "fas fa-vial",
          count: 17
        }
      ]
    };
  }
  // computed: {
  //   stats() {
  //     return this.$store.state.dashboard.stats;
  //   }
  // },
  // created() {
  //   this.$store.dispatch("dashboard/fetchStats");
  // }
};
</script>

<style scoped></style>
