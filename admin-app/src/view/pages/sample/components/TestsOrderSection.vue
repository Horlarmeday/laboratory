<template>
  <table class="table table-striped mb-8">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Sample Type</th>
        <th scope="col">Tests</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{{ 1 }}</th>
        <td>Blood</td>
        <td>
          <span v-for="(t, i) in orders" class="mr-2" :key="i"
            >{{ t.name }},</span
          >
        </td>
        <td><i class="flaticon2-trash text-danger" /></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TestsOrder",
  data() {
    return {
      i: ""
    };
  },
  props: {
    orders: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>
