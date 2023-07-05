<template>
  <div style="background: aliceblue" class="mb-6">
    <div class="separator separator-solid"></div>
    <h5 class="text-primary mt-3">{{ text }}</h5>
    <div class="separator separator-solid mb-6"></div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
