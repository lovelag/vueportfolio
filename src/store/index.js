import { createStore } from "vuex";

export default createStore({
  state: {
    plants:[],
    displayJobs:[],
    showSpinner:false
  },
  mutations: {
    SET_JOBS(state, plants){
      state.plants = plants;
    },
    SET_DISPLAY_JOBS(state, displayJobs){
      state.displayJobs = displayJobs;
    },
    SET_SPINNER(state, spinner){
      state.showSpinner = spinner;
    }
  },
  actions: {
   async fetchData({commit}){
      commit("SET_SPINNER",true);
      return new Promise(resolve => {
        setTimeout(async ()=> {
           const res = await fetch("plants.json");
           const val = await res.json();
           resolve(val);
           commit("SET_SPINNER",false);
        },1000);
      })
    },
    async fetchJobs({dispatch, commit}){
      const myJson = await dispatch("fetchData");
      const displayJobs = myJson.slice(0,3);
      commit("SET_DISPLAY_JOBS", displayJobs);
      commit("SET_JOBS", myJson);
      
    },
    async paginate({commit, state}){
      const jobs = state.jobs;
      commit("SET_DISPLAY_JOBS", jobs);
    },
    async updatepaginate({commit,dispatch},{myJson}){
       commit("SET_JOBS",myJson);
       dispatch("paginate");
    },
    async search({dispatch}, {text}){
      const myJson = await dispatch("fetchData");
      const values = myJson.filter(val => 
      val.name.toLowerCase().includes(text.toLowerCase())
      );
    dispatch("updatepaginate",{
      myJson:values
    });
    }
  },
  getters: {
    plants(state){
      return state.plants;
    },
    displayJobs(state){
      return state.displayJobs;
    },
    showSpinner(state){
      return state.showSpinner;
    }
  },
  modules: {}
});
