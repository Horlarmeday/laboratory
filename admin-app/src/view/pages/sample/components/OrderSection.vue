<template>
  <div>
    <div>
      <div class="form-group row">
        <label class="col-2 col-form-label">Accession Number</label>
        <div class="col-3">
          <input class="form-control form-control-sm" type="text" readonly />
        </div>
        <div class="col-2">
          <button class="btn btn-sm btn-outline-secondary">Generate</button>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-2 col-form-label">Received date</label>
        <div class="col-3">
          <input
            class="form-control form-control-sm"
            type="text"
            readonly
            :placeholder="new Date().toLocaleDateString()"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-2 col-form-label">Received By</label>
        <div class="col-3">
          <input
            class="form-control form-control-sm"
            type="text"
            readonly
            placeholder="Babatunde Adegbile"
          />
        </div>
      </div>
    </div>
    <div class="separator separator-solid mb-6"></div>
    <div class="text-center">
      <button class="btn btn-lg btn-primary">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderSection"
};
</script>

<style scoped></style>
