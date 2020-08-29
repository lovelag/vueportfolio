<template>

    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
          <img :src="require(`@/assets/images/${data.imgURL}`)" alt="car"/>
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Travel
          </div>
          <div class="card_info">
            <p class="title">{{data.name}}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ab.
            </p>
          </div>
           <button
          id="show-modal" 
          data-toggle="modal" 
          :data-target="modalId"
          v-on:click="showModalbtn($event,data)"   
          class="btn btn-primary"
          target="_blank"
          rel="noopener"
          >View</button>
          <div class="card_creator">
            By Alex Kato
          </div>
        </div>
      </div>
     </div>
    

  
     
     


</template>

<script>
// @ is an alias to /src
//import Modalview from '@/components/Modalview.vue'
//import Paginate from 'vuejs-paginate'
import mitt from 'mitt'
const emitter = mitt()

export default {
  name: 'PlantGal',
  props: ["data"],
  computed:{
    modalId(){
    return `#modal-${this.data.id}`
    }
  },
  components: {
    //Modalview
  },
  data: function() {
  return {
    isActive: false,
    modal:true
  };
 },
 methods: {
   toggleState () {
     this.isActive = !this.isActive;
     console.log("tst");
   },
  /*  showModalbtn() {
     this.$emit("openmodal");
     console.log("test",this.showModal);
      console.log("namee",name);
   } */
  
 showModalbtn:function(event, data) {
   if (event) {
      event.preventDefault()
      console.log("eventtruedata");
      emitter.emit('openmodal', data);
        console.log("data",data);
     }
    }
     
  }/**method */ 

}
</script>

<style>
* {
   margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif
}

body {
  background: #eedfcc;
  color: #555555;
  font-size: 14px;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 100%;
  margin: 20px auto;
}

.cards_wrap {
  display: flex;
  flex-wrap: wrap;
}

.cards_wrap .card_item {
  width: 25%;
  padding: 10px;
}

.cards_wrap .card_inner {
  background: #2db94dd9;
}

.cards_wrap .card_top {
  width: 100%;
  height: auto;
  padding: 10px;
  padding-bottom: 0;
}

.cards_wrap .card_bottom {
  padding: 15px;
}

.cards_wrap .card_bottom .card_category {
  text-transform: uppercase;
  text-align: center;
}

.cards_wrap .card_bottom .card_info {
  padding: 15px;
  margin: 10px 0;
  border: 1px dashed #0071bc;
}

.cards_wrap .card_bottom .card_info .title {
  color: #0071bc;
  font-size: 18px;
  margin-bottom: 5px;
}

.cards_wrap .card_bottom .card_creator {
  text-align: center;
}

@media (max-width: 1024px) {
  .cards_wrap .card_item {
    width: 33.3%;
  }
}

@media (max-width: 768px) {
  .cards_wrap .card_item {
    width: 50%;
  }
}

@media (max-width: 528px) {
  .cards_wrap .card_item {
    width: 100%;
  }
}

/***modal */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>