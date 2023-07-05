<template>
  <div class="flex-row-fluid ml-lg-8">
    <div class="row">
      <div class="col-form-label">
        <div class="checkbox-inline">
          <label v-for="test in tests" :key="test.id" class="checkbox">
            <input type="checkbox" name="Checkboxes5" :value="test.id" />
            <span></span>
            {{ test.name }}
          </label>
        </div>
      </div>
    </div>
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
          name: "Haemoglobin"
        },
        {
          id: 2,
          name: "Basophil"
        },
        {
          id: 3,
          name: "Packed Cell Volume (PCV)"
        },
        {
          id: 4,
          name: "Malaria Parasite"
        },
        {
          id: 5,
          name: "Urinalysis"
        },
        {
          id: 6,
          name: "VDRL"
        },
        {
          id: 7,
          name: "Lymphocyte"
        },
        {
          id: 8,
          name: "Blood Sugar Fasting"
        },
        {
          id: 9,
          name: "Nucleated RBC"
        },
        {
          id: 10,
          name: "APTT (Control) (Blood)"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
