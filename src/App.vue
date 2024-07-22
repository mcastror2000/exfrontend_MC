<template>
  <div id="app">
    <nav>
      <router-link to="/calificaciones" active-class="active">Cálculo de calificaciones</router-link>
      <router-link to="/registro" active-class="active">Formulario de Registro</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  background-color: #f8f9fa;
  padding: 10px;
  display: flex;
  justify-content: space-around;
}
nav a {
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
}
nav a.active {
  color: #0056b3;
}
nav a:hover {
  text-decoration: underline;
}
</style>
