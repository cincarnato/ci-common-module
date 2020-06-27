import CrudCreate from "./CrudCreate"
import i18n from "../../../i18n"

const decorator = () => `
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <story/>
                </v-col>
            </v-row>
        </v-container>`

export default {
    title: "Components|CrudCreate",
    decorators: [decorator]
};


export const normal = () => ({
    components: {CrudCreate},
    template: '<CrudCreate>FORM</CrudCreate>',
    i18n
})
