<template>
  <div class="card-body">
    <div class="form-group row">
      <label class="col-lg-3 col-form-label">Sample Type:</label>
      <div class="col-lg-6">
        <input
          type="text"
          class="form-control"
          placeholder="Enter sample type"
          v-model="name"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-lg-3 col-form-label">Abbreviation:</label>
      <div class="col-lg-6">
        <input
          type="text"
          class="form-control"
          placeholder="Enter abbreviation"
          v-model="abbreviation"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-lg-3 col-form-label">Description:</label>
      <div class="col-lg-6">
        <input
          type="text"
          class="form-control"
          placeholder="Enter description"
          v-model="description"
        />
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" @click="addSample">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "../../../../../axios";
export default {
  name: "AddTestForm",
  data() {
    return {
      name: "",
      abbreviation: "",
      description: "",
      createSampleUrl: "/users/samples"
    };
  },
  methods: {
    // notifyError(error) {
    //   this.$notify({
    //     group: "foo",
    //     title: "Error message",
    //     text: error.response.data,
    //     type: "error"
    //   });
    // },
    //
    // notifySuccess(response) {
    //   this.$notify({
    //     group: "foo",
    //     title: "Success message",
    //     text: response.data.message,
    //     type: "success"
    //   });
    // },
    addSample() {
      const data = {
        name: this.name,
        abbreviation: this.abbreviation,
        description: this.description
      };
      axios
        .post(this.createSampleUrl, data)
        .then(() => {
          this.initValues();
          // this.notifySuccess(response);
        })
        .catch(e => console.log(e));
    },
    initValues() {
      this.name = "";
      this.abbreviation = "";
      this.description = "";
    }
  }
};
</script>

<style scoped></style>
