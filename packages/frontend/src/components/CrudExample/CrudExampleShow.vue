<template>
    <crud-show  :open="open"  @close="$emit('close')">
        <p>ShowData</p>
    </crud-show>

</template>

<script>
    import CrudShow from "../Crud/CrudShow/CrudShow";

    export default {
        name: "CrudExampleShow",
        components: {CrudShow},
        props: {
            open: {type: Boolean, default: false}
        },
        data() {
            return {
                item: Object,
            }
        }
    }
</script>

<style scoped>

</style>