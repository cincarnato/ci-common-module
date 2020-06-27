<template>
    <div>
        <v-card class="elevation-6">
            <v-card-title class="title" v-t="title"></v-card-title>
            <v-card-subtitle class="" v-t="subtitle"></v-card-subtitle>
            <v-card-text>
                <slot name="list"></slot>
            </v-card-text>
        </v-card>

        <slot></slot>

        <crud-layout-create v-if="creating"
                            :open="creating"
                            @close="$emit('close-create')" >
            <slot name="create"></slot>
        </crud-layout-create>

        <crud-layout-update v-if="updating"
                            :open="updating"
                            @close="$emit('close-update')"
                            @update="$emit('update')"
        >
            <slot name="update"></slot>
        </crud-layout-update>

        <crud-layout-delete v-if="deleting"
                            :open="deleting"
                            @close="$emit('close-delete')">
            <slot name="delete"></slot>
        </crud-layout-delete>

        <crud-layout-show v-if="showing"
                          :open="showing"
                          @close="$emit('close-show')">
            <slot name="show"></slot>
        </crud-layout-show>

    </div>
</template>

<script>
    import CrudLayoutCreate from "../Crud/CrudCreate";
    import CrudLayoutUpdate from "../Crud/CrudUpdate/CrudUpdate";
    import CrudLayoutDelete from "../Crud/CrudDelete/CrudDelete";
    import SubmitButton from "../SubmitButton/SubmitButton";
    import CrudLayoutShow from "../Crud/CrudShow/CrudShow";

    export default {
        name: "CrudLayout",
        components: {CrudLayoutShow, SubmitButton, CrudLayoutDelete, CrudLayoutUpdate, CrudLayoutCreate},
        props: {
            title: String,
            subtitle: String,
            //Operations
            creating: {type: Boolean, default: false},
            updating: {type: Boolean, default: false},
            deleting: {type: Boolean, default: false},
            showing: {type: Boolean, default: false},
        },


    }
</script>

<style scoped>

</style>