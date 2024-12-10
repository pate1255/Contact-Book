<template>
    <div class="details-container">
      <div class="back-edit-section">
        <div class="back-btn"><router-link to="/">Back</router-link></div>
        <div class="edit-btn"><router-link :to="`/edit-contact/${contact.id}`">Edit</router-link></div>
      </div>
      <h1>Contact Details</h1>
      <div class="content-section">
        <div><p><strong>Name:</strong> {{ contact.firstName }} {{ contact.lastName }}</p></div>
        <div><p><strong>Email:</strong> {{ contact.email }}</p></div>
        <div><p><strong>Phone:</strong> {{ contact.phone }}</p></div>
        <div><p><strong>Address:</strong> {{ contact.address }}</p></div>
      </div>
      <div class="delete">
        <button @click="deleteContact">Delete Contact</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const contact = ref(
        contacts.find((c) => c.id === parseInt(route.params.id))
      );
  
      const deleteContact = () => {
        const updatedContacts = contacts.filter(
          (c) => c.id !== parseInt(route.params.id)
        );
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        router.push('/');
      };
  
      return { contact, deleteContact };
    },
  };
  </script>
  