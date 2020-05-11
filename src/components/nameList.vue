<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>รายชื่อ</h2>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th style="width: 8.33%">ลำดับ</th>
                <th style="width: 50%">ชื่อ</th>
                <th style="width: 10%%">ตำแหน่ง</th>
                <th style="width: 31.66%">การดำเนินการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(employee,index) in $store.getters.employees" :key="index">
                <td>{{ index + 1 }}</td>
                <td v-if="index !== editIndex">{{ employee.name }}</td>
                <td v-if="index !== editIndex">{{ employee.position }}</td>
                <td v-if="index !== editIndex">
                  <button
                    type="button"
                    class="btn btn-danger mr-2"
                    v-on:click="deleteName(index,employee.id)"
                  >ลบ</button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    v-on:click="openEdit(index,employee)"
                  >แก้ไข</button>
                </td>

                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="employee.name"
                    class="form-control"
                    v-on:change="name = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="employee.position"
                    class="form-control"
                    v-on:change="position = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <button
                    type="button"
                    class="btn btn-success mr-2"
                    v-on:click="editName(employee.id)"
                  >ยืนยัน</button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    v-on:click="closeEdit()"
                  >ยกเลิก</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editIndex: -1,
      name: "",
      position: ""
    };
  },
  created() {
    this.fetchName();
  },
  methods: {
    fetchName() {
      this.$store.dispatch("fetchName");
    },
    deleteName(index, _id) {
      let payload = { index: index, _id: _id };
      this.$store.dispatch("deleteName", payload);
    },
    openEdit(index, employee) {
      this.editIndex = index;
      this.name = employee.name;
      this.position = employee.position;
    },
    closeEdit() {
      this.editIndex = -1;
      this.name = "";
      this.position = 0;
    },
    editName(_id) {
      let payload = {
        index: this.editIndex,
        _id: _id,
        name: this.name,
        position: this.position
      };
      this.$store.dispatch("editName", payload).then(this.closeEdit());
    }
  }
};
</script>