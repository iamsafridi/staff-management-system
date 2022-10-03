<template>
  <v-container class="spacing-playground pa-6">
    <v-btn to="/staffs/add" class="mx-2" fab dark small color="primary"
      ><v-icon dark> mdi-plus </v-icon>add new
    </v-btn>
  </v-container>
  <v-container class="spacing-playground pa-4">
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Search Name"
              />
            </div>
            <div class="col">
              <input type="submit" class="btn btn-outline-dark" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </v-container>
  <v-container v-if="staffs.length > 0">
    <div class="row">
      <div class="col-md-6"  v-for="staff of staffs" :key="staff" >
        <div class="card list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img
                  :src="staff.photo"
                  alt="img"
                  class="contact-img"
                />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">
                    Name: <span class="fw-bold">{{staff.name}}</span>
                  </li>
                  <li class="list-group-item">
                    Email: <span class="fw-bold">{{staff.email}}</span>
                  </li>
                  <li class="list-group-item">
                    Mobile: <span class="fw-bold">{{staff.mobile}}</span>
                  </li>
                </ul>
              </div>
              <div
                class="col-sm-1 d-flex flex-column justify-content-center align-items-center"
              >
                <router-link
                  :to="`/staffs/view/${staff.id}`" 
                  class="btn btn-warning my-1"
                >
                  <v-icon style="font-size: 15px" dark>
                    mdi-format-list-bulleted-square
                  </v-icon>
                </router-link>
                <router-link
                  :to="`/staffs/edit/${staff.id}`"
                  class="btn btn-primary my-1"
                >
                  <v-icon style="font-size: 15px" dark> mdi-pencil </v-icon>
                </router-link>
                <button class="btn btn-danger my-1">
                  <v-icon style="font-size: 15px" dark> mdi-delete </v-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>

import { StaffServices } from '../../services/StaffServices';

export default {
  name: "StaffManager",
  data: function () {
    return{
      staffs : [],
      error: null
    }
  },
  created: async function (){
    try{
      let res = await StaffServices.getAllStaffs();
      this.staffs = res.data;
    }
    catch(error){
      this.error = error
    }
  },
  methods: {
  }
};
</script>
<style></style>
