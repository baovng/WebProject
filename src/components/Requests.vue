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
      requests: [],
      superfrogs: [],
      admin: 0,
      superfrog: 0,
      customer: 0,
    };
  },
  props: {
    role: String,
  },
  computed: {
    roledecider() {
      if (this.role == "Admin") {
        this.admin = 1;
      }
      if (this.role == "SuperFrog") {
        this.superfrog = 1;
      }
      if (this.role == "Customer") {
        this.customer = 1;
      }
    },
  },

  methods: {
    async assigner(reqid, frogid, name) {
      this.requests = this.requests.map((req) => {
        if (req.id === reqid) {
          req.status = "Assigned";
          req.assigned = name;
        }
        return req;
      });
      await axios
        .patch(`${`http://localhost:3000/requests`}/${reqid}`, {
          status: "Assigned",
          assigned: name,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async checker(id, status1) {
      this.requests = this.requests.map((req) => {
        if (req.id === id) {
          req.status = status1;
        }
        return req;
      });
      await axios
        .patch(`${`http://localhost:3000/requests`}/${id}`, {
          status: status1,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },

  mounted() {
    this.roledecider;
  },
  // Fetches posts when the component is created.
  async created() {
    try {
      const response = await axios.get(`http://localhost:3000/requests`);
      const response_super = await axios.get(
        `http://localhost:3000/superfrogs`
      );
      this.superfrogs = response_super.data;
      this.requests = response.data;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<template>
  <!-- Modal -->
  <tr v-for="req in requests" :key="req.id">
    <td scope="col">{{ req.id }}</td>
    <td scope="col">{{ req.ename }}</td>
    <td scope="col">{{ req.date }}</td>
    <td scope="col">{{ req.stime }}</td>
    <td scope="col">{{ req.etime }}</td>
    <td scope="col">{{ req.theme }}</td>
    <td scope="col">{{ req.desc }}</td>
    <td scope="col">{{ req.email }}</td>
    <td scope="col">{{ req.assigned }}</td>
    <td scope="col">{{ req.status }}</td>
    <td v-if="admin" scope="col">
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          id="dropdownMenuButton"
          type="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Update Status
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a
            @click="checker(req.id, 'Approved')"
            class="dropdown-item"
            href="#!"
            >Approved</a
          >
          <a class="dropdown-item" @click="checker(req.id, 'Denied')" href="#!"
            >Denied</a
          >
          <a
            class="dropdown-item"
            @click="checker(req.id, 'Assigned')"
            href="#!"
            >Assigned</a
          >
        </div>
      </div>
    </td>

    <td v-if="admin" scope="col">
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          id="dropdownMenuButton1"
          type="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Assign SuperFrog
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <a
            class="dropdown-item"
            v-for="frog in superfrogs"
            :key="frog.id"
            @click="assigner(req.id, frog.id, frog.name)"
            >{{ frog.name }}</a
          >
        </div>
      </div>
    </td>

    <td v-if="superfrog" scope="col">
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          id="dropdownMenuButton"
          type="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Choose
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a
            class="dropdown-item"
            @click="checker(req.id, 'Signed Up')"
            href="#!"
            >Sign Up</a
          >
          <a
            class="dropdown-item"
            @click="checker(req.id, 'Finished')"
            href="#!"
            >Finish</a
          >
        </div>
      </div>
    </td>
    <!-- <td>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        View
      </button>
    </td>
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              Vertically Centered Modal
            </h5>
            <button
              class="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
              <div class="step mb-5">
        <div class="step-item" :class="req.status == 'Created' ? 'active' : ''">
          <a class="step-item-link" href="#!">Created</a>
        </div>
        <div
          class="step-item"
          :class="req.status == 'Approved' ? 'active' : ''"
        >
          <a class="step-item-link" href="#!">Approved</a>
        </div>
        <div
          class="step-item"
          :class="req.status == 'Signed Up' ? 'active' : ''"
        >
          <a class="step-item-link" href="#!">Signed Up</a>
        </div>
        <div
          class="step-item"
          :class="req.status == 'Assigned' ? 'active' : ''"
        >
          <a class="step-item-link" href="#!">Assigned</a>
        </div>
        <div
          class="step-item"
          :class="req.status == 'Finished' ? 'active' : ''"
        >
          <a class="step-item-link" href="#!">Finished</a>
        </div>
      </div>
          </div>
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
    </div> -->
    <td>
      <div class="step mb-5">
        <div class="step-item" :class="req.status == 'Created' ? 'active' : ''">
          <a class="step-item-link" href="">Created</a>
        </div>
        <div
          class="step-item"
          :class="req.status == 'Approved' ? 'active' : ''"
        >
          <a class="step-item-link" href="">Approved</a>
        </div>
        <div
          class="step-item"
          :class="req.status == 'Signed Up' ? 'active' : ''"
        >
          <a class="step-item-link" href="">Signed Up</a>
        </div>
        <div
          class="step-item"
          :class="req.status == 'Assigned' ? 'active' : ''"
        >
          <a class="step-item-link" href="">Assigned</a>
        </div>
        <div
          class="step-item"
          :class="req.status == 'Finished' ? 'active' : ''"
        >
          <a class="step-item-link" href="">Finished</a>
        </div>
      </div>
    </td>
  </tr>
</template>

<style scoped>
a {
  color: #0061f2;
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
  background-color: #0061f2;
}
.active {
  color: blue;
}
</style>
