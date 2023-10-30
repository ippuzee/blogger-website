<template>
  <div class="about">
    <h1>About CyberSec</h1>
    <p>
      CyberSec is a leading source of cybersecurity news, providing updates on cyber attacks, vulnerabilities, and data breaches.
      As a trusted and independent outlet, we deliver comprehensive insights and analysis to cybersecurity professionals and enthusiasts.
    </p>
    <p>
      With a decade of experience, CyberSec has established itself as a reliable resource for 50 million annual readers seeking the latest information,
      insights, and solutions in the field of cybersecurity.
    </p>
    <p>
      Our mission is to empower our readers with the knowledge and tools to navigate the ever-evolving landscape of cybersecurity and mitigate risks.
      We cater to a diverse audience that includes Chief Information Security Officers (CISOs), IT executives, CEOs, government agency leaders,
      Managed Security Service Providers (MSSPs), Managed Service Providers (MSPs), distributors, resellers, and consultants.
    </p>
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

</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
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