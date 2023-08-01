<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
    <p>Painel Adm</p>
    <div>
      <p>User</p>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Cargo</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role | processRole }}</td>
          <td>
            <button class="button is-success">Editar</button> |
            <button class="button is-danger">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .get("http://localhost:8686/user", req)
      .then((res) => {
        console.log(res);
        this.users = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      users: [],
    };
  },
  filters: {
    processRole: function (value) {
      if (value == 1) {
        return "Administrador";
      } else if (value == 0) {
        return "Usuário comum";
      }
    },
  },
};
</script>

<style></style>
