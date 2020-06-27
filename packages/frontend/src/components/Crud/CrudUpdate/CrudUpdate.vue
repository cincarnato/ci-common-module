<template>
    <v-dialog :value="open" max-width="850" persistent >
        <v-card>

            <toolbar-dialog
                    :title="title"
                    @close="$emit('close')"
            />

            <v-card-text>
                <slot></slot>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <close-button @click="$emit('close')"></close-button>
                <v-spacer />
                <submit-button @click="$emit('update')" text="common.update" ></submit-button>
            </v-card-actions>

        </v-card>
    </v-dialog>
</template>

<script>
    import ToolbarDialog from "../../ToolbarDialog";
    import CloseButton from "../../CloseButton/CloseButton";
    import SubmitButton from "../../SubmitButton/SubmitButton";

    export default {
        name: "CrudUpdate",
        components: {SubmitButton, CloseButton, ToolbarDialog},
        props: {
            title: {type: String, default: 'common.update'},
            open: {type: Boolean, default: false}
        }
    }
</script>

<style scoped>

</style>