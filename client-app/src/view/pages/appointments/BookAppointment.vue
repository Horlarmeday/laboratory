<template>
  <div class="card card-custom gutter-b card-stretch">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Book Appointment</span
        >
      </h3>
    </div>
    <div class="card-body">
      <div class="form">
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 text-right col-form-label"
            >Appointment Date</label
          >
          <div class="col-lg-9 col-xl-6">
            <datepicker
              v-model="appointment_date"
              input-class="form-control form-control-lg form-control-solid"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 text-right col-form-label"
            >Available Slots</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="row">
              <div
                class="col-lg-3"
                v-for="(slot, i) in available_slots"
                :key="i"
              >
                <button
                  @click="selectTime(slot, i)"
                  ref="selected"
                  class="btn btn-outline-primary btn-block btn-sm mb-4"
                >
                  {{ slot }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 text-right col-form-label"
            >Samples</label
          >
          <div class="col-lg-9 col-xl-6">
            <select
              v-model="sample_id"
              class="form-control form-control-lg form-control-solid"
              @change="selectTest"
            >
              <option>Select</option>
              <option
                v-for="sample in samples"
                :key="sample.id"
                :value="sample.id"
                >{{ sample.name }}</option
              >
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 text-right col-form-label"
            >Tests</label
          >
          <div class="col-lg-9 col-xl-6">
            <select
              v-model="test_id"
              class="form-control form-control-lg form-control-solid"
            >
              <option>Select</option>
              <option
                :value="test.id"
                v-for="test in selectedTests"
                :key="test.id"
                >{{ test.name }}</option
              >
            </select>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-xl-4 col-lg-4 text-right col-form-label">
            <button class="btn btn-lg btn-primary btn-elevate">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  name: "BookAppointment",
  components: { Datepicker },
  data() {
    return {
      appointment_date: "",
      appointment_time: "",
      sample_id: "",
      test_id: "",
      available_slots: [
        "09:00am",
        "10:00am",
        "11:00am",
        "12:00pm",
        "01:00pm",
        "02:00pm",
        "03:00pm",
        "04:00pm",
        "05:00pm"
      ],
      samples: [
        {
          id: 1,
          name: "Blood"
        },
        {
          id: 2,
          name: "Stool"
        }
      ],
      tests: [
        {
          id: 1,
          sample_id: 1,
          name: "MP",
          price: 500
        },
        {
          id: 2,
          sample_id: 1,
          name: "Malaria Parasite",
          price: 400
        },
        {
          id: 3,
          sample_id: 2,
          name: "Stool Test",
          price: 700
        },
        {
          id: 4,
          sample_id: 2,
          name: "HCV",
          price: 800
        }
      ],
      selectedTests: []
    };
  },
  methods: {
    addSelectedClass(button) {
      button.classList.add("btn-danger");
    },

    removeSelectedClass(button) {
      button.classList.remove("btn-danger");
    },

    selectTest() {
      this.selectedTests = this.tests.filter(
        test => test.sample_id === this.sample_id
      );
    },

    selectTime(value, i) {
      const button = this.$refs["selected"][i];
      console.log(button.innerHTML);
      if (button.innerHTML === this.appointment_time) {
        this.removeSelectedClass(button);
      } else {
        this.addSelectedClass(button);
      }
    }
  }
};
</script>

<style scoped></style>
