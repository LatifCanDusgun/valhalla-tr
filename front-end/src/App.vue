<template>
    <NavBar />
    <RouterView />
</template>


<script>

import NavBar from "@/components/NavBar.vue"

export default {
    name: "App",
    components: {
      NavBar
   },
}
</script>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Changa:wght@500&family=Mulish:wght@300;400;600;700&family=Open+Sans:wght@300&display=swap');

    html, body {
        font-family: 'Changa', sans-serif;
        font-family: 'Mulish', sans-serif;
        font-family: 'Open Sans', sans-serif;   
    }
</style>