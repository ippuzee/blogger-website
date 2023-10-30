<template>
  <div id="app" class="container">
    <form @submit.prevent="submitForm">
      <h1>Contact Us</h1>
      <input type="text" v-model="firstName" placeholder="First Name" required>
      <input type="text" v-model="lastName" placeholder="Last Name" required>
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="text" v-model="mobile" placeholder="Mobile" required>
      <h4>Type Your Message</h4>
      <textarea v-model="message" required></textarea>
      <input type="submit" value="Submit" id="button">
    </form>
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
  export default {
      data() {
        return {
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
        };
      },
      methods: {
        submitForm() {
          alert(`Form submitted! \nFirst Name: ${this.firstName} \nLast Name: ${this.lastName} \nEmail: ${this.email} \nMobile: ${this.mobile} \nMessage: ${this.message}`);

          this.firstName = "";
          this.lastName = "";
          this.email = "";
          this.mobile = "";
          this.message = "";
        },
      },
    };

  
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  input[type="submit"] {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #555;
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