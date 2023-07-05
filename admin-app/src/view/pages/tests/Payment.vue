<template>
  <div class="card card-custom gutter-b">
    <page-title title="Payment Information" />
    <div class="card-body">
      <div class="table-responsive">
        <table
          class="table table-head-custom table-head-bg table-borderless table-vertical-center"
        >
          <thead>
            <tr>
              <th>S/N</th>
              <th>Test Name</th>
              <th>Price(₦)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(test, i) in selectedTests" :key="i">
              <td>{{ i + 1 }}</td>
              <td>{{ test.name }}</td>
              <td>
                {{ Number(test.price).toLocaleString() }}
              </td>
            </tr>
          </tbody>
        </table>
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
      <button
        @click="submit"
        style="margin-left: 40%"
        class="btn btn-lg btn-primary float-center"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../../utils/PageTitle";
export default {
  name: "Payment",
  components: { PageTitle },
  data() {
    return {
      amount_paid: "",
      mode_of_payment: ""
    };
  },
  computed: {
    selectedTests() {
      return this.$store.state.order.selectedTests;
    },
    patient() {
      return this.$store.state.order.patient;
    }
  },
  methods: {
    submit() {
      this.$store
        .dispatch("order/orderLabTest", this.mapTest())
        .then(() => {
          this.emptyValues();
          this.$router.push("/dashboard");
        })
        .catch(e => console.log(e));
    },
    emptyValues() {
      this.$store.dispatch("order/emptySelectedTest");
      this.$store.dispatch("order/EMPTY_PATIENT");
    },
    mapTest() {
      return {
        tests: this.selectedTests,
        patient: this.patient
      };
    }
  }
};
</script>

<style scoped></style>
