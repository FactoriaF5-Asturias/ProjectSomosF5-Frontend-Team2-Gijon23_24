<template>
  <div>
    <header>
      <h1>IMPRESION PERSONALIZADA EN 3D</h1>
    </header>

    <div class="main-content">
      <div class="left-section">
        <img src="@/assets/images/estatua.png" alt="Imagen" />
        <button class="cta-button">Envíanos tu modelo</button>
      </div>

      <div class="right-section">
        <div class="info-box">
          <img src="../assets/images/enviamodelo.png" alt="Imagen 1" />
          <p>Envíanos tu modelo</p>
        </div>

        <div class="info-box">
          <img src="../assets/images/locreamos.png" alt="Imagen 2" />
          <p>Lo creamos</p>
        </div>

        <div class="info-box">
          <img src="../assets/images/acabadofino.png" alt="Imagen 3" />
          <p>Le damos el mejor acabado</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: $primary-background;
    text-align: center;
  }

  header {
    padding: 20px;
    background-color: #333;
    color: white;
  }

  header h1 {
    margin-bottom: 5px;
    border-bottom: 2px solid #fff;
    padding-bottom: 5px;
    text-align: center;
    font-size: medium;
  }

  .main-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #252525;
    padding: 0 12%;
  }

  .left-section {
    flex: 1;
    background-color: #252525;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    background-color: #ae81d1;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 16px;
  }

  .right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 4%;
    justify-content: space-around; 
    align-items: center; 
    background-color: #252525;
  }

  .info-box {
    text-align: center;
    color: aliceblue;
    font-size:xx-large;
    margin-bottom: 25px;
  }

  .info-box img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .divider {
    border-left: 2px solid #ccc;
    margin-left: 20px;
    margin-right: 20px;
  }
</style>

  
  