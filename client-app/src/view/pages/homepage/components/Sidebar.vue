<template>
  <div>
    <div
      class="flex-row-auto offcanvas-mobile w-300px w-xl-350px"
      id="kt_profile_aside"
     style="height: 100vh">
      <div class="card card-custom card-stretch">
        <div class="card-body">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
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
