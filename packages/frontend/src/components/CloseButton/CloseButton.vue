<template>
    <v-btn
            color="grey darken-1"
            dark
            v-on="$listeners"

    >
        {{$t(text)}}
    </v-btn>
</template>

<script>
    export default {
        name: "CloseButton",
        props: {
            text: {type: String, default: "common.cancel"},
            loading: {type: Boolean, default: false}
        }
    }
</script>

<style scoped>

</style>