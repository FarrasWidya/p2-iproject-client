import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'http://localhost:3000',
    logged: false,
    contents: [],
    contentDetail: {},
    comments: [],
    templates: [],
    TagId :'',
    timezone:{}


  },
  mutations: {
    MUTATE_LOGGED(state, payload) {
      state.logged = payload
    },
    MUTATE_CONTENTS(state, payload) {
      state.contents = payload
    },
    MUTATE_CONTENT_DETAIL(state, payload) {
      state.contentDetail = payload
    },
    MUTATE_COMMENTS(state, payload) {
      state.comments = payload
    },
    MUTATE_TEMPLATES(state, payload) {
      
      state.templates = payload
    },
    MUTATE_TIMEZONE(state,payload){
      state.timezone = payload
    }
  },
  actions: {
    async postLogin(context, payload) {
      try {
        const response = await axios.post(`${context.state.url}/login`, {
          email: payload.email,
          password: payload.password
        })
        localStorage.access_token = response.data.access_token
        context.commit('MUTATE_LOGGED', true)
      } catch (err) {
        console.log(err)
      }
    },
    async postRegister(context, payload) {
      try {
        await axios.post(`${context.state.url}/register`, {
          email: payload.email,
          password: payload.password,
          username: payload.username,
          gender: payload.gender,
          bio: payload.bio
        })

      } catch (err) {
        console.log(err)
      }
    },
    async getContents(context,payload) {
      try {
        if (!payload) {
          
          const response = await axios.get(`${context.state.url}/contents`)
          context.commit('MUTATE_CONTENTS', response.data)
        }else{
         const response2 = await axios.get(`${context.state.url}/contents/?TagId=${payload}`)  
         context.commit('MUTATE_CONTENTS', response2.data)
        }

      } catch (err) {
        console.log(err)
      }
    },
    async getContentById(context, payload) {
      try {
        const response = await axios.get(`${context.state.url}/contents/${+payload}`)

        context.commit('MUTATE_CONTENT_DETAIL', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async postComment(context, payload) {
      try {
        await axios.post(`${context.state.url}/contents/${payload.id}/comments`, {
          message: payload.message
        }, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        
      } catch (err) {
        console.log(err)
      }
    },
    async getAllComments(context, payload) {
      try {
        const response = await axios.get(`${context.state.url}/contents/${payload}/comments`, {
          headers: {
            access_token: localStorage.access_token
          }

        })


        context.commit('MUTATE_COMMENTS', response.data)

      } catch (err) {
        console.log(err)
      }
    },
    async getTemplateForAdd(context) {
      try {
        const response = await axios.get(`https://api.imgflip.com/get_memes`)
        let memeStorage = []
        for (let i = 0; i <= 40; i++) {
          if (response.data.data.memes[i].box_count === 2) {
            const element = response.data.data.memes;
            memeStorage.push(element[i])
          }
        }

        context.commit('MUTATE_TEMPLATES', memeStorage)

      } catch (err) {
        console.log(err)
      }
    },
    async postUpvote(context,payload){
      try {
        await axios.post(`${context.state.url}/contents/${payload}`,{},{
          headers:{
            access_token:localStorage.access_token
          }
        })
      } catch (err) {
       
        console.log(err)
      }
    }
    ,
    async addNewMeme(context,payload){
      try {
        await axios.post(`${context.state.url}/memes`,{},{
          headers:{
            access_token:localStorage.access_token
          },params:payload
        })
        context.dispatch('getContents')
      } catch (err) {
       
        console.log(err)
      }
    },
    async getTimezone(context){
      try {
       const response = await axios.get(`${context.state.url}/timezones`)
        context.commit('MUTATE_TIMEZONE', response.data)
      } catch (err) {
        console.log(err)
      }
    }


  },

  modules: {
  }
})
