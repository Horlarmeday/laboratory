<template>
  <div>
    <div class="card card-custom gutter-b">
      <page-title title="Add Sample" />
      <add-sample-form />
    </div>
  </div>
</template>

<script>
import PageTitle from "../../../../utils/PageTitle";
import AddSampleForm from "./components/AddSampleForm";
export default {
  name: "AddSample",
  components: { AddSampleForm, PageTitle }
};
</script>

<style scoped></style>
