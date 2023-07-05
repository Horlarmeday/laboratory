<template>
  <div>
    <div class="card card-custom gutter-b">
      <page-title title="Patient Information" />
      <div class="card-body">
        <div class="justify-content-center">
          <div class="form-group">
            <label>Name</label>
            <input
              v-validate="'required'"
              data-vv-validate-on="blur"
              type="text"
              class="form-control form-control-solid form-control-lg"
              placeholder="Enter Patient Name"
              v-model="patient.name"
              name="name"
            />
            <span class="text-danger text-sm">{{ errors.first("name") }}</span>
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input
              v-validate="'required'"
              data-vv-validate-on="blur"
              type="text"
              class="form-control form-control-solid form-control-lg"
              placeholder="Enter Patient Phone"
              v-model="patient.phone"
              name="phone"
            />
            <span class="text-danger text-sm">{{ errors.first("phone") }}</span>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              v-validate="'required'"
              data-vv-validate-on="blur"
              type="email"
              class="form-control form-control-solid form-control-lg"
              placeholder="Enter Patient Email"
              v-model="patient.email"
              name="email"
            />
            <span class="text-danger text-sm">{{ errors.first("email") }}</span>
          </div>
          <div class="form-group">
            <label>Date of Birth</label>
            <datepicker
              v-validate="'required'"
              data-vv-validate-on="blur"
              input-class="form-control form-control-solid form-control-lg"
              placeholder="Enter Patient Date of Birth"
              v-model="patient.date_of_birth"
              name="date_of_birth"
            />
            <span class="text-danger text-sm">{{
              errors.first("date_of_birth")
            }}</span>
          </div>
          <div class="form-group">
            <label>Gender</label>
            <select
              class="form-control form-control-solid form-control-lg"
              v-model="patient.gender"
              v-validate="'required'"
              name="gender"
              data-vv-validate-on="blur"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <span class="text-danger text-sm">{{
              errors.first("gender")
            }}</span>
          </div>
          <a
            href="#"
            style="margin-left: 40%"
            class="btn btn-lg btn-primary float-center"
          @click="addPatient">
            Next
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import PageTitle from "../../../utils/PageTitle";
export default {
  name: "CreateUser",
  components: {
    PageTitle,
    Datepicker
  },
  data() {
    return {
      patient: {
        name: "",
        date_of_birth: "",
        email: "",
        phone: "",
        gender: ""
      }
    };
  },
  methods: {
    async addPatient() {
      await this.$store.dispatch("order/addPatient", this.patient);
      await this.$router.push("/make-payment");
    }
  }
};
</script>

<style scoped></style>
