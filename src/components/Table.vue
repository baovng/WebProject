<script>
import { ref } from "vue";
import Rows from "./Rows.vue";

import axios from "axios";

export default {
  name: "Table",
  data() {
    return {
      inputName: "",
      inputEmail: "",
      inputRole: "",
      selected: "",
      testbool: false,
    };
  },
  components: {
    Rows,
  },
  methods: {
    addUser() {
      var Name = this.inputName;
      var Email = this.inputEmail;
      var Role = this.selected;
      const res = axios.post(`http://localhost:3000/users`, {
        name: Name,
        email: Email,
        role: Role,
        inactive: false,
      });
      console.log(res);
      location.reload();
    },
  },
};
</script>

<template>
  <body>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">User Management</h5>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add User
          </button>
          <!-- <button  @click="addUser()" type="button" class="btn btn-primary">Add User</button> -->
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Name</label
                  >
                  <input
                    v-model="inputName"
                    type="text"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-email"
                    v-model="inputEmail"
                  />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Role</label>
                  <select class="form-control" v-model="selected">
                    <option disabled value="">Please select one</option>
                    <option>Customer</option>
                    <option>SuperFrog Student</option>
                    <option>Spirit Director</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" @click="addUser" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody id="userTableBody">
          <Rows></Rows>
        </tbody>
      </table>
    </div>
  </body>
</template>

<style scoped>
a {
  color: purple;
}

.card-title {
  color: white;
}

.card-body {
  background-color: purple;
}
</style>
