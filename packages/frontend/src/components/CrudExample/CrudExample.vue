<template>
    <CrudLayout title="Some Entity Management"
                subtitle="Some subtitle"
    >

        <template v-slot:list>
            <ul>
                <li>1- One <show-button @show="showing=true" /> <edit-button @edit="updating=true" /> <delete-button @delete="deleting=true" /></li>
                <li>2- Two <show-button @show="showing=true" /> <edit-button @edit="updating=true" /> <delete-button @delete="deleting=true" /></li>
                <li>3- Three <show-button @show="showing=true" /> <edit-button @edit="updating=true" /> <delete-button @delete="deleting=true" /></li>
            </ul>
        </template>

        <template>
            My Create Form
        </template>


        <crud-example-update-form :open="updating" @close="updating=false" />



        <template>
            My Show Data
        </template>

    </CrudLayout>
</template>

<script>
    import CrudLayout from "../CrudLayout/CrudLayout";
    import EditButton from "../Crud/EditButton";
    import DeleteButton from "../Crud/DeleteButton";
    import CloseButton from "../CloseButton/CloseButton";
    import ShowButton from "../Crud/ShowButton/ShowButton";
    import CrudExampleUpdateForm from "./CrudExampleUpdateForm";
    export default {
        name: "CrudExample",
        components: {CrudExampleUpdateForm, ShowButton, CloseButton, DeleteButton, EditButton, CrudLayout},
        data(){
            return {
                creating: false,
                updating: false,
                deleting: false,
                showing: false
            }
        },
        methods: {
            createAction(){
                console.log("update")
            },
            updateAction(){
                console.log("update")
                this.$refs.cu.update()
            },
            deleteAction(){
                console.log("delete")
            }
        }
    }
</script>

<style scoped>

</style>