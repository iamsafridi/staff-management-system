<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Spinner from './components/Spinner.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { Navbar, Spinner }
}
</script>
