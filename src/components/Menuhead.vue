<template>
 
 <div class="mainwrap" v-bind:class="{ collapsesnew: isWrapper }">

 <div class="top_navbar">
    <div @click="toggleHamburger" class="hamburger">
       <div class="one"></div>
       <div class="two"></div>
       <div class="three"></div>
    </div>
    <div class="top_menu">
      <div class="logo">
         logo
      </div>
      <ul  v-bind:class="{ search: isActive, nosearch: isNosearch }">
        <li @click="toggleState"><a href="#">
          <i class="fas fa-search"></i>
             
          </a></li>
         
        <li class="searchli">
            <input v-bind:class="{ searchactive: isActive }" class="search-input"  v-model="searchText" type="text" placeholder="Search..">
            <button @click="search" v-bind:class="{ searchactive: isActive }" class="btnradius btn btn-primary search-input" type="submit">G</button>
        </li>    
        <li><a href="#">
          <i class="fas fa-bell"></i>
          </a></li>
        <li><a href="#">
          <i class="fas fa-user"></i>
          </a></li>
      </ul>
    </div>
   </div>
   <!--sidemenu-->
   <div   class="sidebar">
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
  
  
  </div>
<!--wrapper-->



</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
 

export default {
  name: 'Menuhead',
   data: function() {
    return {
    isActive: false,
    isWrapper:false,
    isNosearch:true,
    searchText:""
  };
 },
 methods: {
   toggleHamburger (){
       this.isWrapper = !this.isWrapper;
   },
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
<style>
 .mainwrap{
  margin: 10px;
}
.mainwrap .top_navbar{
  width: calc(100% - 20px);
  height: 60px;
  display: flex;
  position: fixed;
  top: 10px;
}
 
.mainwrap .sidebar{
    width:200px;
    position: fixed;
    top: 70px;
    left: 10px;
    background: #2e4ead;
    height: calc(100% - 80px);
    border-bottom-left-radius: 20px;
    transition: all 0.3s ease;
}
.mainwrap.collapsesnew .sidebar {
    width:70px;
    position: fixed;
    top: 70px;
    left: 10px;
    background: #2e4ead;
    height: calc(100% - 80px);
    border-bottom-left-radius: 20px;
    transition: all 0.3s ease;
    } 
.mainwrap.collapsesnew .hamburger{
    width: 70px;
    height: 100%;
    background: #2e4ead;
    padding: 15px 17px;
    border-top-left-radius: 20px;
    cursor: pointer;
}

.mainwrap .hamburger{
    width: 70px;
    height: 100%;
    background: #2e4ead;
    padding: 15px 17px;
    border-top-left-radius: 20px;
    cursor: pointer;
}
.mainwrap.top_navbar .hamburger{
  width: 70px;
  height: 100%;
  background: #2e4ead;
  padding: 15px 17px;
  border-top-left-radius: 20px;
  cursor: pointer;
}
.mainwrap .sidebar ul li a span.icon{
  margin-right: 10px;
  display: inline-block;
}
.mainwrap .top_navbar .top_menu .logo{
  color: #2e4ead;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
}
.mainwrap .top_navbar .top_menu ul{
  display: flex;
}
.mainwrap .top_navbar .top_menu ul li a:hover{
  background: #4360b5;
  color: #fff;
}
.mainwrap .top_navbar .top_menu ul li a:hover i{
  color: #fff;
}

.mainwrap .sidebar{
  position: fixed;
  top: 70px;
  left: 10px;
  background: #2e4ead;
  width: 200px;
  height: calc(100% - 80px);
  border-bottom-left-radius: 20px;
  transition: all 0.3s ease;
}
.mainwrap .sidebar ul li a{
    display: block;
    padding: 20px;
    color: #fff;
    position: relative;
    margin-bottom: 1px;
    color: #92a6e2;
    white-space: nowrap;
}

.mainwrap .sidebar ul li a:before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #92a6e2;
  display: none;
}
.mainwrap .top_navbar .top_menu ul li a{
  display: block;
  margin: 0 10px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border: 1px solid #2e4ead;
  border-radius: 50%;
  color: #2e4ead;
}
.mainwrap .top_navbar .top_menu ul li a:hover{
  background: #4360b5;
  color: #fff;
}

.mainwrap .top_navbar .top_menu ul li a:hover i{
  color: #fff;
}
.mainwrap .top_navbar .top_menu{
  width: calc(100% - 70px);
  height: 100%;
  background: #fff;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1);
}
.mainwrap .sidebar ul li a span.icon{
  margin-right: 10px;
  display: inline-block;
}

.mainwrap .sidebar ul li a span.title{
  display: inline-block;
}

.mainwrap .sidebar ul li a:hover,
.mainwrap .sidebar ul li a.active{
  background: #4360b5;
  color: #fff;
}

.mainwrap .sidebar ul li a:hover:before,
.mainwrap .sidebar ul li a.active:before{
  display: block;
}

.mainwrapper .mainwrap .main_container{
  width: (100% - 200px);
  margin-top: 70px;
  margin-left: 200px;
  padding: 15px;
  transition: all 0.3s ease;
}
.mainwrapper.mainwrap.collapsesnew .main_container{
  width: (100% - 70px);
  margin-left: 70px;
}
.mainwrap.collapsesnew .sidebar ul li a span.title{
    display:none;
}

.searchli{
    left: 80px;
    position: relative;
    top: 1px;
}
.top_menu{
    width: calc(100% - 70px);
    height: 100%;
    background: #fff;
    border-top-right-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1)
}
.top_menu ul{
display: flex;
}
.hamburger div{
    width: 35px;
    height: 4px;
    background: #92a6e2;
    margin: 5px 0;
    border-radius: 5px;
}
.top_menu ul li > a{
    display: block;
    margin: 0 10px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid #2e4ead;
    border-radius: 50%;
    color: #2e4ead;
}
.top_navbar {
    width: calc(100% - 20px);
    height: 60px;
    display: flex;
    position: fixed;
    top: 10px;
}
* {
   margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif
}
li{
    display: list-item;
    text-align: -webkit-match-parent;
}

</style>
 
 

 