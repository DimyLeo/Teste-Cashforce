<template>
  <div class="page_notas">
    <div class="head">
      <h1><img src="../assets/blue-handshake.svg" alt="hand" class="img-hand">Notas fiscais</h1>
      <p>Visualize as notas fiscais que você tem.</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Notas-note',
}
</script>

<style>
.page_notas {
  background-color: var(--white);
  color: var(--blue-text);
  padding: 40px;
}

.head h1 {
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 5px;
}

.head p {
  font-weight: 400;
  font-size: 14px;
  color: var(--light-text);
}

.img-hand {
  margin-right: 8px;
}
</style>