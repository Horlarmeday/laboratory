<template>
  <div class="d-flex align-items-center flex-wrap mt-8 mb-8">
    <!--begin::Item-->
    <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
      <span class="mr-4">
        <i class="flaticon-piggy-bank display-4 text-muted font-weight-bold" />
      </span>
      <div class="d-flex flex-column text-dark-75">
        <span class="font-weight-bolder font-size-sm">Patient ID</span>
        <span class="font-weight-bolder font-size-h5"
          ><span class="text-dark-50 font-weight-bold"></span>{{`PTF000${user.id}`}}</span
        >
      </div>
    </div>
    <!--end::Item-->

    <!--begin::Item-->
    <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
      <span class="mr-4">
        <i class="flaticon-confetti display-4 text-muted font-weight-bold" />
      </span>
      <div class="d-flex flex-column text-dark-75">
        <span class="font-weight-bolder font-size-sm">First Name</span>
        <span class="font-weight-bolder font-size-h5"
          ><span class="text-dark-50 font-weight-bold"></span>{{ user.name }}</span
        >
      </div>
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
      <span class="mr-4">
        <i class="flaticon-file-2 display-4 text-muted font-weight-bold" />
      </span>
      <div class="d-flex flex-column flex-lg-fill">
        <span class="text-dark-75 font-weight-bolder font-size-sm">Gender</span>
        <a href="#" class="text-primary font-weight-bolder">{{ user.gender }}</a>
      </div>
    </div>
    <!--end::Item-->
  </div>
</template>

<script>
export default {
  name: "PatientSection",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
