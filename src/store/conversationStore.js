import { defineStore } from 'pinia';
import axios from 'axios';

export const conversationStore = defineStore('conversationStore', {
  state: () => ({
    conversations:{},
    messages:{},
    Loading:'',
    allJobs: [],
    searchByName: '',
  }),
  getters: {
    filterByJob() {
        if (!this.searchByName) {
            return this.allJobs;
        }
        // return this.allJobs.filter(products => products.category_id == this.category_id);
        return this.allJobs.filter(job => job.title.toLowerCase().includes(this.searchByName.toLowerCase()));
    }
},
  actions:{
    getConversations(id,token){
        this.Loading=true;
        axios.get('http://127.0.0.1:8000/api/conversation?id=' + id,
        {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        }).then(res => {
            console.log(res.data.data)
            this.conversations = res.data.data
            this.messages = this.conversations[0]
            this.Loading = false
        })
    },
    sendMessage(id,userId,token,message) {
        if (message) {
            this.Loading=true;
            axios.post('http://127.0.0.1:8000/api/messages',
                {
                    conversations_id: id,
                    user_id: userId,
                    message: message
                }
                ,
                {
                    headers: {
                        "Content-type": "application/json",
                        "Authorization":  `Bearer ${token}`,
                    }
                })
                .then(
                    this.getConversations(userId,token)

                    )
        }
    },
    
    checkConversation(i)
    {
        this.messages = this.conversations[i]
    },

    async loadPosts() {
        try {
          const res = await axios.get('http://127.0.0.1:8000/api/V1/posts');
          const data = res.data;
          this.allJobs = data.data;
        //   console.log(this.allJobs);
        } catch (err) {
          errors.value.push(err);
        }
    },
  }
  
})
