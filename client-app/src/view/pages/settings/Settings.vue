<template>
  <div class="card card-custom gutter-bs">
    <!--Begin::Header-->
    <div class="card-header card-header-tabs-line">
      <div class="card-toolbar">
        <ul
          class="nav nav-tabs nav-tabs-space-lg nav-tabs-line nav-tabs-bold nav-tabs-line-3x "
          role="tablist"
        >
          <li class="nav-item mr-3">
            <a
              class="nav-link active"
              data-toggle="tab"
              href="#kt_apps_contacts_view_tab_2"
            >
              <span class="nav-icon mr-2">
                <user-icon />
              </span>
              <span class="nav-text font-weight-bold">Personal</span>
            </a>
          </li>
          <li class="nav-item mr-3">
            <a
              class="nav-link"
              data-toggle="tab"
              href="#kt_apps_contacts_view_tab_3"
            >
              <span class="nav-icon mr-2">
                <notification />
              </span>
              <span class="nav-text font-weight-bold">Settings</span>
            </a>
          </li>
          <li class="nav-item mr-3">
            <a
              class="nav-link"
              data-toggle="tab"
              href="#kt_apps_contacts_view_tab_4"
            >
              <span class="nav-icon mr-2">
                <lock-icon />
              </span>
              <span class="nav-text font-weight-bold">Change Password</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              href="#kt_apps_contacts_view_tab_1"
            >
              <span class="nav-icon mr-2">
                <account-icon />
              </span>
              <span class="nav-text font-weight-bold">Account</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--end::Header-->

    <!--Begin::Body-->
    <div class="card-body px-0">
      <div class="tab-content pt-5">
        <!--begin::Tab Content-->
        <div
          class="tab-pane active"
          id="kt_apps_contacts_view_tab_2"
          role="tabpanel"
        >
          <personal-information />
        </div>
        <!--end::Tab Content-->

        <!--begin::Tab Content-->
        <div class="tab-pane" id="kt_apps_contacts_view_tab_3" role="tabpanel">
          <notifications />
        </div>
        <!--end::Tab Content-->

        <!--begin::Tab Content-->
        <div class="tab-pane" id="kt_apps_contacts_view_tab_4" role="tabpanel">
          <change-password />
        </div>
        <!--end::Tab Content-->

        <!--begin::Tab Content-->
        <div class="tab-pane" id="kt_apps_contacts_view_tab_1" role="tabpanel">
          <account />
        </div>
        <!--end::Tab Content-->
      </div>
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import UserIcon from "../../content/components/UserIcon";
import Notification from "../../content/components/Notification";
import LockIcon from "../../content/components/LockIcon";
import AccountIcon from "../../content/components/AccountIcon";
import PersonalInformation from "./components/PersonalInformation";
import Notifications from "./components/Notifications";
import ChangePassword from "./components/ChangePassword";
import Account from "./components/Account";
export default {
  name: "Settings",
  components: {
    Account,
    ChangePassword,
    Notifications,
    PersonalInformation,
    AccountIcon,
    LockIcon,
    Notification,
    UserIcon
  }
};
</script>

<style scoped></style>
