<template>
  <div class="side">
    <div>
      <img src='../assets/Logo.svg' alt="logo" class="logo"/>
    </div>
    <nav>
        <img src='../assets/Notas-fiscais.svg' alt="notas" class="notas"><a href=""></a><img>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sider-side',
}
</script>

<style scoped>
.side {
  background-color: var(--side);
  color: var(--black);
  width: 288px;
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

.notas:hover {
  background-color: var(--selected);
  border-left: 4px solid var(--green);
  border-radius: 3px;
}
</style>