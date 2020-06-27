<template>
    <v-icon
            small
            color="primary"
            class="mx-1"
            @click="$emit('edit', item)"
    >
        edit
    </v-icon>
</template>

<script>
    export default {
        name: "EditButton",
        props: {
            item: {type: Object}
        }
    }
</script>

<style scoped>

</style>