import axios from "axios";

export default class fetchPosts{
    static async getAllPosts(){
        return axios.get("https://jsonplaceholder.typicode.com/posts")
    }
    static async getPostById(id){
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }
    static async getComments(id){
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    }
}