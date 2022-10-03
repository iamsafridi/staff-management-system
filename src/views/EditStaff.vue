<template>
  <v-container class="spacing-playground pa-4">
    <div class="row">
      <div class="col-md-4">
        <form>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Photo Url" />
          </div>
          <div class="mb-2">
            <input type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="mb-2">
            <input type="number" class="form-control" placeholder="Mobile" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Department" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Designation" />
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-primary" value="update" />
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
          class="contact-img"
        />
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  data: function(){
    staffId: this.$route.params.staffId 
  }
};
</script>
<style lang=""></style>
