<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <v-header />
    <router-view/>
    <v-footer />
  </div>
</template>

<script>
import vHeader from './components/header/Header'
import vFooter from './components/footer/Footer'
export default {
  name: 'App',
  components: {
    vHeader,vFooter
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
