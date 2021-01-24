<template>
    <v-card
        elevation="0"
    >
        <v-card-title
            class="display-1 pl-0"
        >Kontaktirajte nas
        </v-card-title>

        <v-form>
            <v-text-field
                label="Ime in priimek"
                outlined
                v-model="contact.name"
            >

            </v-text-field>

            <v-text-field
                label="E-naslov"
                v-model="contact.email"
                type="email"
                outlined
            >

            </v-text-field>

            <v-textarea
                no-resize
                outlined
                v-model="contact.message"
                height="200"
                label="Sporočilo..."
            ></v-textarea>
            <v-btn
                rounded
                width="300"
                height="50"
                id="submitButton"
                color="#5635A5"
                dark
                :block="$vuetify.breakpoint.mobile"
                @click="addContact()"
            >Pošlji
            </v-btn>
        </v-form>

        <v-card-actions>
            <v-alert
                width="100%"
                :type="has_error ? 'error': 'success'"
                v-if="response">
                {{ response }}
            </v-alert>
        </v-card-actions>
    </v-card>
</template>

<script>
import api from '../../services/api'

export default {
    data() {
        return {
            contact: {
                name: '',
                email: '',
                message: '',
            },
            defaultContact:{
                name: '',
                email: '',
                message: '',
            },
            has_error: null,
            response: null
        }
    },
    methods: {
        addContact() {
            let data = {
                name: this.contact.name,
                email: this.contact.email,
                message: this.contact.message
            }

            api.sendContact(data)
                .then((response) => {
                    this.has_error = false
                    this.response = response.data
                    Object.assign(this.contact, this.defaultContact)
                })
                .catch((err) => {
                    this.has_error = true
                    this.response = err.response.data.message
                })
        }
    }
}
</script>


