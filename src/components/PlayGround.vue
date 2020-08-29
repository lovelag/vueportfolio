<template>
  <div>
    <h1>Vue Top Artist Countries</h1>
    <ul>
      <li v-for="(artist, x) in plants" :key="x">
      <h3>{{artist.name}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import Paginate from 'vuejs-paginate'

export default {
  name: 'Paginate',
  props: ['plants'],
  data: function() {
   return {
       
      }
 },
 

}
</script>

