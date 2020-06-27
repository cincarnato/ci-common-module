<template>
    <v-icon
            small
            color="red"
            class="mx-1"
            @click="$emit('delete', item)"
    >
        delete
    </v-icon>
</template>

<script>
    export default {
        name: "DeleteButton",
        props: {
            item: {type: Object}
        }
    }
</script>

<style scoped>

</style>