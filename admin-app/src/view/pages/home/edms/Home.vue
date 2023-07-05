<template>
  <div>
<!--    <div class="row mb-4">-->
<!--      <div class="col-lg-12">-->
<!--        <div class="card">-->
<!--          <div class="card-body">-->
<!--            <div class="form-group mb-0">-->
<!--              <div class="input-group input-group-solid input-group-lg">-->
<!--                <input-->
<!--                  type="text"-->
<!--                  placeholder="Search for Documents"-->
<!--                  class="form-control"-->
<!--                />-->
<!--                <div class="input-group-append">-->
<!--                  <button type="button" class="btn btn-success">-->
<!--                    Search-->
<!--                  </button>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="row mb-10">
      <div class="col-lg-12">
        <div class="card card-custom gutter-b">
          <div class="card-header">
            <div class="card-title">
              <h3 class="card-label">Tests</h3>
            </div>
            <div class="card-toolbar">
              <div class="example-tools justify-content-center">
                <span
                  data-toggle="tooltip"
                  class="example-toggle example-toggled"
                /><span data-toggle="tooltip" class="example-copy"></span>
              </div>
            </div>
          </div>
          <b-tabs class="" justified>
            <b-tab title="Sample to Collect" active>
              <sample-to-collect />
            </b-tab>
            <b-tab title="Sample Collected">
              <sample-collected />
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SampleToCollect from "./SampleToCollect";
import SampleCollected from "./SampleCollected";
export default {
  components: {SampleCollected, SampleToCollect}
};
</script>

<style></style>
