<template>
  <v-container class="spacing-playground pa-4">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
          class="contact-img-big"
        />
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">
            Name: <span class="fw-bold">Name</span>
          </li>
          <li class="list-group-item">
            Email: <span class="fw-bold">Email</span>
          </li>
          <li class="list-group-item">
            Mobile: <span class="fw-bold">Mobile</span>
          </li>
          <li class="list-group-item">
            Department: <span class="fw-bold">Department</span>
          </li>
          <li class="list-group-item">
            Designation: <span class="fw-bold">Designation</span>
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
export default {};
</script>
<style lang=""></style>
