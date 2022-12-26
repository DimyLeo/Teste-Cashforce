<template>
  <div>
    <Header />
    <h1>Teste</h1>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #2d2d2d;
  color: white;
}
</style>
