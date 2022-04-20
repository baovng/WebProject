<script>
import { ref } from "vue";
import Rows from "../components/Rows.vue";
import Requests from "../components/Requests.vue";

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
      role: "Admin",
    };
  },
  components: {
    Rows,
    Requests,
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
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal3"
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
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Name</label>
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
            class="btn btn-secondary"
            type="button"
            data-bs-dismiss="modal"
          >
            Close</button
          ><button
            class="btn btn-primary"
            data-bs-dismiss="modal"
            type="button"
            @click="addUser()"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <body>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Director User Management</h5>
          <button
            class="btn btn-light"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
          >
            Add User
          </button>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal2"
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

    <div class="container">
      <div class="card">
        <div class="card-body">
          <div class="card-title">Request Management</div>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Event Date</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Theme</th>
            <th scope="col">Description</th>
            <th scope="col">Email</th>
            <th scope="col">Super Frog Assigned</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
            <th scope="col">Assign</th>
            <th scope="col">Progress</th>
          </tr>
        </thead>
        <tbody id="userTableBody">
          <Requests :role="role"></Requests>
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
  background-color: #0061f2;
}
</style>
