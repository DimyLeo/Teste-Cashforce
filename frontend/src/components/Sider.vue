<template>
  <div class="side">
    <div>
      <img src="../assets/Logo.svg" alt="logo" class="logo" />
    </div>
    <nav>
      <router-link to="/">
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

.notas {
  padding: 5px 25px 5px 25px;
  cursor: pointer;
  border-radius: 5px;
}

.notas:active {
  background-color: var(--selected);
  border-left: 4px solid var(--green);
  border-radius: 3px;
}

.notas:hover {
  background-color: #f4f7fb;
}

.notas:focus {
  background-color: #f4f7fb;
  border: 5px solid #e7ebff;
}
</style>
