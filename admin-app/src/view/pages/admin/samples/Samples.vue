<template>
  <div>
    <div class="card card-custom gutter-b">
      <page-title
        title="Types of Sample"
        :show-route="true"
        url="/create-sample-type"
        button-text="Create sample"
      />
      <samples-table />
    </div>
  </div>
</template>

<script>
import PageTitle from "../../../../utils/PageTitle";
import SamplesTable from "./components/SamplesTable";
export default {
  name: "Samples",
  components: { SamplesTable, PageTitle }
};
</script>

<style scoped></style>
