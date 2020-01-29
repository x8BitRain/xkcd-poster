<template>
  <div id="app">
    <Interface msg="Welcome to Your Vue.js App"/>
    <Canvas msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Canvas from './components/Canvas.vue';
import Interface from './components/Interface.vue';

export default {
  name: 'app',
  components: {
    Canvas,
    Interface
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap');
body, #app {
  margin: 0;
  height:100vh;
  width:100vw;
  font-family: 'Patrick Hand', cursive;
}

#app {
  margin: 0; 
  display: flex;
  justify-content: flex-start;
}
</style>
