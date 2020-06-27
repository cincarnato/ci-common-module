import CrudLayout from "./CrudLayout"
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
    title: "Components|CrudLayout",
    decorators: [decorator]
};


const data = []

export const normal = () => ({
    components: {CrudLayout},
    props: {
        data: {default: data}
    },
    template: `<CrudLayout title="common.title" subtitle="common.subtitle" >
        <template v-slot:list>
            Listado
        </template>
        
    </CrudLayout>`,
    i18n
})
