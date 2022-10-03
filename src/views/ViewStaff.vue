<template>
  <v-container class="spacing-playground pa-4" v-if="isDone()">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img
          :src="staff.photo"
          alt=""
          class="contact-img-big"
        />
      </div>
      <div class="col-md-6">
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
          <li class="list-group-item">
            Department: <span class="fw-bold">{{staff.department}}</span>
          </li>
          <li class="list-group-item">
            Designation: <span class="fw-bold">{{staff.designation}}</span>
          </li>
        </ul>
      </div>
      <div class="row mt-4">
        <div class="col">
          <router-link to="/" class="btn btn-success">Back</router-link>
        </div>
      </div>
    </div> 
  </v-container>
</template>
<script>
import { StaffServices } from '../../services/StaffServices';

export default {
  name: "ViewStaff",
  data: function (){
    return {
      staffId : this.$route.params.staffId,
      satff : {},
      err: null 
    }
  },
  created: async function () {
    try{
      let res = await StaffServices.getStaff(this.staffId)
      this.staff = res.data
    }
    catch(err){
      this.err = err
    }
  },
  methods: {
    isDone:function(){
      return Object.keys(this.staff).length > 0; 
    }
  },
};
</script>
<style lang=""></style>
