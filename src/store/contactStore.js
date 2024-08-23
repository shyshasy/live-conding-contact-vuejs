import { defineStore } from "pinia";

const useContactStore = defineStore('contactStore', {
    state: () => (
        {
            contacts: [],
            id: 0
        }
    ),
    actions: {
        add(contact){
            this.contacts.push(
                {
                    id: this.id++,
                    ...contact
                }
            )
        }
    },
})