<template>
  <div>
    <!-- ปุ่มสำหรับกำหนดค่า Router !!! header  -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand mr-auto">รายชื่อ</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navContent"
        aria-controls="navContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navContent">
        <ul class="navbar-nav ml-auto">
          <!-- เรียก Router -->
          <li class="nav-item">
            <router-link :to="{name: 'nameList'}" class="nav-link">รายชื่อ</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'createName'}" class="nav-link">เพิ่มชื่อ</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- แสดงผลของ Router ที่เลือก  -->
    <router-view></router-view>
  </div>
</template>




<script>
import {store} from './store/store.js';
export default {
  store
};
</script>