<template>
  <div class="card card-custom card-transparent">
    <div class="card-body p-0">
      <!--begin: Wizard-->
      <div
        class="wizard wizard-4"
        id="kt_wizard_v4"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
      >
        <!--begin: Wizard Nav-->
        <div class="wizard-nav">
          <div class="wizard-steps">
            <div
              class="wizard-step"
              data-wizard-type="step"
              data-wizard-state="current"
            >
              <div class="wizard-wrapper">
                <div class="wizard-number">
                  1
                </div>
                <div class="wizard-label">
                  <div class="wizard-title">
                    Select Tests
                  </div>
                  <div class="wizard-desc">
                    Pick Test Samples
                  </div>
                </div>
              </div>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-wrapper">
                <div class="wizard-number">
                  2
                </div>
                <div class="wizard-label">
                  <div class="wizard-title">
                    Checkout
                  </div>
                  <div class="wizard-desc">
                    Enter Customer Payment
                  </div>
                </div>
              </div>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-wrapper">
                <div class="wizard-number">
                  3
                </div>
                <div class="wizard-label">
                  <div class="wizard-title">
                    Completed
                  </div>
                  <div class="wizard-desc">
                    Review and Submit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end: Wizard Nav -->

        <!--begin: Wizard Body-->
        <div class="card card-custom card-shadowless rounded-top-0">
          <div class="card-body p-0">
            <div class="row justify-content-center py-8 px-8 py-lg-15 px-lg-10">
              <div class="col-xl-12 col-xxl-7">
                <!--begin: Wizard Form-->
                <div class="form mt-0 mt-lg-10" id="kt_form">
                  <!--begin: Wizard Step 1-->
                  <div
                    class="pb-5"
                    data-wizard-type="step-content"
                    data-wizard-state="current"
                  >
                    <book-test />
                  </div>
                  <!--end: Wizard Step 1-->

                  <!--begin: Wizard Step 2-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <div class="mb-10 font-weight-bold text-dark">
                      Enter Payment
                    </div>
                    <div class="form-group">
                      <label>Amount</label>
                      <input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        type="number"
                        class="form-control form-control-solid form-control-lg"
                        placeholder="Enter Amount Paid"
                        v-model="amount_paid"
                        name="amount_paid"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("amount_paid")
                      }}</span>
                    </div>
                    <div class="form-group">
                      <label>Mode of Payment</label>
                      <select
                        class="form-control form-control-solid form-control-lg"
                        v-model="mode_of_payment"
                        v-validate="'required'"
                        name="mode_of_payment"
                        data-vv-validate-on="blur"
                      >
                        <option value="Cash">Cash</option>
                        <option value="Transfer">Transfer</option>
                        <option value="POS">POS</option>
                      </select>
                      <span class="text-danger text-sm">{{
                        errors.first("mode_of_payment")
                      }}</span>
                    </div>
                  </div>
                  <!--end: Wizard Step 2-->

                  <!--begin: Wizard Step 4-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <div class="mb-10 font-weight-bold text-dark">
                      Review your Details and Submit
                    </div>

<!--                    <div>-->
<!--                      <div class="row justify-content-center px-8 px-md-0 mx-0">-->
<!--                        <div class="col-md-10">-->
<!--                          <div-->
<!--                            class="d-flex justify-content-between flex-column flex-md-row"-->
<!--                          >-->
<!--                            <h1 class="display-4 font-weight-boldest mb-10">-->
<!--                              SUMMARY-->
<!--                            </h1>-->
<!--                          </div>-->
<!--                          <div class="border-bottom w-100"></div>-->
<!--                          <div class="d-flex justify-content-between pt-6">-->
<!--                            <div class="d-flex flex-column flex-root">-->
<!--                              <span class="font-weight-bolder mb-2"-->
<!--                                >CUSTOMER NAME</span-->
<!--                              >-->
<!--                              <span class="opacity-70">{{-->
<!--                                customer_id.name-->
<!--                              }}</span>-->
<!--                            </div>-->
<!--                            <div-->
<!--                              class="d-flex flex-column flex-root float-right"-->
<!--                            >-->
<!--                              <span class="font-weight-bolder mb-2"-->
<!--                                >PHONE NO.</span-->
<!--                              >-->
<!--                              <span class="opacity-70">{{-->
<!--                                customer_id.phone-->
<!--                              }}</span>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div-->
<!--                        class="row justify-content-center py-8 px-8 py-md-10 px-md-0"-->
<!--                      >-->
<!--                        <div class="col-md-10">-->
<!--                          <div class="table-responsive">-->
<!--                            <table class="table">-->
<!--                              <thead>-->
<!--                                <tr>-->
<!--                                  <th-->
<!--                                    class="pl-0 font-weight-bold text-muted text-uppercase"-->
<!--                                  >-->
<!--                                    Room-->
<!--                                  </th>-->
<!--                                  <th-->
<!--                                    class="text-right pr-0 font-weight-bold text-muted text-uppercase"-->
<!--                                  >-->
<!--                                    Amount-->
<!--                                  </th>-->
<!--                                </tr>-->
<!--                              </thead>-->
<!--                              <tbody>-->
<!--                                <tr v-if="room_id" class="font-weight-boldest">-->
<!--                                  <td-->
<!--                                    class="border-0 pl-0 pt-7 d-flex align-items-center"-->
<!--                                  >-->
<!--                                    {{ room_id.title }}-->
<!--                                  </td>-->
<!--                                  <td class="pr-0 pt-7 text-right align-middle">-->
<!--                                    ₦{{ room_id.price.toLocaleString() }}-->
<!--                                  </td>-->
<!--                                </tr>-->
<!--                                <p v-if="pickedAddon.length">Addons</p>-->
<!--                                <tr-->
<!--                                  class="font-weight-boldest"-->
<!--                                  v-for="(add, i) in pickedAddon"-->
<!--                                  :key="i"-->
<!--                                >-->
<!--                                  <td-->
<!--                                    class="border-0 pl-0 pt-7 d-flex align-items-center"-->
<!--                                  >-->
<!--                                    {{ add.name }}-->
<!--                                  </td>-->
<!--                                  <td class="pr-0 pt-7 text-right align-middle">-->
<!--                                    ₦{{ add.price.toLocaleString() }}-->
<!--                                  </td>-->
<!--                                </tr>-->
<!--                              </tbody>-->
<!--                            </table>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div-->
<!--                        class="row justify-content-center bg-gray-100 py-8 px-8 py-md-10 px-md-0 mx-0"-->
<!--                      >-->
<!--                        <div class="col-md-10">-->
<!--                          <div class="table-responsive">-->
<!--                            <table class="table">-->
<!--                              <thead>-->
<!--                                <tr>-->
<!--                                  <th-->
<!--                                    class="font-weight-bold text-muted text-uppercase"-->
<!--                                  >-->
<!--                                    PAYMENT METHOD-->
<!--                                  </th>-->
<!--                                  <th-->
<!--                                    class="font-weight-bold text-muted text-uppercase"-->
<!--                                  >-->
<!--                                    TOTAL PAID-->
<!--                                  </th>-->
<!--                                  <th-->
<!--                                    class="font-weight-bold text-muted text-uppercase"-->
<!--                                  >-->
<!--                                    AMOUNT DUE-->
<!--                                  </th>-->
<!--                                  <th-->
<!--                                    class="font-weight-bold text-muted text-uppercase text-right"-->
<!--                                  >-->
<!--                                    AMOUNT REMAINING-->
<!--                                  </th>-->
<!--                                </tr>-->
<!--                              </thead>-->
<!--                              <tbody>-->
<!--                                <tr class="font-weight-bolder">-->
<!--                                  <td>{{ mode_of_payment }}</td>-->
<!--                                  <td>{{ amount_paid.toLocaleString() }}</td>-->
<!--                                  <td>{{ totalDue.toLocaleString() }}</td>-->
<!--                                  <td-->
<!--                                    class="text-primary font-size-h3 font-weight-boldest text-right"-->
<!--                                  >-->
<!--                                    {{ amountRemaining.toLocaleString() }}-->
<!--                                  </td>-->
<!--                                </tr>-->
<!--                              </tbody>-->
<!--                            </table>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
                  </div>
                  <!--end: Wizard Step 4-->

                  <!--begin: Wizard Actions -->
                  <div class="d-flex justify-content-between border-top pt-10">
                    <div class="mr-2">
                      <button
                        class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                        data-wizard-type="action-prev"
                      >
                        Previous
                      </button>
                    </div>
                    <div>
                      <button
                        ref="kt_booking_submit"
                        v-on:click="createBooking"
                        class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                        data-wizard-type="action-submit"
                        :disabled="isDisabled"
                      >
                        Submit
                      </button>
                      <button
                        class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                        data-wizard-type="action-next"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                  <!--end: Wizard Actions -->
                </div>
                <!--end: Wizard Form-->
              </div>
            </div>
          </div>
        </div>
        <!--end: Wizard Bpdy-->
      </div>
      <!--end: Wizard-->
    </div>
  </div>
</template>

<script>
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";
// import Datepicker from "vuejs-datepicker";
// import vSelect from "vue-select";
// import { arrayRemove } from "../../../helper";
import BookTest from "./BookTest";

export default {
  name: "CreateBooking",
  components: {
      BookTest,
    // Datepicker,
    // vSelect
  },
  data() {
    return {
      customer_id: "",
      room_id: "",
      start_date: "",
      price: "",
      end_date: "",
      amount_paid: "",
      mode_of_payment: "",
      show_addons: false,
      isDisabled: false,
      pickedAddon: []
    };
  },
  mounted() {
    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v4", {
      startStep: 1, // initial active step number
      clickableSteps: true // allow step clicking
    });

    // Validation before going to next page
    wizard.on("beforeNext", function(wizardObj) {
      // validate the form and use below function to stop the wizard's step
      wizardObj.stop();
    });

    // Change event
    wizard.on("change", function(/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  },
  methods: {
    addSpinner(submitButton) {
      this.isDisabled = true;
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
    },

    removeSpinner(submitButton) {
      this.isDisabled = false;
      submitButton.classList.remove(
        "spinner",
        "spinner-light",
        "spinner-right"
      );
    },

    popUp() {
      Swal.fire({
        title: "",
        text: "The booking has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary"
      }).then(() => {});
    },
    initializeRequest(button) {
      this.removeSpinner(button);
      this.initValues();
      this.$router.push(`/bookings`);
    },
    createBooking() {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            amount_due: this.totalDue,
            customer_id: this.customer_id.id,
            room_id: this.room_id.id,
            start_date: this.start_date,
            end_date: this.end_date,
            amount_paid: +this.amount_paid,
            mode_of_payment: this.mode_of_payment,
            addons: this.pickedAddon
          };
          // set spinner to submit button
          const submitButton = this.$refs["kt_booking_submit"];
          this.addSpinner(submitButton);

          this.$store
            .dispatch("booking/addBooking", obj)
            .then(() => this.initializeRequest(submitButton))
            .catch(() => this.removeSpinner(submitButton));
        }
      });
    },
    initValues() {
      this.customer_id = "";
      this.room_id = "";
      this.start_date = "";
      this.amount_due = "";
      this.end_date = "";
      this.amount_paid = "";
      this.mode_of_payment = "";
      this.pickedAddon = "";
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/pages/wizard/wizard-4.scss";
</style>
