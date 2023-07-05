<template>
  <div class="card-header">
    <div class="card-title">
      <h3 class="card-label">{{ title }}</h3>
    </div>
    <div class="card-toolbar">
      <div class="example-tools justify-content-center">
        <span
          data-toggle="tooltip"
          class="example-toggle example-toggled"
        /><span data-toggle="tooltip" class="example-copy" />
      </div>
      <router-link v-if="showRoute" :to="url" class="btn btn-primary">{{ buttonText }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: {
      type: String,
      required: true
    },
    showRoute: {
      type: Boolean,
      required: false
    },
    url: {
      type: String,
      required: false
    },
    buttonText: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped></style>
