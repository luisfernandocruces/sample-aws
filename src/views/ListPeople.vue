<template>
  <div>
    <h1>Listar personas registradas</h1>
    <v-list rounded>
      <div v-if="!list.length">
        <v-subheader>No hay información</v-subheader>
      </div>
      <div v-else>
        <v-subheader>Registros</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in list" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
              <v-list-item-subtitle v-text="item.email"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </div>
    </v-list>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListPeople",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.listPeople();
  },
  methods: {
    listPeople() {
      axios
        .get(
          "https://hb9e52k8v9.execute-api.us-east-1.amazonaws.com/testing/people"
        )
        .then((response) => {
          console.log(response.data);
          this.list = response.data.data.Items;
        });
    },
  },
};
</script>

<style></style>
