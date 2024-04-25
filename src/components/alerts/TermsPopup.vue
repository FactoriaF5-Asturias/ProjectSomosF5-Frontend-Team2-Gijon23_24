<template>
  <div v-if="popupVisible" class="popup-container" @click.stop>
    <div class="terms-popup">
      <article>
        <h2>Términos y Condiciones</h2>
        <div class="content">
          <p>Al utilizar este servicio, usted acepta los siguientes términos y condiciones:</p>
          <ul>
              <hr>
              <p>Términos y Condiciones de Uso - Print Go</p>
              <li>Bienvenido a Print Go, una plataforma de compras online para productos 3D. Por favor, lee atentamente estos términos y condiciones antes de utilizar nuestra aplicación. Al acceder o utilizar la aplicación de Print Go, aceptas estar legalmente vinculado por estos términos y condiciones.</li>
              <hr>
              <p>1. Uso de la Aplicación:</p>
              <li>
                  1.1. Print Go es una plataforma diseñada para la compra de productos 3D de forma online. Al utilizar nuestra aplicación, aceptas que solo utilizarás los servicios proporcionados para fines legales y éticos.
              </li>
              <li>
                  1.2. Print Go es un proyecto pedagógico grupal no oficial, destinado exclusivamente para aprender a desarrollar aplicaciones web. No somos responsables del uso indebido de la aplicación o de los datos personales proporcionados por los usuarios.
              </li>
              <li>
                  1.3. La aplicación de Print Go solo ofrece funcionalidades de frontend y backend. No garantizamos la seguridad de los datos personales proporcionados por los usuarios durante el proceso de compra.
              </li>
              <hr>
              <p>2. Proceso de Compra:</p>
              <li>
                  2.1. Para realizar una compra en Print Go, debes registrarte como usuario y proporcionar la información requerida para completar la transacción.
              </li>
              <li>
                  2.2. Print Go utiliza Stripe como método de pago seguro para procesar las transacciones. Al utilizar nuestros servicios de pago, aceptas los términos y condiciones de Stripe.
              </li>
              <li>
                  2.3. Una vez completada la transacción, recibirás una confirmación de compra por correo electrónico. Asegúrate de revisar los detalles de tu pedido antes de finalizar la compra.
              </li>
              <hr>
              <p>3. Propiedad Intelectual:</p>
              <li>
                  3.1. Todos los derechos de propiedad intelectual relacionados con la aplicación de Print Go, incluyendo pero no limitado a diseños, logotipos, textos y gráficos, son propiedad de Print Go y están protegidos por las leyes de propiedad intelectual correspondientes.
              </li>
              <li>
                  3.2. Queda estrictamente prohibida la reproducción, distribución o modificación de cualquier contenido de la aplicación sin el consentimiento previo por escrito de Print Go.
              </li>
              <hr>
              <p>4. Limitación de Responsabilidad:</p>
              <li>
                  4.1. Print Go no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso o la imposibilidad de uso de la aplicación.
              </li>
              <li>
                  4.2. Print Go no garantiza la disponibilidad continua o ininterrumpida de la aplicación, ni la ausencia de errores en el funcionamiento de la misma.
              </li>
              <hr>
              <p>5. Modificaciones de los Términos y Condiciones:</p>
              <li>
                  5.1. Print Go se reserva el derecho de modificar estos términos y condiciones en cualquier momento sin previo aviso. Se recomienda revisar periódicamente esta página para estar al tanto de cualquier cambio.
              </li>
              <hr>
              <p>6. Ley Aplicable:</p>
              <li>
                  6.1. Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes vigentes en [País] y cualquier disputa que surja en relación con estos términos y condiciones estará sujeta a la jurisdicción exclusiva de los tribunales de [Ciudad], [País].
              </li>
              <hr>
              <p>Gracias por utilizar Print Go. Si tienes alguna pregunta o comentario sobre estos términos y condiciones, no dudes en contactarnos.</p>
          </ul>
          <p>Al aceptar estos términos y condiciones, usted confirma que los ha leído y comprendido completamente.</p>
        </div>
        <div class="actions">
          <button @click="closePopup">Aceptar</button>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const popupVisible = ref(true);

const closePopup = () => {
  popupVisible.value = false;
};
</script>

<style scoped>
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.209);
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.terms-popup {
  max-width: 40rem;
  height: 45rem;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  font-size: 1.3rem;
  display: flex;
}

article {
  margin: auto;
  height: 90%;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}
.content {
  padding: 2rem;
  border-radius: 10px;
  background-color: #eeeeee;
  overflow-y: auto;
  height: 85%;
  width: 100%;
}

.actions {
  text-align: center;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #006de1;
}

hr {
  margin: 1rem;
}

ul {
  p {
    margin-bottom: 1rem;
    font-weight: 700;
  }
}
</style>