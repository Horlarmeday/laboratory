<template>
  <div>
    <div class="card card-custom card-stretch gutter-b">
      <page-title title="Test" />
      <test-table />
    </div>
  </div>
</template>

<script>
import PageTitle from "../../content/components/PageTitle";
import TestTable from "./components/TestTable";
export default {
  name: "Test",
  components: { TestTable, PageTitle }
};
</script>

<style scoped></style>
