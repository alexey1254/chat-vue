<template>
  <v-app>
      <div v-if="userGoogle === false">
        Loading...
      </div>
      <v-app-bar color="primary" v-if="userGoogle !== false">
        Vuetify chat
        <v-btn prepend-icon="mdi-email"
        color="white"
        variant="outlined"
        @click="googleAccess"
        v-if="!userGoogle"
        
        >
          Acceder
        </v-btn>

        <v-btn prepend-icon="mdi-cancel"
        color="white"
        variant="outlined"
        @click="logout"
        v-if="userGoogle"
        
        >
          Cerrar sesión
        </v-btn>
      </v-app-bar>
      <v-main app v-if="userGoogle !== false">
        <v-container>
          <Chat v-if="userGoogle"></Chat>
          <div v-else class="text-center mt-15">Debes iniciar sesión</div>
        
        
      </v-container>
    </v-main>
  <v-footer class="d-flex flex-column" app>
      <FormAdd v-if="userGoogle !== false"></FormAdd>
  </v-footer>
  </v-app>
</template>

<script setup>
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "@firebase/auth";
import { async } from "@firebase/util";
import {auth} from "./firebase";
import Chat from "./components/Chat.vue"
import FormAdd from "./components/FormAdd.vue"
import { ref } from "vue";
const userGoogle = ref(false);
const googleAccess = async() => {
  try {
    const provider = new GoogleAuthProvider();
    const {user} = await signInWithPopup(auth, provider);
    //console.log(user)
  } catch (error) {
    console.log(error)
  }
}

onAuthStateChanged(auth, (user) => {
  console.log(user);
  userGoogle.value = user;
});

const logout = async() => {
  await signOut(auth);
}



</script>