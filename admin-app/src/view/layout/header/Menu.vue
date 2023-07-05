<template>
  <ul class="menu-nav">
    <router-link
      to="/dashboard"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <span class="menu-text"> Dashboard </span>
        </a>
      </li>
    </router-link>
    <li
      aria-haspopup="true"
      data-menu-toggle="click"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/error/error') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> Sample </span>
      </a>
      <div class="menu-submenu menu-submenu-classic">
        <ul class="menu-subnav">
          <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
          >
            <a href="#" class="menu-link menu-toggle">
              <i class="menu-icon flaticon2-list-2"></i>
              <span class="menu-text"> Add Sample </span>
            </a>
          </li>
          <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
            v-bind:class="{
              'menu-item-active': hasActiveChildren('/wizard/wizard')
            }"
          >
            <a href="#" class="menu-link menu-toggle">
              <i class="menu-icon flaticon2-mail-1"></i>
              <span class="menu-text"> Edit </span>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li
      aria-haspopup="true"
      data-menu-toggle="click"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/error/error') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> Patients </span>
      </a>
      <div class="menu-submenu menu-submenu-classic">
        <ul class="menu-subnav">
          <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
          >
            <a href="#" class="menu-link menu-toggle">
              <i class="menu-icon flaticon2-list-2"></i>
              <span class="menu-text"> Add Patient </span>
            </a>
          </li>
          <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
            v-bind:class="{
              'menu-item-active': hasActiveChildren('/wizard/wizard')
            }"
          >
            <a href="#" class="menu-link menu-toggle">
              <i class="menu-icon flaticon2-mail-1"></i>
              <span class="menu-text"> Edit </span>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li
      aria-haspopup="true"
      data-menu-toggle="click"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/error/error') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> Results </span>
      </a>
      <div class="menu-submenu menu-submenu-classic">
        <ul class="menu-subnav">
          <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
          >
            <a href="#" class="menu-link menu-toggle">
              <i class="menu-icon flaticon2-list-2"></i>
              <span class="menu-text"> Search </span>
              <i class="menu-arrow"></i>
            </a>
            <div class="menu-submenu menu-submenu-classic menu-submenu-right">
              <ul class="menu-subnav">
                <router-link
                  to="/error/error-1"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> By Name </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/error/error-2"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Accession Number </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/error/error-3"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> By Status </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </div>
          </li>
          <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
            v-bind:class="{
              'menu-item-active': hasActiveChildren('/wizard/wizard')
            }"
          >
            <a href="#" class="menu-link menu-toggle">
              <i class="menu-icon flaticon2-mail-1"></i>
              <span class="menu-text"> Departments </span>
              <i class="menu-arrow"></i>
            </a>
            <div class="menu-submenu menu-submenu-classic menu-submenu-right">
              <ul class="menu-subnav">
                <router-link
                  to="/wizard/wizard-1"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Microbiology Department </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/wizard/wizard-2"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Heamatology Department </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/wizard/wizard-3"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Biochemistry Department </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </div>
          </li>
          <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
            v-bind:class="{
              'menu-item-active': hasActiveChildren('/wizard/wizard')
            }"
          >
            <a href="#" class="menu-link menu-toggle">
              <i class="menu-icon flaticon2-mail-1"></i>
              <span class="menu-text"> Referred </span>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <router-link
      to="/builder"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <span class="menu-text"> Validations </span>
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "KTMenu",
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
};
</script>
