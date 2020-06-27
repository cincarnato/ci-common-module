<template>
    <v-dialog :value="open" persistent fullscreen>
        <v-card>

            <toolbar-dialog
                    :title="title"
                    @close="$emit('close')"
            />



            <v-card-text>
                <slot></slot>
            </v-card-text>

        </v-card>
    </v-dialog>
</template>

<script>
    import ToolbarDialog from "../ToolbarDialog";

    export default {
        name: "CrudLayoutCreate",
        components: {ToolbarDialog},
        props: {
            title: {type: String, default: 'common.create'},
            open: {type: Boolean, default: false}
        }
    }
</script>

<style scoped>

</style>