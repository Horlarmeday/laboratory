<template>
  <!--begin: Search Form-->
  <div class="card-body py-1" style="flex: 0.5">
    <div class="row">
      <div class="col-lg-6">
        <label class="pr-0">Search:</label>
        <input
          type="text"
          class="form-control datatable-input"
          placeholder="Type and press enter to search"
          data-col-index="0"
          v-model="search"
          @keypress.enter="onSearch"
        />
      </div>
    </div>
    <br />
  </div>
  <!--begin: Datatable-->
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.search);
    }
  }
};
</script>

<style scoped></style>
