<template>
  <div>
    <div class="card card-custom gutter-b">
      <page-title
        title="Tests"
        :show-route="true"
        url="/create-test"
        button-text="Create Test"
      />
      <tests-table />
    </div>
  </div>
</template>

<script>
import PageTitle from "../../../../utils/PageTitle";
import TestsTable from "./components/TestTable";
export default {
  name: "Tests",
  components: { TestsTable, PageTitle }
};
</script>

<style scoped></style>
