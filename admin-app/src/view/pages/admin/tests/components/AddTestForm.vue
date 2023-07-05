<template>
  <div class="card-body">
    <div class="form-group row">
      <label class="col-lg-3 col-form-label">Test Name:</label>
      <div class="col-lg-6">
        <input
          type="text"
          class="form-control"
          placeholder="Enter test name"
          v-model="name"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-lg-3 col-form-label">Sample type:</label>
      <div class="col-lg-6">
        <select v-model="sample_type" class="form-control form-control-sm">
          <option
            v-for="sample in samples"
            :value="sample.id"
            :key="sample.id"
            >{{ sample.name }}</option
          >
        </select>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-lg-3 col-form-label">Test Section:</label>
      <div class="col-lg-6">
        <select v-model="test_section" class="form-control form-control-sm">
          <option value="Haematology">Haematology Section</option>
          <option value="Microbiology">Microbiology Section</option>
          <option value="Biochemistry">Biochemistry Section</option>
          <option value="Histology">Histology Section</option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-lg-3 col-form-label">Test Description:</label>
      <div class="col-lg-6">
        <input
          type="text"
          class="form-control"
          placeholder="Enter description"
          v-model="description"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-lg-3 col-form-label">Test Price:</label>
      <div class="col-lg-6">
        <input
          type="text"
          class="form-control"
          placeholder="Enter test price"
          v-model="price"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-lg-3 col-form-label">Unit of Measure:</label>
      <div class="col-lg-6">
        <select v-model="unit_of_measure" class="form-control form-control-sm">
          <option value=""></option>
          <option value="82">ng/dl</option>
          <option value="83">ug/dl</option>
          <option value="84">ulU/ml</option>
          <option value="85">%</option>
          <option value="86">seconds</option>
          <option value="87">minutes</option>
          <option value="88">gm%</option>
          <option value="91">million/mm3</option>
          <option value="92">mm 1st hours</option>
          <option value="93">fl</option>
          <option value="94">pg</option>
          <option value="95">mg/dL</option>
          <option value="96">IU/L</option>
          <option value="97">mEq/dL</option>
          <option value="98">Meq/L</option>
          <option value="99">g/dL</option>
          <option value="100">ml</option>
          <option value="101">million/ml</option>
          <option value="102">cumm</option>
          <option value="103">sec</option>
          <option value="104">Iu/ml</option>
          <option value="105">u/ml</option>
          <option value="106">me/ql</option>
          <option value="107">u/L</option>
          <option value="108">ng/ml</option>
          <option value="109">pg/ml</option>
          <option value="110">Iu/L</option>
          <option value="111">nd/ml</option>
          <option value="112">mm/hour</option>
          <option value="113">gm/dl</option>
          <option value="114">NA</option>
          <option value="115">mmole/l</option>
          <option value="116">ratio</option>
          <option value="117">pg/mg</option>
          <option value="118">ng/mL</option>
          <option value="119">IU/ml</option>
          <option value="120">gm/l</option>
          <option value="121">n/L</option>
          <option value="122">U/L</option>
          <option value="123">umol/L</option>
          <option value="124">mIU/mL</option>
          <option value="125">micro/g</option>
        </select>
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" @click="addTest">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "../../../../../axios";

export default {
  name: "AddTestForm",
  data() {
    return {
      name: "",
      unit_of_measure: "",
      test_section: "",
      sample_type: "",
      description: "",
      price: "",
      samples: [],
      getSampleUrl: "/users/samples",
      addTestUrl: "/users/tests"
    };
  },
  methods: {
    getSamples() {
      axios
        .get(this.getSampleUrl)
        .then(response => (this.samples = response.data.data))
        .catch(e => console.log(e));
    },
    addTest() {
      const data = {
        name: this.name,
        test_section: this.test_section,
        sample_type: this.sample_type,
        price: this.price,
        description: this.description,
        unit_of_measure: this.unit_of_measure
      };
      axios
        .post(this.addTestUrl, data)
        .then(() => {
          this.initValues();
        })
        .catch(e => console.log(e));
    },
    initValues() {
      this.name = "";
      this.sample_type = "";
      this.test_section = "";
      this.unit_of_measure = "";
      this.name = "";
      this.description = "";
      this.price = ""
    }
  },
  created() {
    this.getSamples()
  }
};
</script>

<style scoped></style>
