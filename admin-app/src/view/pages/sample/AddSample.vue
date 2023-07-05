<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-body">
        <!--begin::Items-->
        <section-title text="Patient Information" />
        <patient-section :user="sample.User"/>

        <section-title text="Test Information" />
        <tests-order-section :orders="sample.LabTests"/>

        <!--        <section-title text="Tests" />-->
        <!--        <test-prescription-section />-->

        <section-title text="Order" />
        <order-section />
        <!--begin::Items-->
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../../../utils/SectionTitle";
import TestsOrderSection from "./components/TestsOrderSection";
import PatientSection from "./components/PatientSection";
// import TestPrescriptionSection from "./components/TestPrescriptionSection";
import OrderSection from "./components/OrderSection";
import axios from "../../../axios";
export default {
  name: "AddSample",
  components: {
    OrderSection,
    // TestPrescriptionSection,
    PatientSection,
    TestsOrderSection,
    SectionTitle
  },
  data() {
    return {
      backgroundColor: "white",
      sample: "",
      getTestsUrl: "/users/sample/"
    };
  },
  methods: {
    getSample() {
      axios
        .get(this.getTestsUrl + this.$route.params.id)
        .then(response => (this.sample = response.data.data))
        .catch(e => console.log(e));
    }
  },
  created() {
    this.getSample();
  }
};
</script>

<style scoped></style>
