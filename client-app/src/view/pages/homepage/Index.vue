<template>
  <div>
    <div class="mt-4 ml-6 mr-6">
      <h3 class="card-title align-items-start flex-column" style="display: inline-block">
        <span class="card-label font-weight-bolder text-dark"
          >Book Test</span
        >
      </h3>
      <div class="float-right">
        <router-link
          to="/book-test"
          class="btn btn-primary font-weight-bolder font-size-sm"
          >Book test</router-link
        >
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex flex-row mb-4">
        <sidebar
          :list="samples"
          @changeSample="changeSample"
          :backgroundColor="backgroundColor"
          :selectedTests="selectedTests"
        />
        <component :is="activeTab" @getSelected="selected" />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../content/components/PageTitle";
import Sidebar from "./components/Sidebar";
import Tests from "./components/Tests";

export default {
  name: "BookTest",
  components: { PageTitle, Sidebar },
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
      ],
      selectedTests: []
    };
  },
  methods: {
    changeTab() {
      this.activeTab = Tests;
    },
    changeSample(id) {
      console.log(id);
    },
    arrayRemove(arr, value) {
      return arr.filter(function(element) {
        return element != value;
      });
    },
    selected(test) {
      const found = this.selectedTests.find(element => element === test);
      if (found) {
        this.selectedTests = this.arrayRemove(this.selectedTests, found);
      } else {
        this.selectedTests.push(test);
      }
    }
  },
  created() {
    this.activeTab = Tests;
  },
  computed: {
    totalPrice() {
      return this.selectedTests.reduce((a, b) => a + +b.price, 0);
    }
  }
};
</script>

<style scoped></style>
