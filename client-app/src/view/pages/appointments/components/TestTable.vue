<template>
  <div class="card-body">
    <div class="table-responsive">
      <table
        class="table table-head-custom table-head-bg table-borderless table-vertical-center"
      >
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Sample Type</th>
            <th>Price(₦)</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(test, i) in tests" :key="i">
            <td>{{ test.name }}</td>
            <td>
              {{ test.sample.name }}
            </td>
            <td>
              {{ Number(test.price).toLocaleString() }}
            </td>
            <td>
              {{ test.createdAt | moment("ddd, MMM Do YYYY") }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestTable",
  data() {
    return {
      tests: [
        {
          name: "VDRL",
          description: "VDRL Test",
          sample: {
            name: "Blood"
          },
          test_section: "Biochemistry Department",
          createdAt: "2021-11-25T06:35:00.497Z",
          price: "2000.00",
        },
        {
          name: "MP",
          description: "Malaria Parasite",
          sample: {
            name: "Blood"
          },
          test_section: "Biochemistry Department",
          createdAt: "2021-11-25T06:35:00.497Z",
          price: "4000.00"
        },
        {
          name: "APTT",
          description: "APTT Control Serum",
          sample: {
            name: "Serum"
          },
          test_section: "Microbiology Department",
          createdAt: "2021-11-25T06:35:00.497Z",
          price: "5000.00"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
