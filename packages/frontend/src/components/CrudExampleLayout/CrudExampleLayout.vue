<template>
    <CrudLayout title="Some Entity Management"
                subtitle="Some subtitle"

                :creating="creating" @close-create="creating=false" @create="createAction"
                :updating="updating" @close-update="updating=false" @update="$refs.cu.update()"
                :deleting="deleting" @close-delete="deleting=false" @delete="deleteAction"
                :showing="showing"   @close-show="showing=false"
    >

        <template v-slot:list>
            <ul>
                <li>1- One <show-button @show="showing=true" /> <edit-button @edit="updating=true" /> <delete-button @delete="deleting=true" /></li>
                <li>2- Two <show-button @show="showing=true" /> <edit-button @edit="updating=true" /> <delete-button @delete="deleting=true" /></li>
                <li>3- Three <show-button @show="showing=true" /> <edit-button @edit="updating=true" /> <delete-button @delete="deleting=true" /></li>
            </ul>

        </template>

        <template v-slot:create>
            My Create Form
        </template>

        <template v-slot:update="update">
            <crud-example-update-form ref="cu"></crud-example-update-form>
        </template>


        <template v-slot:show>
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
    import CrudExampleUpdateForm from "../CrudExample/CrudExampleUpdateForm";
    export default {
        name: "CrudExampleLayout",
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