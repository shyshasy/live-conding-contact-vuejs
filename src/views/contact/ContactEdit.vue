<script setup>
import { useRoute } from 'vue-router';
import { useContactStore } from '@store/contactStore';
const store = useContactStore();

const emit = defineEmits(["onEditForm"]);

const route = useRoute();
const contact = store.getContactById(route.params.id);

const form = store.contactForm;

const editContact = (contact, form) =>{
  if (form.name && form.number && form.email) {
    store.edit(contact, form)
  } else {
    console.log("Please fill all fields in form");
  }
}
</script>

<template>
  <div>
    <h1>Contact edit</h1>
    <div class="contact-add w-50 m-auto">
      <ContactForm edit :contact="contact" @on-submit-form="editContact"/>
    </div>
  </div>
</template>

<style scoped>
</style>
