<template>
  <div class="container">
    <div v-for="article in newsarticles" :key="article.title" class="container">
    <a :href="article.url">
      <div class="article-container">
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
      source:'cybersecurity', 
      api: apikey,
      newsarticles: [],
      language: 'en'
    }
    
  },

  mounted() {
    fetch(`https://newsapi.org/v2/everything?apiKey=${this.api}&q=${this.source}&language=${this.language}`) 
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
    * {
      box-sizing: border-box;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    img {
      width: 250px;
      height: 250px;
    }

    a {
      text-decoration: none;
      text-decoration-color: none;
      color: black;
    }

    .article-container {
      width: 300px;
      margin: 20px;
      background-color: #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      overflow: hidden;
      transition: box-shadow 0.3s ease;
    }

    .article-container:hover {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }

    .article-link {
      text-decoration: none;
      color: inherit;
    }

    .article-content {
      padding: 20px;
    }

    .article-image {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 5px;
      transition: transform 0.3s ease;
    }

    .article-container:hover .article-image {
      transform: scale(1.05);
    }

    .article-title {
      margin-top: 10px;
      font-size: 20px;
      font-weight: bold;
      color: #333333;
    }

    .article-description {
      margin-top: 10px;
      font-size: 14px;
      color: #666666;
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

  .logo {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin: 10px;
}
  </style>

