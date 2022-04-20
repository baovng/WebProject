<script>
// import { ref } from 'vue';
// import axios from 'axios';

// defineProps({
//   id: String,
//   name: String,
//   email: String,
//   role: String,
//   status: String,
// });
// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })

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
      //console.log(this.users)
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<template>
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
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
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button
            type="button"
            @click="updateRow()"
            data-dismiss="modal"
            class="btn btn-primary"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <tr v-for="user in users" :key="user.id">
    <td scope="col">{{ user.id }}</td>
    <td scope="col">
      <div>{{ user.name }}</div>
    </td>
    <td scope="col">{{ user.email }}</td>
    <td scope="col">{{ user.role }}</td>
    <td scope="col" :class="user.inactive ? 'in' : 'ac'">
      <span> </span>{{ user.inactive ? "Inactive" : "Active" }}
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
</template>

<style scoped>
a {
  color: #42b983;
}

.btn-disabled {
  cursor: not-allowed;
  pointer-events: none;
}
.in {
  color: red;
}
.ac {
  color: green;
}
.card-body {
  background-color: purple;
}
.active {
  color: blue;
}
</style>
