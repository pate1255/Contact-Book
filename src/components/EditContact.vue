<template>
  <div class="edit-container">
    <div class="heading-cancel-section">
      <h1>Edit Contact</h1>
      <div class="cancel-btn"><router-link :to="`/contact-details/${contact.id}`">Cancel</router-link></div>
    </div>
    
    <form @submit.prevent="updateContact">
      <label>
        First Name:
        <input v-model="contact.firstName" placeholder="First Name" required />
      </label>
      <label>
        Last Name:
        <input v-model="contact.lastName" placeholder="Last Name" required />
      </label>
      <label>
        Phone:
        <input v-model="contact.phone" placeholder="Phone Number" required />
      </label>
      <label>
        Address:
        <input v-model="contact.address" placeholder="Address" required />
      </label>
      <label>
        Email:
        <input v-model="contact.email" placeholder="Email" required />
      </label>
      <div><button type="submit">Update</button></div>
    </form>
    
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const contacts = ref(
      JSON.parse(localStorage.getItem("contacts")) || []
    );

    // Find the contact to edit by ID
    const contact = ref(
      contacts.value.find((c) => c.id === parseInt(route.params.id))
    );

    const updateContact = () => {
      const index = contacts.value.findIndex(
        (c) => c.id === parseInt(route.params.id)
      );
      if (index !== -1) {
        contacts.value[index] = contact.value;
        localStorage.setItem("contacts", JSON.stringify(contacts.value));
        router.push(`/contact-details/${contact.value.id}`);
      }
    };

    return { contact, updateContact };
  },
};
</script>
