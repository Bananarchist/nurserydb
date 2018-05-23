<template>
    <div>
        <table class="table table-hover">
            <thead class="thead-light sticky-top">
                <tr class="sticky-top">
                    <th class="sticky-top" v-for="key in columns">{{ key }}</th>
                </tr>
            </thead>
            <tbody>
                <editable-row v-for="(c, index) in collection" v-bind:columns="columns" v-bind:row_data="c" v-bind:table="table" v-bind:key="index"></editable-row>
            </tbody>
        </table>
    </div>
</template>

<script>
import editableRow from "./EditableRow.vue";
export default {
    components: {
        editableRow
    },
    props: {
        collection: {
            type: Array,
            default: () => [],
        },
        table: {
            type: String,
            default: "",
        }
    },
    computed: {
        columns() {
            if(this.collection.length) {
                return Object.keys(this.collection[0]);
            } else {
                return [];
            }
        },
    },
};
</script>
