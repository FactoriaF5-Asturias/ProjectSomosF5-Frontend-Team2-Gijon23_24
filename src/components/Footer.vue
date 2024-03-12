<template>
  <footer class="footer">
    <div class="footer-left">
      <img src="../assets/images/Logo3d.png" alt="Logo" class="logo" />
    </div>
    <div class="footer-center">
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/faq">Preguntas Frecuentes</router-link>
        <router-link to="/about">Sobre Nosotros</router-link>
        <router-link to="/contact">Contacto</router-link>
        </nav>
    </div>
    <div class="footer-center">
      <div class="copi">
        ©  copiright  todos los derechos reservados  
      </div>
    </div>
    <div class="footer-right">
      <img src="../assets/images/paypal.png" alt="PayPal" class="paypal-logo" />
        <img src="../assets/images/visa.png" alt="visa" class="visa-logo">
      </div>
    
   
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333; 
  padding: 40px;
}

.logo {
  width: 85px; 
}

.footer-left,
.footer-center,
.footer-right {
  display: flex;
  align-items: center;
  
}


nav {
  display: flex;
  gap: 60px;
}

nav a {
  color: aliceblue;
  text-decoration: none;
  font-size:large;
}

nav a:hover {
  color: blueviolet;
}

.paypal-logo {
  width: 30px;
  margin-right: 10%;
}

.visa-logo {
  width: 30px;
  margin-left: 20%;
}
.copi{
  margin-top: 15%;
  position: relative;
  color: aliceblue;

  
}


</style>


  