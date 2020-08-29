<template>
 <div>
  <div class="page-wrapper">
     <div class="nav-wrapper">
      <div class="grad-bar"></div>
      <nav class="navbar">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo">
        <div class="menu-toggle" id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        </div>
        <ul class="nav" v-bind:class="{ search: isActive, nosearch: isNosearch }">
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#">About</a></li>
        <li class="nav-item"><a href="#">Work</a></li>
        <li class="nav-item"><a href="#">Contact Us</a></li>
        <i @click="toggleState" class="fas fa-search" id="search-icon"></i>
        <input v-bind:class="{ searchactive: isActive }" class="search-input"  v-model="searchText" type="text" placeholder="Search..">
        <button @click="search" v-bind:class="{ searchactive: isActive }" class="search-input" type="submit">Go</button>
        </ul>
    </nav>
    </div>
     
 
    </div>
 
 </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
 

export default {
  name: 'Home',
   data: function() {
    return {
    isActive: false,
    isNosearch:true,
    searchText:""
  };
 },
 
 methods: {
   toggleState () {
     this.isActive = !this.isActive;
     this.isNosearch = !this.isNosearch;
     console.log("isActive",this.isActive);
   },
   search (event) {
     event.preventDefault();
     
    this.$store.dispatch("search", {text:this.searchText})
   }
 }

}
</script>


 

 