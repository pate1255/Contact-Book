<template>
    <div class="add-container">
      <div class="add-back-section">
        <h1>Add Contact</h1>
        <div class="back-btn"><router-link to="/">Back</router-link></div>
      </div>
      
      <form @submit.prevent="addContact">
        <label>
          First Name:
          <input type="text" placeholder="First Name" v-model="firstName" required />
        </label>
        <label>
          Last Name:
          <input type="text" placeholder="Last Name" v-model="lastName" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Email" v-model="email" required />
        </label>
        <label>
          Phone:
          <input type="tel" placeholder="Phone Number" v-model="phone" required />
        </label>
        <label>
          Address:
          <input type="text" placeholder="Address" v-model="address" required />
        </label>
        <div><button type="submit">Add Contact</button></div>
      </form>
      
    </div>
  </template>
  
<script>
  export default {
    name: "AddContact",
    data() {
      return {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      };
    },
    methods: {
      addContact() {
        const newContact = {
          id: Date.now(),
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          address: this.address,
        };
        const savedContacts = localStorage.getItem("contacts");
        const contacts = savedContacts ? JSON.parse(savedContacts) : [];
        contacts.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        alert("Contact added successfully!");
        this.$router.push("/"); // Redirect to Home page
      },
    },
  };
</script>
  
  