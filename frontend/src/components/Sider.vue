<template>
  <div class="side">
    <div>
      <img src="../assets/Logo.svg" alt="logo" class="logo" />
    </div>
    <nav>
      <router-link to="/" class="notas_link">
        <img src="../assets/Notas-fiscais.svg" alt="notas" class="notas" />
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sider-side",
};
</script>

<style scoped>
.side {
  background-color: var(--side);
  color: var(--black);
  width: 288px;
  position: absolute;
  height: 100%;
}

.logo {
  margin: 25px 0px 25px 25px;
}

.notas_link {
  padding: 5px 25px 5px 25px;
  cursor: pointer;
  border-radius: 5px;
}

.notas {
  margin-top: 5px;
}

nav {
  display: flex;
  align-items: center;
}

nav a.router-link-exact-active {
  border-left: 4px solid var(--green);
  border-radius: 3px;
}

nav a:hover {
  background-color: #eff2f5;
}

nav a:focus {
  background-color: #eff2f5;
  border: 5px solid #e7ebff;
}
</style>
