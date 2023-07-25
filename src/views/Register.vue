<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <h2>Registro de usuário!</h2>
    <hr />
    <div class="columns is-centered">
      <div class="column is-half">
        <p>Nome:</p>
        <input
          type="text"
          placeholder="Nome do usuário"
          class="input"
          v-model="name"
        />
        <p>E-mail:</p>
        <input
          type="email"
          class="input"
          placeholder="email@email.com"
          v-model="email"
        />
        <p>Senha:</p>
        <input
          type="password"
          class="input"
          placeholder="***************"
          v-model="password"
        />
        <hr />
        <button class="button is-success" @click="register()">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      email: "",
    };
  },
  methods: {
    register() {
      console.log(this.name), console.log(this.email);
      console.log(this.password);
    },
  },
};
</script>

<style scoped></style>
