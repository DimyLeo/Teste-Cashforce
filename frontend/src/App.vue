<template>
  <main>
    <div class="side_head">
      <Sider />
    </div>
    <div class="page">
      <Header />
      <router-view />
    </div>
  </main>
</template>

<script>
import Header from "./components/Header";
import Sider from "./components/Sider";
export default {
  name: "App",
  components: {
    Header,
    Sider,
  },
};
</script>

<style>
:root {
  --black: #000;
  --white: #fff;
  --border: #dfe2eb;
  --side: #f9f9f9;
  --green: #00ad8c;
  --selected: #e4e4e4;
  --blue-text: #021b51;
  --light-text: #727d94;
  --text-table: #a1a8b8;
  --border-btn: #cad3ff;
  --text-tbody: #4d5566;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: 0.1s;
}
body {
  background-color: var(--side);
  color: var(--white);
  font-family: "DM Sans", sans-serif;
}
main {
  display: flex;
}
.page {
  width: 100%;
}
</style>
