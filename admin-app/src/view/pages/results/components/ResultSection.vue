<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Result</th>
          <th>Abnormal</th>
          <th>Referral Reason</th>
          <th>Institute</th>
          <th>Note</th>
        </tr>
      </thead>
    </table>
    <div class="accordion accordion-toggle-arrow" id="accordionExample1">
      <div class="card" v-for="(order, i) in orders" :key="order.lab_numb">
        <div class="card-header">
          <div class="card-title text-dark" v-b-toggle="`collapse-${i}`">
            <span class="mr-3">Lab No:</span>
            <span class="mr-3">{{ order.lab_numb }}</span>
            <span class="mr-3">Sample Type:</span
            ><span>{{ order.sample }}</span>
          </div>
        </div>
        <div>
          <b-collapse visible :id="`collapse-${i}`">
            <b-card>
              <table class="table">
                <tbody v-for="test in order.tests" :key="test.id">
                  <tr>
                    <th scope="row" align="middle">{{ test.name }}</th>
                    <td style="vertical-align: middle"></td>
                    <td>
                      <input type="text" class="" />
                    </td>
                    <td>
                      <input type="checkbox" class="" />
                    </td>
                    <td>
                      <div>
                        <input type="checkbox" class="mr-2" />
                        <select class="">
                          <option selected></option>
                          <option value="Referred Out">Referred Out</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <input type="text" class="" />
                    </td>
                    <td>
                      <textarea name="" class="" cols="20" rows="2" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </b-card>
          </b-collapse>
        </div>
      </div>
    </div>
    <div class="separator separator-solid mb-6"></div>
    <div class="text-center">
      <button class="btn btn-lg btn-primary">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultSection",
  data() {
    return {
      orders: [
        {
          sample: "Blood",
          lab_numb: "23112021-002 - 3",
          tests: [
            {
              id: 1,
              name: "PCV"
            },
            {
              id: 2,
              name: "Haemoglobin"
            }
          ]
        },
        {
          sample: "Urine",
          lab_numb: "23112021-002 - 2",
          tests: [
            {
              id: 1,
              name: "Cast"
            },
            {
              id: 2,
              name: "Crystal"
            }
          ]
        },
        {
          sample: "Serum",
          lab_numb: "23112021-002 - 1",
          tests: [
            {
              id: 1,
              name: "Glucose"
            },
            {
              id: 2,
              name: "APTT"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped></style>
