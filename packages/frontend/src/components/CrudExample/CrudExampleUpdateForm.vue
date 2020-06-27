<template>
    <crud-update :open="open" @update="update" @close="$emit('close')">
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
        props:{
          open: {type:Boolean, default:false}
        },
        data() {
            return {
                updateConfirm: false
            }
        },
        mounted() {
            this.$parent.$on('update', this.update)
        },
        methods: {
            update() {
                this.updateConfirm = true
            }
        }
    }
</script>

<style scoped>

</style>