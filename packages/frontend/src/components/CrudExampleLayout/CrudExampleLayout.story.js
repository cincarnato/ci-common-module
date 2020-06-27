import CrudExampleLayout from "./CrudExampleLayout"
import i18n from "../../i18n"

const decorator = () => `
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <story/>
                </v-col>
            </v-row>
        </v-container>`

export default {
    title: "Components|Crud Example Layout",
    decorators: [decorator]
};


export const normal = () => ({
    components: {CrudExampleLayout},
    template: '<CrudExampleLayout />',
    i18n
})
