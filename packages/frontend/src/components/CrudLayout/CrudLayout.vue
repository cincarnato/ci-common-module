<template>
    <div>
    <v-card class="elevation-6">
        <v-card-title class="title" v-t="title"></v-card-title>
        <v-card-subtitle class="" v-t="subtitle"></v-card-subtitle>
        <v-card-text>
            <slot name="list"></slot>
        </v-card-text>
    </v-card>

        <crud-layout-create>
            <template name="create"></template>
        </crud-layout-create>


    </div>
</template>

<script>
    import CrudLayoutCreate from "../CrudLayoutCreate/CrudLayoutCreate";
    import LearnSlot from "../LearnSlot/Sloty";

    export default {
        name: "CrudLayout",
        components: {LearnSlot, CrudLayoutCreate},
        props:{
            title: String,
            subtitle: String,
        }
    }
</script>

<style scoped>

</style>