<template>
  <!-- Modal Add User-->
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
          <h5 class="modal-title" id="exampleModalLabel">User Details</h5>
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            class="btn btn-secondary"
            type="button"
            data-bs-dismiss="modal"
          >
            Close</button
          ><button class="btn btn-primary" type="button">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <body class="nav-fixed mt-15">
    <div id="">
      <div id="">
        <main>
          <div class="container-xl"></div>

          <!-- Main page content-->
          <div class="container-xl px-4 mt-1">
            <div class="card mb-4">
              <div class="card-header">Users</div>
              <div class="card-header">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add User
                </button>
              </div>

              <div class="card-body">
                <table id="datatablesSimple">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr v-for="user in users" :key="user.id">
                      <td scope="col">{{ user.id }}</td>
                      <td scope="col">
                        <div>{{ user.name }}</div>
                      </td>
                      <td scope="col">{{ user.email }}</td>
                      <td scope="col">{{ user.role }}</td>
                      <td scope="col" :class="user.inactive ? 'in' : 'ac'">
                        <span> </span
                        >{{ user.inactive ? "Inactive" : "Active" }}
                      </td>
                      <td scope="col">
                        <button
                          class="btn"
                          :class="!user.inactive ? 'btn-danger' : 'btn-success'"
                          @click="deleteRow(user.id)"
                        >
                          {{ user.inactive ? "Undo" : "Delete" }}
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal1"
                          @click="Update(user.id)"
                          style="margin-left: 10px"
                        >
                          Edit User
                        </button>
                      </td>
                    </tr>

                    <tr></tr>
                    <tr>
                      <td>1</td>
                      <td>Sahil</td>
                      <td>xyz@gmail.com</td>
                      <td>Admin</td>
                      <td>
                        <div class="badge bg-primary text-white rounded-pill">
                          Full-time
                        </div>
                      </td>
                      <td>
                        <button
                          class="btn btn-datatable btn-icon btn-transparent-dark me-2"
                        >
                          <i data-feather="edit"></i>
                        </button>
                        <button
                          class="btn btn-datatable btn-icon btn-transparent-dark"
                        >
                          <i data-feather="trash-2"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Tanmay</td>
                      <td>xyz@gmail.com</td>
                      <td>Admin</td>
                      <td>
                        <div class="badge bg-primary text-white rounded-pill">
                          Full-time
                        </div>
                      </td>
                      <td>
                        <button
                          class="btn btn-datatable btn-icon btn-transparent-dark me-2"
                        >
                          <i data-feather="edit"></i>
                        </button>
                        <button
                          class="btn btn-datatable btn-icon btn-transparent-dark"
                        >
                          <i data-feather="trash-2"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
        <footer class="footer-admin mt-5 footer-light">
          <div class="container-xl px-4">
            <div class="row">
              <div class="col-md-6 small">
                Copyright &copy; Your Website 2021
              </div>
              <div class="col-md-6 text-md-end small">
                <a href="#!">Privacy Policy</a>
                &middot;
                <a href="#!">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </body>
</template>

<script>
/*!
 * Start Bootstrap - SB Admin Pro v2.0.0 (https://shop.startbootstrap.com/product/sb-admin-pro)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under SEE_LICENSE (https://github.com/StartBootstrap/sb-admin-pro/blob/master/LICENSE)
 */

// Activate feather

window.addEventListener("DOMContentLoaded", (event) => {
  feather.replace();

  const datatablesSimple = document.getElementById("datatablesSimple");
  if (datatablesSimple) {
    new simpleDatatables.DataTable(datatablesSimple);
  }
});

import axios from "axios";

export default {
  name: "Rows",
  data() {
    return {
      users: [],
      errors: [],
      inputName: "",
      inputEmail: "",
      inputRole: "",
      selected: "",
      uid: "",
      testbool: false,
    };
  },
  methods: {
    async deleteRow(id) {
      try {
        var curr_status = this.users[id].inactive;
        await axios.patch(`${`http://localhost:3000/users`}/${id}`, {
          inactive: !curr_status,
        });
        this.users = this.users.map((user) => {
          if (user.id === id) {
            user.inactive = !user.inactive;
          }
          //console.log(user)
          return user;
        });
      } catch (error) {
        console.error(error);
      }
    },

    Update(id) {
      this.inputName = this.users[id].name;
      this.inputEmail = this.users[id].email;
      this.selected = this.users[id].role;
      this.uid = id;
    },
    async updateRow() {
      var id = this.uid;
      var Name = this.inputName;
      var Email = this.inputEmail;
      var Role = this.selected;
      console.log(Name);
      try {
        var curr_status = this.users[id].inactive;
        await axios.patch(`${`http://localhost:3000/users`}/${id}`, {
          name: Name,
          email: Email,
          role: Role,
        });
        this.users = this.users.map((user) => {
          if (user.id === id) {
            user.name = Name;
            user.email = Email;
            user.role = Role;
          }
          return user;
        });
      } catch (error) {
        console.error(error);
      }
    },
  },

  // Fetches posts when the component is created.
  async created() {
    try {
      const response = await axios.get(`http://localhost:3000/users`);
      this.users = response.data;
      console.log(response.data);
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>
