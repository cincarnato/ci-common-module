<template>
    <CrudLayout title="Some Entity Management"
                subtitle="Some subtitle"
    >
        <template v-slot:list>
            <crud-list         :items="items"
                               :totalItems="totalItems"
                               :loading="loading"
                               :headers="headers"
                               @fetch="fetch"
                               @update="update"
                               @delete="remove"
                               @show="show"
            />
        </template>

        <crud-example-create-form v-if="creating"
                                  :open="creating"
                                  @close="creating=false"
                                  @created="onCreated"
        />

        <crud-example-update-form v-if="updating"
                                  :item="item"
                                  :open="updating"
                                  @close="updating=false"
                                  @updated="onUpdated"
        />

        <crud-example-delete-form v-if="deleting"
                                  :item="item"
                                  :open="deleting"
                                  @close="deleting=false"
                                  @deleted="onDeleted"
        />

        <crud-example-show v-if="showing" :open="showing" :item="item" @close="showing=false"/>

        <add-button @click="creating=true"></add-button>

    </CrudLayout>
</template>

<script>
    import CrudLayout from "../Crud/CrudLayout";
    import CrudExampleUpdateForm from "./CrudExampleUpdateForm";
    import CrudExampleCreateForm from "./CrudExampleCreateForm";
    import CrudExampleDeleteForm from "./CrudExampleDeleteForm";
    import AddButton from "../Crud/AddButton/AddButton";
    import CrudExampleList from "./CrudExampleCustomList";
    import CrudExampleShow from "./CrudExampleShow";
    import CrudList from "../Crud/CrudList";

    export default {
        name: "CrudExample",
        components: {
            CrudList,
            CrudLayout,
            CrudExampleList,
            CrudExampleCreateForm,
            CrudExampleUpdateForm,
            CrudExampleDeleteForm,
            CrudExampleShow,
            AddButton
        },
        data() {
            return {
                //List
                items: [],
                loading: false,
                totalItems: 0,
                search: null,
                //Actions
                creating: false,
                updating: false,
                deleting: false,
                showing: false,
                item: null,
                headers: [
                    {text: this.$t('common.name'), value: 'name'},
                    {text: this.$t('common.lastname'), value: 'lastname'},
                ]
            }
        },
        mounted() {
            this.fetch()
        },
        methods: {

            fetch(options) {
                //Implement Fetch API.
                // Simulation =>
                this.loading = true
                setTimeout(() => {
                    console.log("setTimeout")
                    let a = [{id: 1, name: 'john', lastname:'doe'}, {id: 2, name: 'jane', lastname:'doe'}]
                    if (options && options.search) {
                        this.items = a.filter(i => i.name.toLowerCase().indexOf(options.search) !== -1)
                    } else {
                        this.items = a
                    }
                    this.totalItems = this.items.length
                    this.loading = false
                }, 1500)

            },
            clearOperations(){
              this.showing = false
              this.updating = false
              this.deleting = false
              this.creating = false
            },
            remove(item) {
                this.clearOperations()
                this.item = item
                this.deleting = true
            },
            update(item) {
                this.clearOperations()
                this.item = item
                this.updating = true
            },
            show(item) {
                this.clearOperations()
                this.item = item
                this.showing = true
            },
            onCreated(item){
                this.items.push(item)
                this.totalItems++
                this.clearOperations()
            },
            onUpdated(item){
                console.log(item)
                let index = this.items.findIndex(i => i.id == item.id)
                this.$set(this.items,index,item)
                this.clearOperations()
            },
            onDeleted(item){
                let index = this.items.findIndex(i => i.id == item.id)
                this.items.splice(index,1)
                this.totalItems--
                this.clearOperations()
            }
        }
    }
</script>

<style scoped>

</style>