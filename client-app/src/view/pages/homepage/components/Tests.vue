<template>
  <div class="flex-row-fluid ml-lg-8 mt-6">
    <div class="row">
      <!--begin::Column-->
      <div
        class="col-xl-3"
        v-for="test in tests"
        :key="test.id"
      >
        <!--begin::Card-->
        <div class="card card-custom gutter-b">
          <!--begin::Body-->
          <div class="card-body text-center pt-4">
            <!--begin::User-->
            <div class="mt-7">
              <div class="symbol symbol-circle symbol-lg-90">
                <img src="/media/project-logos/7.png" alt="image" />
              </div>
            </div>
            <!--end::User-->

            <!--begin::Name-->
            <div class="my-4">
              <a
                href="#"
                class="text-dark font-weight-bold text-hover-primary font-size-h4"
              >
                {{ test.name }}</a
              >
            </div>
            <!--end::Name-->

            <!--begin::Buttons-->
            <div class="mt-9">
              <a
                href="#"
                class="btn btn-light-primary font-weight-bolder btn-sm py-3 px-6 text-uppercase"
                @change="getTestIds(test)"
              >
                Select
              </a>
            </div>
            <!--end::Buttons-->
          </div>
          <!--end::Body-->
        </div>
        <!--end::Card-->
      </div>
      <!--end::Column-->
    </div>
    <!--    <div class="row">-->
    <!--      <div class="col-lg-3" v-for="test in tests" :key="test.id">-->
    <!--        <div class="checkbox-inline">-->
    <!--          <label class="checkbox mb-2">-->
    <!--            <input-->
    <!--              type="checkbox"-->
    <!--              name="Checkboxes5"-->
    <!--              :value="test.id"-->
    <!--              @change="getTestIds(test)"-->
    <!--              class="ml-2"-->
    <!--            />-->
    <!--            <span></span>-->
    <!--            {{ test.name }}-->
    <!--          </label>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Tests",
  data() {
    return {
      tests: [
        {
          id: 1,
          name: "Haemoglobin",
          price: "4000.00"
        },
        {
          id: 2,
          name: "Basophil",
          price: "5000.00"
        },
        {
          id: 3,
          name: "Packed Cell Volume (PCV)",
          price: "4000.00"
        },
        {
          id: 4,
          name: "Malaria Parasite",
          price: "1000.00"
        },
        {
          id: 5,
          name: "Urinalysis",
          price: "7000.00"
        },
        {
          id: 6,
          name: "VDRL",
          price: "4000.00"
        },
        {
          id: 7,
          name: "Lymphocyte",
          price: "4000.00"
        },
        {
          id: 8,
          name: "Blood Sugar Fasting",
          price: "4000.00"
        },
        {
          id: 9,
          name: "Nucleated RBC",
          price: "4000.00"
        },
        {
          id: 10,
          name: "APTT (Control) (Blood)",
          price: "4000.00"
        }
      ]
    };
  },
  methods: {
    getTestIds(value) {
      this.$emit("getSelected", value);
    }
  }
};
</script>

<style scoped></style>
