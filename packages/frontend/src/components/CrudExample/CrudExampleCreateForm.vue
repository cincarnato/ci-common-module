<template>
    <crud-create :open="open"
                 :loading="loading"
                 :errorMessage="errorMessage"
                 @create="create"
                 @close="$emit('close')">
        <v-form>
            <v-text-field label="Name"></v-text-field>
            <p>{{createConfirm}}</p>
        </v-form>
    </crud-create>

</template>

<script>
    import CrudCreate from "../Crud/CrudCreate/CrudCreate";
    export default {
        name: "CrudExampleCreateForm",
        components: {CrudCreate},
        props:{
          open: {type:Boolean, default:false}
        },
        data() {
            return {
                loading: false,
                errorMessage: "Some Error",
                createConfirm: false,
                form: {
                    name: null
                }
            }
        },
        methods: {
            create() {
                this.loading=true
                setTimeout(()=>{
                    this.createConfirm = true
                    this.loading= false
                },1000)

            }
        }
    }
</script>

<style scoped>

</style>