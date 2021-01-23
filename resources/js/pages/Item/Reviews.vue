<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card
                    min-height="350"
                >
                    <v-card-title>
                        Dodaj oceno
                    </v-card-title>

                    <v-form>
                        <div>
                            <v-rating v-model="rating"></v-rating>
                        </div>

                        <v-card-actions>
                            <v-textarea
                                outlined
                                no-resize
                                v-model="comment"
                            >
                            </v-textarea>
                        </v-card-actions>

                        <v-card-actions>
                            <v-btn
                                id="addReviewButton"
                                color="primary"
                                @click="addReview"
                            >Oddaj oceno
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
        <!--Reviews-->

        <v-row>
            <v-col
                v-for="review in reviews"
                :key="review.id"
                cols="12"
            >
                <v-card
                    height="200"
                >

                    <v-card-title>
                        {{ review.user.Name }} {{ review.user.Surname }}
                    </v-card-title>

                    <v-card-actions>
                        <v-rating
                            readonly
                            v-model="review.rating"
                        ></v-rating>
                    </v-card-actions>

                    <v-card-text>
                        {{ review.comment }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import api from "../../services/api";

export default {
    name: "Reviews.vue",
    data() {
        return {
            reviews: [],
            comment: null,
            rating: null,
            id: this.$route.params.id
        }
    },
    methods: {
        getReviews() {
            api.getReviews(this.id)
                .then((results) => {
                    this.reviews = results.data
                })
        },
        addReview() {
            let data = {
                comment: this.comment,
                rating: this.rating
            }
            api.addReview(this.id, data)
                .then((response) => {
                    this.getReviews()
                })
        }
    },
    mounted() {
        this.getReviews()
    }
}
</script>

<style scoped>

</style>
