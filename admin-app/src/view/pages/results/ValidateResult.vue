<template>
  <div>
    <div class="card card-custom gutter-b">
      <page-title title="Validate Result" />
      <div class="card-body">
        <section-title text="Patient Information" />
        <patient-section />

        <section-title text="Validate Result" />
        <result-validation-section />
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../../../utils/SectionTitle";
import ResultValidationSection from "./components/ResultValidationSection";
import PatientSection from "../sample/components/PatientSection";
import PageTitle from "../../../utils/PageTitle";

export default {
  name: "ValidateResult",
  components: {PageTitle, PatientSection, ResultValidationSection, SectionTitle }
};
</script>

<style scoped></style>
