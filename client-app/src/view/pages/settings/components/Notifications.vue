<template>
  <div class="form">
    <div class="row">
      <label class="col-xl-3"></label>
      <div class="col-lg-9 col-xl-6">
        <h3 class="font-size-h6 mb-5">Setup Email Notification:</h3>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >Email Notification</label
      >
      <div class="col-lg-9 col-xl-6">
        <span class="switch">
          <label>
            <input
              type="checkbox"
              checked="checked"
              v-model="user.allow_email_notification"
            />
            <span></span>
          </label>
        </span>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >SMS Notification</label
      >
      <div class="col-lg-9 col-xl-6">
        <span class="switch">
          <label>
            <input
              type="checkbox"
              checked="checked"
              v-model="user.allow_sms_notification"
            />
            <span></span>
          </label>
        </span>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >Email Subscription</label
      >
      <div class="col-lg-9 col-xl-6">
        <span class="switch">
          <label>
            <input type="checkbox" v-model="user.allow_email_subscription" />
            <span></span>
          </label>
        </span>
      </div>
    </div>

    <div class="separator separator-dashed my-10"></div>
  </div>
</template>

<script>
export default {
  name: "Notifications",
  data() {
    return {
      user: {
        allow_email_notification: true,
        allow_sms_notification: false,
        allow_email_subscription: true
      }
    };
  }
};
</script>

<style scoped></style>
