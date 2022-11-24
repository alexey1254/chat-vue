<template>
    <v-card 
        v-for="item of messages"
        :key="item.id"
        width="300" 
        class="mb-3" 
        theme="dark"
        color="#1F7087" 
        :subtitle="item.displayName" 
        :text="item.text"
        :class="item.uid === userChat.uid && 'ml-auto' "
        :color="item.uid == userChat.uid ? 'success' : '555'"
    ></v-card>
    
    
</template>

<script setup>
import { ref } from 'vue';

const userChat = ref({uid: "001"});

const messages = ref([
{
    id: 1,
    text: "Primer mensaje",
    uid: "001",
    time: Date.now(),
    displayName: "Alejandro"
},
{
    id: 2,
    text: "segundo mensaje",
    uid: "001",
    time: Date.now(),
    displayName: "Alejandro"
},
{
    id: 3,
    text: "tercer mensaje",
    uid: "002",
    time: Date.now(),
    displayName: "Pepe"
},
{
    id: 3,
    text: "cuarto mensaje",
    uid: "002",
    time: Date.now(),
    displayName: "Pepe"
}
]);

</script>