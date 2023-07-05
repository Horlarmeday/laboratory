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
          <span class="menu-text"> Tests Results </span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/sample-type"
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
          <span class="menu-text"> Samples </span>
        </a>
      </li>
    </router-link>
    <!--    <li-->
    <!--      aria-haspopup="true"-->
    <!--      data-menu-toggle="click"-->
    <!--      class="menu-item menu-item-submenu menu-item-open-dropdown"-->
    <!--      v-bind:class="{ 'menu-item-active': hasActiveChildren('/admin/admin') }"-->
    <!--    >-->
    <!--      <a href="#" class="menu-link menu-toggle">-->
    <!--        <span class="menu-text"> Samples </span>-->
    <!--      </a>-->
    <!--      <div class="menu-submenu menu-submenu-classic">-->
    <!--        <ul class="menu-subnav">-->
    <!--          <li-->
    <!--            aria-haspopup="true"-->
    <!--            data-menu-toggle="hover"-->
    <!--            class="menu-item menu-item-submenu"-->
    <!--          >-->
    <!--            <a href="#" class="menu-link menu-toggle">-->
    <!--              <i class="menu-icon flaticon2-list-2"></i>-->
    <!--              <span class="menu-text"> Samples </span>-->
    <!--            </a>-->
    <!--          </li>-->
    <!--          <li-->
    <!--            aria-haspopup="true"-->
    <!--            data-menu-toggle="hover"-->
    <!--            class="menu-item menu-item-submenu"-->
    <!--            v-bind:class="{-->
    <!--              'menu-item-active': hasActiveChildren('/sample/sample')-->
    <!--            }"-->
    <!--          >-->
    <!--            <a href="#" class="menu-link menu-toggle">-->
    <!--              <i class="menu-icon flaticon2-mail-1"></i>-->
    <!--              <span class="menu-text"> Sample with Tests Association </span>-->
    <!--            </a>-->
    <!--          </li>-->
    <!--        </ul>-->
    <!--      </div>-->
    <!--    </li>-->
    <router-link
      to="/tests"
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
          <span class="menu-text"> Tests </span>
        </a>
      </li>
    </router-link>
    <!--    <li-->
    <!--      aria-haspopup="true"-->
    <!--      data-menu-toggle="click"-->
    <!--      class="menu-item menu-item-submenu menu-item-open-dropdown"-->
    <!--      v-bind:class="{ 'menu-item-active': hasActiveChildren('/error/error') }"-->
    <!--    >-->
    <!--      <a href="#" class="menu-link menu-toggle">-->
    <!--        <span class="menu-text"> Tests </span>-->
    <!--      </a>-->
    <!--      <div class="menu-submenu menu-submenu-classic">-->
    <!--        <ul class="menu-subnav">-->
    <!--          <li-->
    <!--            aria-haspopup="true"-->
    <!--            data-menu-toggle="hover"-->
    <!--            class="menu-item menu-item-submenu"-->
    <!--          >-->
    <!--            <a href="#" class="menu-link menu-toggle">-->
    <!--              <i class="menu-icon flaticon2-list-2"></i>-->
    <!--              <span class="menu-text"> Tests </span>-->
    <!--            </a>-->
    <!--          </li>-->
    <!--          <li-->
    <!--            aria-haspopup="true"-->
    <!--            data-menu-toggle="hover"-->
    <!--            class="menu-item menu-item-submenu"-->
    <!--            v-bind:class="{-->
    <!--              'menu-item-active': hasActiveChildren('/wizard/wizard')-->
    <!--            }"-->
    <!--          >-->
    <!--            <a href="#" class="menu-link menu-toggle">-->
    <!--              <i class="menu-icon flaticon2-mail-1"></i>-->
    <!--              <span class="menu-text"> Test Section </span>-->
    <!--            </a>-->
    <!--          </li>-->
    <!--          <li-->
    <!--            aria-haspopup="true"-->
    <!--            data-menu-toggle="hover"-->
    <!--            class="menu-item menu-item-submenu"-->
    <!--            v-bind:class="{-->
    <!--              'menu-item-active': hasActiveChildren('/wizard/wizard')-->
    <!--            }"-->
    <!--          >-->
    <!--            <a href="#" class="menu-link menu-toggle">-->
    <!--              <i class="menu-icon flaticon2-mail-1"></i>-->
    <!--              <span class="menu-text"> Test Result </span>-->
    <!--            </a>-->
    <!--          </li>-->
    <!--        </ul>-->
    <!--      </div>-->
    <!--    </li>-->
    <router-link to="#" v-slot="{ href, navigate, isActive, isExactActive }">
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
          <span class="menu-text"> Unit of Measure </span>
        </a>
      </li>
    </router-link>
    <router-link to="#" v-slot="{ href, navigate, isActive, isExactActive }">
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
          <span class="menu-text"> Staffs </span>
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Administrative",
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
};
</script>

<style scoped></style>
