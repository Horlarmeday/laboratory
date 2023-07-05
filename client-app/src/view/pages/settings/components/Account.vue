<template>
  <div class="form">
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >Login verification</label
      >
      <div class="col-lg-9 col-xl-6">
        <button
          type="button"
          class="btn btn-light-primary font-weight-bold btn-sm"
        >
          Setup login verification
        </button>
        <span class="form-text text-muted">
          {{ loginText }}
          <a href="#">Learn more</a>
        </span>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >Password reset verification</label
      >
      <div class="col-lg-9 col-xl-6">
        <div class="checkbox-inline">
          <label class="checkbox">
            <input type="checkbox" />
            <span></span>
            Require personal information to reset your password.
          </label>
        </div>
        <span class="form-text text-muted">
          {{ securityText }}
          <a href="#">Learn more</a>.
        </span>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"></label>
      <div class="col-lg-9 col-xl-6">
        <button
          type="button"
          class="btn btn-light-danger font-weight-bold btn-sm"
        >
          Deactivate your account ?
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      loginText:
        "After you log in, you will be asked for additional information to confirm your identity and protect your account from being compromised",
      securityText:
        "After you log in, you will be asked for additional information to confirm your identity and protect your account from being compromised"
    };
  }
};
</script>

<style scoped></style>
