<template>
  <div>
    <div
      class="flex-row-auto offcanvas-mobile w-xl-250px"
      id="kt_profile_aside"
      style="border-right: 2px solid #f1f1f1"
    >
      <div class="">
        <div class="pt-4 p-0">
          <div
            class="navi navi-bold navi-hover navi-active navi-link-rounded"
            :style="{ backgroundColor: backgroundColor }"
          >
            <div
              class="navi-item mb-2 border-bottom"
              v-for="(data, i) in list"
              :key="i"
            >
              <a
                href="#"
                @click="switchTab(data.id, $event)"
                :data-active="i"
                class="navi-link"
              >
                <span class="navi-text font-size-lg p-0">
                  {{ data.name }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <selected-tests
      v-if="selectedTests.length"
      :selected-tests="selectedTests"
    />
  </div>
</template>

<script>
import SelectedTests from "./SelectedTests";
export default {
  name: "Sidebar",
  components: { SelectedTests },
  data() {
    return {
      sBackgroundColor: "#3699ff29",
      tabIndex: 0
    };
  },
  props: {
    list: { type: Array, required: true, default: () => [] },
    backgroundColor: { type: String },
    selectedTests: { Array, default: () => [] }
  },
  methods: {
    setActiveTab(event) {
      let target = event.target;
      if (!event.target.classList.contains("navi-link")) {
        target = event.target.closest(".navi-link");
      }

      // const tab = target.closest('[role="tablist"]');
      const links = document.querySelectorAll(".navi-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(target.getAttribute("data-active"));

      // set current active tab
      target.classList.add("active");
    },
    switchTab(id, event) {
      this.$emit("changeSample", id);
      this.setActiveTab(event);
    }
  }
};
</script>

<style scoped></style>
