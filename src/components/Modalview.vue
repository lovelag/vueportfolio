<template>
 
   
<div :class="{ 'is-active': active }" class="modal fade" :id="modalId" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{{portId}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <br>{{data.name}}<br>
        <img :src="require(`@/assets/images/${data.imgURL}`)" alt="car"/>
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
 import mitt from 'mitt'
const emitter = mitt()

export default {
  name: 'Modalview',
  props:["data"],
  computed:{
    modalId(){
      return `modal-${this.data.id}`; 
    },
    portId(){
      return `Portfolio-${this.data.id}`; 
    },
  },
  data() {
    return {
     // active: false,
      modal: false,
      active: false,
    }
  },
   methods: {
    show() {
      this.active = true;
      console.log("show",this.active)
    }
  },
 mounted(){
   emitter.on('openmodal',event, (data) => {
     this.modal = data;
      this.show();
     if (event) {
      event.preventDefault()
      
        console.log("mounted");
     }
    
      
    });
 }, 

};
</script>

<style>
.is-active{
  display: flex;
}
.modal {
  bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    z-index: 20;
}
</style>
 

 