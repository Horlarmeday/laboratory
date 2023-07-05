<template>
  <div class="form">
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >First Name</label
      >
      <div class="col-lg-9 col-xl-6">
        <input
          class="form-control form-control-lg form-control-solid"
          type="text"
          v-model="user.first_name"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >Last Name</label
      >
      <div class="col-lg-9 col-xl-6">
        <input
          class="form-control form-control-lg form-control-solid"
          type="text"
          v-model="user.last_name"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >Date of Birth</label
      >
      <div class="col-lg-9 col-xl-6">
        <datepicker
          v-model="user.date_of_birth"
          input-class="form-control form-control-lg form-control-solid"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label">Gender</label>
      <div class="col-lg-9 col-xl-6">
        <select
          class="form-control form-control-lg form-control-solid"
          v-model="user.gender"
        >
          <option>Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>

    <div class="separator separator-dashed my-10"></div>

    <!--begin::Heading-->
    <div class="row">
      <div class="col-lg-9 col-xl-6 offset-xl-3">
        <h3 class="font-size-h6 mb-5">Contact Info:</h3>
      </div>
    </div>
    <!--end::Heading-->

    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >Contact Phone</label
      >
      <div class="col-lg-9 col-xl-6">
        <div class="input-group input-group-lg input-group-solid">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="la la-phone"></i></span>
          </div>
          <input
            type="text"
            class="form-control form-control-lg form-control-solid"
            v-model="user.phone"
          />
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label"
        >Email Address</label
      >
      <div class="col-lg-9 col-xl-6">
        <div class="input-group input-group-lg input-group-solid">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="la la-at"></i></span>
          </div>
          <input
            type="text"
            class="form-control form-control-lg form-control-solid"
            v-model="user.email"
          />
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-xl-3 col-lg-3 text-right col-form-label">Address</label>
      <div class="col-lg-9 col-xl-6">
        <div class="input-group input-group-lg input-group-solid">
          <input
            type="text"
            class="form-control form-control-lg form-control-solid"
            v-model="user.address"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  name: "PersonalInformation",
  components: { Datepicker },
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        date_of_birth: ""
      }
    };
  }
};
</script>

<style scoped></style>
