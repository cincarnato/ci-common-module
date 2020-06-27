<template>
    <v-icon
            small
            color="primary"
            class="mx-1"
            @click="$emit('show', item)"
    >
        search
    </v-icon>
</template>

<script>
    export default {
        name: "ShowButton",
        props: {
            item: {type: Object}
        }
    }
</script>

<style scoped>

</style>