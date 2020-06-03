<template>
  <v-container>
    <h1>Bienvenido</h1>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <router-link to="/register">Resgistrar persona</router-link>
    <br />
    <router-link to="/listPeople">Listar personas registradas</router-link>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          src: "https://www.itreseller.es/files/201801/aws-amazon.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
