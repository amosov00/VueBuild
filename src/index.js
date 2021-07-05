import $ from 'jquery'
import Post from "@models/Post.js";
import './styles/style.css'
import './styles/style.scss'
import json from './assets/json.json'
import nazi from './assets/image.png'
import Vue from 'vue'
import App from "./App.vue";
const post = new Post()
post.log()
console.log('index.js')
console.log(nazi, 'свастика')
$('pre').html(JSON.stringify(json))


new Vue({render: h => h(App)}).$mount("#app")


