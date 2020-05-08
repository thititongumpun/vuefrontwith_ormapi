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
             <tr v-for="(name, index) in $store.getters.names" :key="index">
                 <td>{{ index + 1 }}</td>
                 <td v-if="index !== editIndex">{{ name.name }}</td>
                 <td v-if="index !== editIndex">{{ name.position }}</td>
                 <td v-if="index !== editIndex">
                 
                     <button
                    type="button"
                    class="btn btn-danger mr-2"
                    v-on:click="deleteName(index,name.id)"
                  >ลบ</button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    v-on:click="openEdit(index,name)"
                  >แก้ไข</button>
                 </td>

                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="name.name"
                    class="form-control"
                    v-on:change="name = $event.target.value"                  
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="name.position"
                    class="form-control"
                    v-on:change="position = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                    <button
                    type="button"
                    class="btn btn-success mr-2"
                    v-on:click="editName(name.id)"
                  >ยืนยัน</button>
                  <button
                    type="button"
                    class="btn btn-secondary mr-2"
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
// add methods
export default {
    data() { 
        return {
            editIndex: -1,
            name: "",
            position: ''
        };
    },
    created() {
      this.fetchName();
    },

    methods: {
        fetchName() {
            this.$store.dispatch("fetchName");
        },
        deleteName(index, id) {
            let payload = { index: index, _id: id };
            this.$store.dispatch("deleteName", payload);
        },
        openEdit(index, name) {
            this.editIndex = index;
            this.name = name.name;
            this.position = name.position;
        },
        closeEdit() {
            this.editIndex = -1;
            this.name = "";
            this.position = "";
        },
        editName(id) {            
            let payload = {
                index: this.editIndex,
                _id: id,
                name: this.name,
                position: this.position
            };
            this.$store.dispatch("editName", payload).then(this.closeEdit());
        }
    }        
}
</script>