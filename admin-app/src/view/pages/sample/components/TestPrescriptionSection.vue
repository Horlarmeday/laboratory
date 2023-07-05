<template>
  <div class="d-flex flex-row mb-8">
    <sidebar
      :list="samples"
      @changeSample="changeSample"
      :backgroundColor="backgroundColor"
    />
    <component :is="activeTab" />
  </div>
</template>

<script>
import Tests from "./Tests";
import Sidebar from "./Sidebar";

export default {
  name: "TestPrescriptionSection",
  components: { Sidebar },
  data() {
    return {
      backgroundColor: "white",
      activeTab: "",
      samples: [
        {
          id: 1,
          name: "Blood"
        },
        {
          id: 2,
          name: "Urine"
        },
        {
          id: 3,
          name: "Stool"
        },
        {
          id: 4,
          name: "Pus"
        },
        {
          id: 5,
          name: "Vaginal Fluid"
        }
      ]
    };
  },
  methods: {
    changeTab() {
      this.activeTab = Tests;
    },
    changeSample(id) {
      console.log(id);
    }
  },
    created() {
        this.activeTab = Tests;
    }
};
</script>

<style scoped></style>
