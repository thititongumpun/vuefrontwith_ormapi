<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>เพิ่มชื่อ</h2>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="addName()">
            <div class="form-group">
              <label>ชื่อ</label>
              <input type="text" class="form-control" placeholder="ระบุรายชื่อ" v-model="name" />
            </div>
            <div class="form-group">
              <label>ตำแหน่ง</label>
              <input type="text" class="form-control" placeholder="ระบุตำแหน่ง" v-model="position" />
            </div>
            <button type="submit" class="btn btn-primary">เพิ่มรายชื่อ</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
// addName methods

    data() {
        return {
            name: "",
            position: ""
        };
    },
    methods: {
        addName() {
            if (this.name) {
                let payload = {name: this.name, position: this.position};
                this.$store.dispatch("addName", payload);
            }
        }
    }
};
</script>