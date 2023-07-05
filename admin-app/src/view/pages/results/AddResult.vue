<template>
  <div>
    <div class="card card-custom gutter-b">
      <page-title title="Add Result" />
      <div class="card-body">
        <section-title text="Patient Information" />
        <patient-section />
        <banner />

        <section-title text="Tests Information" />
        <result-section />
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../../../utils/SectionTitle";
import PatientSection from "../sample/components/PatientSection";
import Banner from "./components/Banner";
import ResultSection from "./components/ResultSection";
import PageTitle from "../../../utils/PageTitle";
export default {
  name: "AddResult",
  components: {PageTitle, ResultSection, Banner, PatientSection, SectionTitle },
};
</script>

<style scoped></style>
