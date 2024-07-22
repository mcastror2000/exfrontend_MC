<template>
  <div class="calificaciones">
    <h2>Cálculo de calificaciones</h2>
    <form @submit.prevent="calcular">
      <div class="form-group">
        <label for="nota1">Nota 1</label>
        <input type="number" id="nota1" v-model.number="nota1" min="10" max="70" required>
      </div>
      <div class="form-group">
        <label for="nota2">Nota 2</label>
        <input type="number" id="nota2" v-model.number="nota2" min="10" max="70" required>
      </div>
      <div class="form-group">
        <label for="nota3">Nota 3</label>
        <input type="number" id="nota3" v-model.number="nota3" min="10" max="70" required>
      </div>
      <div class="form-group">
        <label for="asistencia">Asistencia (%)</label>
        <input type="number" id="asistencia" v-model.number="asistencia" min="0" max="100" required>
      </div>
      <button type="submit" class="btn btn-primary">Calcular</button>
    </form>
    <p v-if="resultado !== ''">{{ resultado }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: '',
      nota2: '',
      nota3: '',
      asistencia: '',
      resultado: ''
    };
  },
  methods: {
    calcular() {
      const promedioPonderado = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.30);
      if (promedioPonderado >= 40 && this.asistencia >= 80) {
        this.resultado = `Aprobado con promedio ${promedioPonderado.toFixed(2)}`;
      } else {
        this.resultado = `Reprobado con promedio ${promedioPonderado.toFixed(2)}`;
      }
    }
  }
};
</script>

<style scoped>
.calificaciones {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  text-align: center
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
