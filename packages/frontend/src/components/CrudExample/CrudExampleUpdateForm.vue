<template>
    <crud-update :open="open"
                 :loading="loading"
                 :errorMessage="errorMessage"
                 @update="update"
                 @close="$emit('close')"
    >
        <v-form>
            <v-text-field label="Name"></v-text-field>
            <p>{{updateConfirm}}</p>
        </v-form>
    </crud-update>

</template>

<script>
    import CrudUpdate from "../Crud/CrudUpdate/CrudUpdate";

    export default {
        name: "CrudExampleUpdateForm",
        components: {CrudUpdate},
        props: {
            open: {type: Boolean, default: false},
            item: {type: Object}
        },
        data() {
            return {
                loading: false,
                errorMessage: "Some Error",
                updateConfirm: false,
                form: {
                    name: this.item.name
                }
            }
        },
        methods: {
            update() {
                //Implement Update
                this.loading = true
                setTimeout(() => {
                    this.updateConfirm = true
                    this.loading = false
                }, 1000)
            }
        }
    }
</script>

<style scoped>

</style>