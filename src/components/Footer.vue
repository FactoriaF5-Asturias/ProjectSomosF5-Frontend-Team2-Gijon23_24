<template>
  <footer class="footer">
    <div class="footer-left">
      <img src="@/assets/images/Logo3d.png" alt="Logo" class="logo" />
    </div>
    <div class="footer-center">
      <div class="nav">
        <router-link to="/">Inicio</router-link>
        <router-link to="/faq">Preguntas Frecuentes</router-link>
        <router-link to="/about">Sobre Nosotros</router-link>
        <router-link to="/contact">Contacto</router-link>
      </div>
      <div class="copyright">
        © 2024 Todos los derechos reservados
      </div>
    </div>
    <div class="footer-right">
      <img src="@/assets/images/paypal.png" alt="PayPal" class="paypal-logo" />
      <img src="@/assets/images/visa.png" alt="Visa" class="visa-logo" />
    </div>
  </footer>
</template>

<script>

</script>

<style lang="scss" scoped  >
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:$primary-background; 
  padding: 54px; 
  color: white;
  background-color:transparentize($color: #1c1b1b, $amount: 0)
}


.logo {
  width: 86px; 
  margin-left: 40%;
}

.footer-left,
.footer-center,
.footer-right {
  display: flex;
  align-items: center;
}

.footer-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav {
  display: flex;
  gap: 80px;
}
.nav a{
  color: aliceblue;
  font-size:x-large;
}
.nav a:hover{
  color: $primary-color;
  transition: 1s;
}

router-link {
  color: white;
  text-decoration: none;
  font-size: large;
}



.copyright {
  margin-top: 65px;
  
  
}
.footer-right{
  margin-right: 2%;
}

.paypal-logo,
.visa-logo {
  width: 30px;
  margin-left: 20px;
}
</style>



  