<script setup>
import { useContactStore } from "@store/contactStore";
const store = useContactStore();

const form = store.contactForm;

const addContact = () => {
  if (form.name && form.number && form.email) {
    store.add();
  } else {
    console.log("Please fill all fields in form");
  }
};
</script>

<template>
  <div>
    <h1>Contact add</h1>
    <div class="contact-add w-50 m-auto">
      <ContactForm @on-submit-form="addContact" />
    </div>
  </div>
</template>

<style scoped>
</style>
