<template>
  <v-container>
    <v-card
    class="mx-auto mt-12"
    width="500"
    :elevation="$vuetify.breakpoint.smAndDown ? 0 : 5"
    height="600"
    >
      <v-card-title>
        Registracija
      </v-card-title>

      <v-card-text>
        <v-form
        id="login_form"
        >
            <v-text-field
                label="Ime"
                v-model="name"
                :prepend-icon="mdiAccountCircle"
            ></v-text-field>

            <v-text-field
                label="Priimek"
                v-model="surname"
                :prepend-icon="mdiSmartCard"
            ></v-text-field>

            <v-text-field
                label="E-naslov"
                v-model="email"
                :prepend-icon="mdiEmail"
            ></v-text-field>

            <v-text-field
                label="Telefonska številka"
                maxLength="9"
                v-model="phone"
                :prepend-icon="mdiPhone"
            ></v-text-field>

            <v-checkbox
                v-model="agree"
                label="Strinjam se s pogoji uporabe"
            >
            </v-checkbox>

            <v-card-actions>
                <v-btn
                    width="100%"
                    rounded
                    color="#6C3FB8"
                    :disabled="!agree"
                    :dark="agree"
                    @click="registerAction"
                >Registriraj se
                </v-btn>
            </v-card-actions>
        </v-form>
        <v-alert
            :type="error ? 'error': 'success'"
            v-if="response !== null">
            {{response}}
        </v-alert>
      </v-card-text>
    </v-card>

      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>

  </v-container>
</template>

<script>

import api from "../../services/api"
import {mdiLock, mdiEmail, mdiAccountCircle, mdiPhone, mdiSmartCard} from '@mdi/js'

export default {
    data(){
        return{
            //Credentials
            email: '',
            phone: '',
            name: '',
            surname: '',

            error: null,
            response: null,
            //Other variables
            overlay: false,
            agree: false,
            // icons
            mdiLock,
            mdiEmail,
            mdiAccountCircle,
            mdiPhone,
            mdiSmartCard
        }
    },
    methods:{
        registerAction(){
            this.$store.commit('TOGGLE_SPINNER', true)
            let data = {
                email: this.email,
                phone: this.phone,
                name: this.name,
                surname: this.surname,
            }
            api.register(data)
            .then((response)=>{
                this.response = response.data
                this.error = false
                this.$store.commit('TOGGLE_SPINNER', false)
            })
            .catch((err)=>{
                this.error = true
                this.response = "Napaka pri registraciji"
                this.$store.commit('TOGGLE_SPINNER', false)
            })
        }
    }

}
</script>
