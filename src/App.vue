<template>
    <nav class="navbar">
      <h1 class="logo">
      <span class="logo-cyber">Cyber</span>
      <span class="logo-sec">Sec</span>
    </h1>
    </nav>
    <nav>
    <router-link to="/">Home</router-link> 
    <router-link :to=" {name: 'about'} ">About</router-link> 
    <router-link :to=" {name: 'vulnerabilities'} ">Vulnerabilities</router-link> 
    <router-link :to=" {name: 'cyberattack'} ">Cyber Attacks</router-link> 
    <router-link :to=" {name: 'databreach'} ">Data Breach</router-link>  
    <router-link :to=" {name: 'contact'} ">Contact</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}

body {
  background: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 10px;
    font-size: 18px;
  }

  nav a {
    text-decoration: none;
    color: #fff;
    margin: 0 10px;
    transition: color 0.3s ease;
  }

  nav a:hover {
    color: #ffcc00;
  }

  nav a.router-link-exact-active {
    font-weight: bold;
  }

  .logo {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.logo-cyber {
  font-size: 24px;
  font-weight: bold;
  color: red;
  margin-right: 5px;
}

.logo-sec {
  font-size: 24px;
  font-weight: bold;
  color: black;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: red;
  margin-right: 5px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 10px 20px;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 10px;
}

.nav-links li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  text-decoration: underline;
  color: #ff0000;
}
</style>
