<template>
  <div>
    <div class="table-responsive">
      <table
        class="table table-head-custom table-head-bg table-borderless table-vertical-center"
      >
        <thead>
          <tr>
            <th>Lab No</th>
            <th>Test Name</th>
            <th>Result</th>
            <th>Abnormal</th>
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, i) in results" :key="i">
            <td>{{ lab_no }}</td>
            <td>{{ result.test }}</td>
            <td>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="result.result"
              />
            </td>
            <td>
              <input type="checkbox" :checked="result.isAbnormal" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="separator separator-solid mb-6"></div>
    <div>
      <label>Lab Result Notes</label>
      <textarea
        class="form-control-sm form-control mb-6"
        id=""
        cols="30"
        rows="5"
      />
      <button class="btn btn-lg btn-primary">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultValidationSection",
  data() {
    return {
      lab_no: "23112021-002",
      results: [
        {
          test: "PCV",
          result: "23.4",
          isAbnormal: true
        },
        {
          test: "Haemoglobin",
          result: "9.45",
          isAbnormal: false
        },
        {
          test: "Cast",
          result: "8.4",
          isAbnormal: false
        },
        {
          test: "Crystal",
          result: "27.2",
          isAbnormal: true
        },
        {
          test: "Glucose",
          result: "3.1",
          isAbnormal: true
        },
        {
          test: "APTT",
          result: "2.4",
          isAbnormal: false
        }
      ]
    };
  }
};
</script>

<style scoped></style>
