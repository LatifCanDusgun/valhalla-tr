<template>
    <NavBar />
    <RouterView />
    <TheFooter />
</template>


<script>

import NavBar from "@/components/NavBar.vue"
import TheFooter from "./components/TheFooter.vue";

export default {
    name: "App",
    components: {
      NavBar,
      TheFooter
   },
}
</script>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Changa:wght@500&family=Mulish:wght@300;400;600;700&family=Open+Sans:wght@300&display=swap');

    html, 
    body {
        font-family: 'Mulish', sans-serif; 
    }

    a {
        text-decoration: none;
    }
    
    .full-section-height{
    min-height: calc(100vh - 130px);
    display: flex;
    align-items: center;
  }
</style>