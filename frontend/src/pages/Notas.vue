<template>
  <div class="page_notas">
    <div class="head">
      <h1>
        <img
          src="../assets/blue-handshake.svg"
          alt="hand"
          class="img-hand"
        />Notas fiscais
      </h1>
      <p>Visualize as notas fiscais que você tem.</p>
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>NOTA FISCAL</th>
            <th>SACADO</th>
            <th>CEDENTE</th>
            <th>EMISSÃO</th>
            <th>VALOR</th>
            <th>STATUS</th>
          </tr>
        </thead>

        <tbody>
          <!-- <tr class="tr_table" v-for="data of orderReturn" :key="data.id"> -->
          <tr class="tr_tbody">
            <!-- <td class="tbody_v">{{ data.orderNfId }}</td> -->
            <td class="tbody_v">1234</td>
            <td class="tbody_v">SACADO 001</td>
            <td class="tbody_v">CEDENTE 002</td>
            <td class="tbody_v">12/02/2020</td>
            <td class="value_status">R$ 49.725,00</td>
            <td class="value_status">RECEBIDO</td>
            <!-- <td class="tbody_v">
                {{ new Date(data.emissionDate).toLocaleDateString("pt-BR") }}
              </td>
              <td class="value_status">R$ {{ data.value }}</td>
              <td class="value_status">{{ data.orderStatusBuyer }}</td> -->
            <td><button class="btn-dados">Dados do Cedente</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import { api } from '../api/api.js'

export default {
  name: "Notas-note",
  // data() {
  //   return {
  //     buyerReturn: [],
  //     providerReturn: [],
  //     orderReturn: [],
  //   }
  // },

  // mounted() {
  //   api.get('/table').then(response => {
  //     this.buyerReturn = response.data.buyerReturn
  //     this.providerReturn = response.data.providerReturn
  //     this.orderReturn = response.data.orderReturn
  //   })
  // }
};
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

table {
  margin-top: 15px;
}

table tr th,
td {
  padding: 10px 20px 10px 20px;
}

thead tr th {
  font-weight: 700;
  font-size: 12px;
  line-height: 15.62px;
  color: var(--text-table);
}

.tr_tbody {
  background-color: red;
  border: 1px solid black;
  border-radius: 10px;
}

.value_status {
  color: var(--green);
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}

.tbody_v {
  color: var(--text-tbody);
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}

.btn-dados {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  background-color: var(--white);
  color: var(--light-text);
  border: 1px solid var(--border-btn);
  border-radius: 24px;
  padding: 8px 29px;
}
</style>
