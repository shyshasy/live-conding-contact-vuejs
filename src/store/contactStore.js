import { defineStore } from "pinia";

const useContactStore = defineStore('contactStore', {
    state: () => (
        {
            contacts: [],
            currentContact: null,
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
        },
        edit(id, newContact){
            const contactIndex = this.contacts.findIndex(c => c.id === id);
            if(contactIndex !== -1){
                this.contacts[contactIndex] = {
                    ...id,
                    newContact
                }
            }
        },
        show(id){
            const contactIndex = this.contacts.findIndex(c => c.id === id);
            if(contactIndex !== -1){
                this.currentContact = this.contacts[contactIndex];
            }
        },
        remove(id){
            const contactIndex = this.contacts.findIndex(c => c.id === id);
            if(contactIndex !== -1){
               this.contacts = this.contacts.filter(c => c.id !== id);
            }
        }
    },
})