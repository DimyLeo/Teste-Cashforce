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
          <!-- <div class="div_body"> -->
          <tr class="tr_tbody" v-for="order in orders" :key="order.id">
            <td class="tbody_v">{{ order.orderNfId }}</td>
            <td class="tbody_v">{{ order.Buyer.name }}</td>
            <td class="tbody_v">{{ order.Provider.name }}</td>
            <td class="tbody_v">{{ order.emissionDate }}</td>
            <td class="value_status">{{ order.value }}</td>
            <td class="value_status">{{ order.orderStatusBuyer }}</td>
            <td><button class="btn-dados">Dados do Cedente</button></td>
          </tr>
          <!-- </div> -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { api } from "../api/api.js";

export default {
  name: "Notas-note",
  data() {
    return {
      orders: [],
    };
  },
  created() {
    this.getTable();
  },
  methods: {
    getTable() {
      api
        .get("/table")
        .then((res) => {
          this.orders = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
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

.tr_tbody {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

table {
  border-collapse: collapse;
  margin-top: 15px;
  margin-left: 15px;
}

table tr th,
td {
  padding: 5px 20px 5px 20px;
}

thead tr th {
  font-weight: 700;
  font-size: 12px;
  line-height: 15.62px;
  color: var(--text-table);
  text-align: left;
  padding-bottom: 20px;
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
