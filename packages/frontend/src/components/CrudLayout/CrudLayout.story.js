import CrudLayout from "./CrudLayout"
import i18n from "../../i18n"
import { withKnobs, boolean } from "@storybook/addon-knobs";

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
    decorators: [withKnobs, decorator]
};


const data = []

export const normal = () => ({
    components: {CrudLayout},
    props: {
        creating: {default: boolean('creating',false)},
        updating: {default: boolean('updating',false)},
        deleting: {default: boolean('deleting',false)},
        showing: {default: boolean('showing',false)},
    },
    template: `<CrudLayout title="common.title" 
                           subtitle="common.subtitle" 
                           :creating="creating"
                           :updating="updating"
                           :deleting="deleting"
                           :showing="showing"
    >
        
        <template v-slot:list>
            <p>Listado...</p>
        </template>
        
        <template v-slot:create>
            My Create Form
        </template>
        
        <template v-slot:update>
            My Update From
        </template>
        
        
        <template v-slot:show>
            My Show Data
        </template>
        
    </CrudLayout>`,
    i18n
})
