<template>
  <div class="flex-row-auto offcanvas-mobile w-xl-250px">
    <div class="card card-custom card-stretch">
      <div class="card-header pt-5">
        <h6 class="card-title">
          <span class="card-label font-weight-bolder text-dark"
            >Selected Tests</span
          >
        </h6>
      </div>
      <div class="card-body">
        <div class="row">
          <div
            class="col-lg-12 mb-2 select-order"
            v-for="(test, i) in selectedTests"
            :key="i"
          >
            <div class="pb-2 pt-2">
              <span class="">{{ truncateText(test.name) }}</span>
              <span class="float-right font-weight-bold"
                >₦{{ test.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectedTests",
  props: {
    selectedTests: {
      type: Array
    },
    sBackgroundColor: { type: String }
  },
  methods: {
    truncateText(test) {
      if (!test.length || test.length <= 17) return test;
      const truncatedText = test.substring(0, 15);
      return `${truncatedText}...`;
    }
  }
};
</script>

<style scoped>
.select-order {
  background: #dddddd;
  border: 1px solid #ddd;
  border-radius: 3px;
}
</style>
