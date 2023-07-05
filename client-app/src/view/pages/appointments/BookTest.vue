<template>
  <div>
    <div class="card card-custom gutter-b">
      <page-title title="Book Test" />
      <div class="d-flex flex-row mb-8">
        <sidebar
          :list="samples"
          @changeSample="changeSample"
          :backgroundColor="backgroundColor"
          :selectedTests="selectedTests"
        />
        <component :is="activeTab" @getSelected="selected" />
      </div>
      <div class="separator separator-solid mb-6"></div>
      <div class="m-3">
        <p
          v-if="selectedTests.length"
          style="display: inline-block"
          class="ml-8"
        >
          Total:
          <span class="font-weight-boldest font-size-lg ml-8">₦{{ totalPrice.toLocaleString() }}</span>
        </p>
        <button
          style="margin-left: 40%"
          class="btn btn-lg btn-primary float-center"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Tests from "./components/Tests";
import Sidebar from "./components/Sidebar";
import PageTitle from "../../content/components/PageTitle";

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
