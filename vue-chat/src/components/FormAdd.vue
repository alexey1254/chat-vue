<template>
    <v-form class="w-100" @submit.prevent="sendMessage">
        <v-text-field 
        color="success" 
        label="ingresa el mensaje" v-model="message" append-icon="mdi-send" @click:append="sendMessage" ></v-text-field>
    </v-form>
    
</template>

<script setup>
import { ref } from 'vue';

const message = ref("")

const sendMessage = () => {
    console.log("mensaje enviado: " + message.value)
    message.value ="";
}
</script>