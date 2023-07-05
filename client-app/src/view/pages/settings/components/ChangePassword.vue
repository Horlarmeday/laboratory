<template>
  <div class="form">
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >Old Password</label
      >
      <div class="col-lg-9 col-xl-6">
        <input
          class="form-control form-control-lg form-control-solid"
          type="password"
          v-model="old_password"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >New Password</label
      >
      <div class="col-lg-9 col-xl-6">
        <input
          class="form-control form-control-lg form-control-solid"
          type="password"
          v-model="new_password"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >Confirm Password</label
      >
      <div class="col-lg-9 col-xl-6">
        <input
          class="form-control form-control-lg form-control-solid"
          type="password"
          v-model="confirm_password"
        />
      </div>
    </div>

    <div class="separator separator-dashed my-10"></div>
    <div>
      <button class="btn btn-elevate btn-primary btn-lg">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
    return {
      new_password: "",
      old_password: "",
      confirm_password: ""
    };
  }
};
</script>

<style scoped></style>
