export default {
  ADD_STAFF(state, staff) {
    state.staffs.push(staff);
  },

  SET_STAFFS(state, staffs) {
    state.staffs = staffs;
  },

  SET_STAFFS_TOTAL(state, total) {
    state.total = total;
  },

  SET_NUMB_PAGES(state, pages) {
    state.pages = pages;
  },

  SET_STAFF(state, staff) {
    state.staff = staff;
  },

  UPDATE_STAFF(state, staff) {
    const staffIndex = state.staffs.findIndex(s => s.id === staff.id);
    Object.assign(state.staffs[staffIndex], staff);
  }
};
