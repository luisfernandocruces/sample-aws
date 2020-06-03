<template>
  <div>
    <h1>Registro de Persona</h1>
    <form>
      <v-text-field v-model="name" label="Name"></v-text-field>
      <v-text-field v-model="email" label="E-mail"></v-text-field>
      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterPerson",
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    clear() {
      console.log("hola");
      this.name = "";
      this.email = "";
    },
    submit() {
      console.log(
        "Registrar persona con nombre: " + this.name + " y email: " + this.email
      );
      let person = {
        email: this.email,
        name: this.name,
      };
      axios
        .post(
          "https://hb9e52k8v9.execute-api.us-east-1.amazonaws.com/testing/people",
          person
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
