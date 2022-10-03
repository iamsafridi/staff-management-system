<template>
  <v-container class="spacing-playground pa-4">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="submitCreate()">
          <div class="mb-2">
            <input v-model="staff.name" type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="mb-2">
            <input v-model="staff.photo" type="text" class="form-control" placeholder="Photo Url" />
          </div>
          <div class="mb-2">
            <input v-model="staff.email" type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="mb-2">
            <input v-model="staff.mobile" type="number" class="form-control" placeholder="Mobile" />
          </div>
          <div class="mb-2">
            <input v-model="staff.department" type="text" class="form-control" placeholder="Department" />
          </div>
          <div class="mb-2">
            <input v-model="staff.designation" type="text" class="form-control" placeholder="Designation" />
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-primary" value="Create" />
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img :src="staff.photo" alt="">
      </div>
    </div>
  </v-container>
</template>
<script>
import { StaffServices } from '../../services/StaffServices';

export default {
  data: function(){
    return{
      staff : {
      name: "",
      email: "",
      mobile: "",
      photo: "",
      department: "",
      designation: ""
      },
    }
  },
  methods: {
      submitCreate : async function(){
        try{
          let res = await StaffServices.createStaff(this.staff);
          if(res){
            return this.$router.push('/')
          }else{
            return this.$router.push('/staffs/add');
          }
        }
        catch(err){
          console.log(err);
        }
      }
    }
};
</script>
<style lang=""></style>
