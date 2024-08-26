<script setup>
import { useContactStore } from "@store/contactStore";
const store = useContactStore();
</script>

<template>
  <div>
    <h1>Contact List</h1>
    <div class="btn-right-action mt-4 mb-4 d-flex justify-content-end">
      <CustomBtn
        custom-class="btn btn-danger"
        title="New contact"
        icon="fas fa-plus"
        isLink
        route="contact/new"
      />
    </div>
    <div class="contact-list-table">
      <table class="table table-hover table-bordered">
        <thead>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Number</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </thead>
        <tbody>
          <tr v-if="store.contacts.length === 0">
            <td colspan="4">No data</td>
          </tr>
          <tr v-for="item in store.contacts" :key="item.id">
            <td scope="row">{{ `# ${item.id}` }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.number }}</td>
            <td>{{ item.email }}</td>
            <td>
              <button class="btn btn-sm btn-primary me-2">
                <i class="fas fa-eye"></i>
              </button>

              <button class="btn btn-sm btn-secondary me-2">
                <i class="fas fa-edit"></i>
              </button>

              <button class="btn btn-sm btn-outline-danger">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
</style>
