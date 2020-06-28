<template>
    <CrudLayout title="Some Entity Management"
                subtitle="Some subtitle"
    >
        <template v-slot:list>
            <crud-example-list @update="update"
                               @delete="remove"
                               @show="show"
            />
        </template>

        <crud-example-create-form v-if="creating" :open="creating" @close="creating=false"/>

        <crud-example-update-form v-if="updating" :item="item" :open="updating" @close="updating=false"/>

        <crud-example-delete-form v-if="deleting"  :item="item" :open="deleting" @close="deleting=false"/>

        <crud-example-show v-if="showing" :open="showing" :item="item"  @close="showing=false" />

        <add-button @click="creating=true"></add-button>

    </CrudLayout>
</template>

<script>
    import CrudLayout from "../CrudLayout/CrudLayout";
    import EditButton from "../Crud/EditButton";
    import DeleteButton from "../Crud/DeleteButton";
    import CloseButton from "../CloseButton/CloseButton";
    import ShowButton from "../Crud/ShowButton/ShowButton";
    import CrudExampleUpdateForm from "./CrudExampleUpdateForm";
    import CrudExampleCreateForm from "./CrudExampleCreateForm";
    import CrudExampleDeleteForm from "./CrudExampleDeleteForm";
    import AddButton from "../Crud/AddButton/AddButton";
    import CrudExampleLayout from "../CrudExampleLayout/CrudExampleLayout";
    import CrudExampleList from "./CrudExampleList";
    import CrudExampleShow from "./CrudExampleShow";

    export default {
        name: "CrudExample",
        components: {
            CrudExampleShow,
            CrudExampleList,
            AddButton,
            CrudExampleDeleteForm,
            CrudExampleCreateForm,
            CrudExampleUpdateForm,
            CrudLayout
        },
        data() {
            return {
                creating: false,
                updating: false,
                deleting: false,
                showing: false,
                item: null,
            }
        },
        methods: {
            remove(item){
                this.item = item
                this.deleting = true
            },
            update(item){
                this.item = item
                this.updating = true
            },
            show(item){
                this.item = item
                this.showing = true
            }
        }
    }
</script>

<style scoped>

</style>