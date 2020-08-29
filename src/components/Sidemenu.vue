<template>
  <div class="sidebar">
      <ul>
        <li><a href="#">
          <span class="icon"><i class="fas fa-book"></i></span>
          <span class="title">Books</span>
          </a></li>
        <li><a href="#">
          <span class="icon"><i class="fas fa-file-video"></i></span>
          <span class="title">Movies</span>
          </a></li>
        <li><a href="#">
          <span class="icon"><i class="fas fa-volleyball-ball"></i></span>
          <span class="title">Sports</span>
          </a></li>
        <li><a href="#" class="active">
          <span class="icon"><i class="fas fa-blog"></i></span>
          <span class="title">Blogs</span>
          </a></li>
        <li><a href="#">
          <span class="icon"><i class="fas fa-leaf"></i></span>
          <span class="title">Nature</span>
          </a></li>
    </ul>
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
<style lang="sass">

.sidebar{
    width:200px;
    position: fixed;
    top: 70px;
    left: 10px;
    background: #2e4ead;
    height: calc(100% - 80px);
    border-bottom-left-radius: 20px;
    transition: all 0.3s ease;
}

</style>


 

 