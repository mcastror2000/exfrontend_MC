<template>
  <div class="registro">
    <h2>Formulario de Registro</h2>
    <form @submit.prevent="registrar">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="nombre" required>
        <span v-if="errores.nombre" class="error">{{ errores.nombre }}</span>
      </div>
      <div class="form-group">
        <label for="correo">Correo</label>
        <input type="email" id="correo" v-model="correo" required>
        <span v-if="errores.correo" class="error">{{ errores.correo }}</span>
      </div>
      <div class="form-group">
        <label for="contrasena">Contraseña</label>
        <input type="password" id="contrasena" v-model="contrasena" required>
        <span v-if="errores.contrasena" class="error">{{ errores.contrasena }}</span>
      </div>
      <div class="form-group">
        <label for="repetirContrasena">Repetir Contraseña</label>
        <input type="password" id="repetirContrasena" v-model="repetirContrasena" required>
        <span v-if="errores.repetirContrasena" class="error">{{ errores.repetirContrasena }}</span>
      </div>
      <button type="submit" class="btn btn-success">Enviar</button>
    </form>
    <p v-if="mensaje" :class="{'mensaje-error': !registroExitoso, 'mensaje-exito': registroExitoso}">{{ mensaje }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      contrasena: '',
      repetirContrasena: '',
      mensaje: '',
      registroExitoso: false,
      errores: {}
    };
  },
  methods: {
    validarCampos() {
      this.errores = {};

      // Validar nombre
      if (!this.nombre) {
        this.errores.nombre = 'El nombre es requerido.';
      }

      // Validar correo
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.correo) {
        this.errores.correo = 'El correo es requerido.';
      } else if (!correoRegex.test(this.correo)) {
        this.errores.correo = 'El correo no es válido.';
      }

      // Validar contrasena
      if (!this.contrasena) {
        this.errores.contrasena = 'La contraseña es requerida.';
      } else if (this.contrasena.length < 6) {
        this.errores.contrasena = 'La contraseña debe tener al menos 6 caracteres.';
      }

      // Validar repetirContrasena
      if (!this.repetirContrasena) {
        this.errores.repetirContrasena = 'Debe repetir la contraseña.';
      } else if (this.contrasena !== this.repetirContrasena) {
        this.errores.repetirContrasena = 'Las contraseñas no coinciden.';
      }

      return Object.keys(this.errores).length === 0;
    },
    registrar() {
      if (this.validarCampos()) {
        this.mensaje = 'Registro exitoso';
        this.registroExitoso = true;
      } else {
        this.mensaje = 'Hay errores en el formulario.';
        this.registroExitoso = false;
      }
    }
  }
};
</script>

<style scoped>
.registro {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

.error {
  color: red;
  font-size: 0.875em;
  margin-top: 5px;
}

.mensaje-error {
  color: red;
}

.mensaje-exito {
  color: green;
}
</style>
