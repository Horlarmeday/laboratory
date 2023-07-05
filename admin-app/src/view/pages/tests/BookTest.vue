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
          <span class="font-weight-boldest font-size-lg ml-8"
            >₦{{ totalPrice.toLocaleString() }}</span
          >
        </p>
        <router-link
          to="/create-user"
          style="margin-left: 40%"
          class="btn btn-lg btn-primary float-center"
        >
          Next
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Tests from "./components/Tests";
import PageTitle from "../../../utils/PageTitle";
import axios from "../../../axios";

export default {
  name: "BookTest",
  components: { PageTitle, Sidebar },
  data() {
    return {
      backgroundColor: "white",
      activeTab: "",
      samples: [],
      // selectedTests: [],
      getSampleUrl: "/users/samples"
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
        this.$store.dispatch("order/removeSelectedTest", test);
      } else {
        this.$store.dispatch("order/addSelectedTest", test);
      }
      // const found = this.selectedTests.find(element => element === test);
      // if (found) {
      //   this.selectedTests = this.arrayRemove(this.selectedTests, found);
      // } else {
      //   this.selectedTests.push(test);
      // }
    },
    getSamples() {
      axios
        .get(this.getSampleUrl)
        .then(response => (this.samples = response.data.data.reverse()))
        .catch(e => console.log(e));
    }
  },
  created() {
    this.activeTab = Tests;
    this.getSamples();
  },
  computed: {
    totalPrice() {
      return this.selectedTests.reduce((a, b) => a + +b.price, 0);
    },
    selectedTests() {
      return this.$store.state.order.selectedTests;
    }
  }
};
</script>

<style scoped></style>
