<template>
  <div>
    <div class="card card-custom gutter-b">
      <page-title title="Add Test" />
      <add-test-form />
    </div>
  </div>
</template>

<script>
import PageTitle from "../../../../utils/PageTitle";
import AddTestForm from "./components/AddTestForm";
export default {
  name: "AddTest",
  components: { AddTestForm, PageTitle }
};
</script>

<style scoped></style>
