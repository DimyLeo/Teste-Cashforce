<template>
  <main>
    <div class="side_head">
      <Sider />
    </div>
    <div class="page">
      <Header />
      <Notas />
    </div>
  </main>
</template>

<script>
import Header from './components/Header';
import Sider from './components/Sider';
import Notas from './pages/Notas';

export default {
  name: 'App',
  components: {
    Header,
    Sider,
    Notas
  }
}
</script>

<style>
:root {
  --black: #000;
  --white: #fff;
  --border: #dfe2eb;
  --side : #f1f1f1;
  --green :#00AD8C;
  --selected :#e4e4e4;
  --blue-text: #021B51;
  --light-text: #727D94;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: 0.1s;
}

body {
  background-color: #2d2d2d;
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
}

main {
  display: flex;
}

.page {
  width: 100%;
}
</style>
