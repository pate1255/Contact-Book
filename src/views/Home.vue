<template>
  <div class="contact-container">
    <h1>Contact Book</h1>
    <div class="search-add-container">
      <div class="search">
        <input v-model="searchQuery" placeholder="Search by name" />
      </div>
      <div class="add-button">
        <router-link to="/add-contact">Add</router-link>
      </div>
    </div>
    
    <div class="contact-list">
      <ul>
        <li v-for="contact in filteredContacts" :key="contact.id">
          <router-link :to="`/contact-details/${contact.id}`">
            {{ contact.firstName }} {{ contact.lastName }}
          </router-link>
        </li>
      </ul>
    </div>
   
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const searchQuery = ref('');
    const contacts = ref(
      JSON.parse(localStorage.getItem('contacts')) || []
    );

    const filteredContacts = computed(() =>
      contacts.value
        .filter((contact) =>
          `${contact.firstName} ${contact.lastName}`
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
    );

    return { searchQuery, filteredContacts };
  },
};
</script>

