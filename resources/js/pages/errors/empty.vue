<template>
  <v-container fill-height>
    <v-row
        align="center"
        justify="center"
    >
      <v-col>
        <v-card
            elevation="0"
        >
          <v-card-actions>
            <v-icon
                size="100"
                id="icon"
            >
              {{ errorIcon }}
            </v-icon>
          </v-card-actions>
          <h3 class="text-center">{{ errorText }}</h3>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mdiEmoticonSadOutline} from '@mdi/js'

export default {
  props: ["errorText"],
  name: "error",
  data() {
    return {
      errorIcon: mdiEmoticonSadOutline
    }
  }
}
</script>

<style>
#icon {
  margin: 0 auto;
}
</style>
