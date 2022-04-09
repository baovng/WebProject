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

import axios from 'axios';


export default {
  name: 'Rows',
  data() {
    return {
      users: [],
      errors: [],
      inputName:"",
      inputEmail:"",
      inputRole:"",
      testbool:false
    }
  },
  methods: {
  async deleteRow(id) {
    try {
        var curr_status = this.users[id].inactive
        await axios.patch(`${`http://localhost:3000/users`}/${id}`, {
            inactive: !curr_status
        });
        this.users = this.users.map(user => {
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

Update(id){
alert(id)
},
async updateRow(id){
  var Name = prompt("Name",this.users[id].name);
  var Email = prompt("Email",this.users[id].email);
  var Role = prompt("Role",this.users[id].role);
  try {
        var curr_status = this.users[id].inactive
        await axios.patch(`${`http://localhost:3000/users`}/${id}`, {
            name: Name,
            email: Email,
            role: Role,
        });
        this.users = this.users.map(user => {
            if (user.id === id) {
                user.name = Name;
                user.email = Email;
                user.role = Role;
            }
            //console.log(user)
            return user;

        });
    } catch (error) {
        console.error(error);
    }
}

  },

  // Fetches posts when the component is created.
  async created() {
    try {
      const response = await axios.get(`http://localhost:3000/users`)
      this.users = response.data
      //console.log(this.users)
    } catch (e) {
      this.errors.push(e)
    }
  }
}
</script>

<template>


  <tr v-for="user in users" :key="user.id">
    <td scope="col">{{user.id}}</td>
    <td scope="col" ><div>{{ user.name }}</div></td>
    <td scope="col">{{ user.email }}</td>
    <td scope="col">{{ user.role }}</td>
    <td scope="col" :class="user.inactive?'in':'ac'"><span>
      </span>{{ user.inactive? "Inactive" : "Active" }}</td>
    <td scope="col"> <button @click="updateRow(user.id)" class="btn btn-primary" >Edit</button> <button class="btn btn-primary" @click="deleteRow(user.id)"
   >{{user.inactive? "Undo" : "Delete"}}  </button> </td>
  </tr>


</template>

<style scoped>
a {
  color: #42b983;
}

.btn-disabled{
    cursor: not-allowed;
    pointer-events: none;
}
.in{
  color: red;
}
.ac{
  color: green;
}
.card-body {
  background-color: purple;
}
.active{
  color: blue;
}
</style>
