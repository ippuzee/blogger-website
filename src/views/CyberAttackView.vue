<template>
    <div class="container">
      <div v-for="article in newsarticles" :key="article.title" class="container">
      <a :href="article.url">
        <div class="container">
          <img :src="imagereplace(article)">
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}}</p>
        </div>
      </a>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2023 Iflal Iqbal. All rights reserved.</p>
        <ul class="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Vulnerabilities</a></li>
          <li><a href="#">Cyber Attacks</a></li>
          <li><a href="#">Data Breach</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  import nullimage from "@/assets/th.jpeg"
  import { apikey } from "@/assets/apikey";
  export default {
    data() {
      return {
        searchQuery:'cyberattack', 
        api: apikey,
        newsarticles: [],
        language: 'en'
      }
      
    },
  
    mounted() {
      fetch(`https://newsapi.org/v2/everything?apiKey=${this.api}&q=${this.searchQuery}&language=${this.language}`) 
        .then((res) => res.json())
        .then((data) => (this.newsarticles = data.articles))
        .catch((err) => console.log(err.message))
    },
    
    methods: {
      imagereplace(checker) {
        return checker.urlToImage || nullimage
      } 
    }
  
  }
  
  </script>
  

  <style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    max-width: 1200px;
  }

  .container > div {
    flex-basis: 300px;
    margin: 20px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .container > div:hover {
    transform: translateY(-5px);
  }

  .container a {
    text-decoration: none;
    color: inherit;
  }

  .container img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  .container h3 {
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .container p {
    margin: 10px;
    font-size: 14px;
    color: #666;
  }

  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer p {
    margin-bottom: 10px;
  }

  .footer-links {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .footer-links li {
    margin: 0 10px;
  }

  .footer-links li a {
    color: #fff;
    text-decoration: none;
  }

  .footer-links li a:hover {
    text-decoration: underline;
  }
</style>

