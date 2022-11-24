<template>
  <v-app>
    <v-main >
      <v-app-bar color="primary">
        Vuetify chat
      </v-app-bar>

      <v-container>
        <h1 class="text-center mt-5 text-h2">Hola</h1>
        
      </v-container>
    </v-main>
    <Chat></Chat>
  <v-footer class="d-flex flex-column" app>
      <FormAdd></FormAdd>
  </v-footer>
  </v-app>
</template>

<script setup>
import Chat from "./components/Chat.vue"
import FormAdd from "./components/FormAdd.vue"


</script>