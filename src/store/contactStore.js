import { defineStore } from "pinia";

export const useContactStore = defineStore('contactStore', {
    state: () => (
        {
            contacts: [
                {
                    id: 1,
                    name: "Ag",
                    number: "32022532",
                    email: "ag@gmail.com"
                },
                {
                    id: 2,
                    name: "Aichetou Taher",
                    number: "34556677",
                    email: "taher@gmail.com"
                },
                {
                    id: 3,
                    name: "Harouna FOFANA",
                    number: "66554433",
                    email: "harouna@gmail.com"
                },
                {
                    id: 4,
                    name: "Mariem FOFANA",
                    number: "66554433",
                    email: "mariem@gmail.com"
                }
            ],
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
});