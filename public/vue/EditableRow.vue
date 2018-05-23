<template>
    <tr @dblclick="editing=!editing">
        <data-cell v-for="key in columns" v-bind:contents="row_data[key]" v-bind:column="key" v-bind:list="tableFor(key)" v-bind:key="key" v-bind:editing="editing"></data-cell>
    </tr>
</template>

<script>
import dataCell from "./DataCell.vue";
export default {
    name: "editable-row",
    components: {
        dataCell
    },
    props: ["columns", "row_data", "table"],
    data() {
        return {
            editing: false,

        };
    },
    methods: {
        isIDLink(key) {
            return key.match(/id$/);
        },
        tableFor(key) { //janky af
            let m_t = key.match(/id$/);
            if(m_t && m_t.index) {
                return key.match(/^(\S+)_/)[1];
            } else {
                return this.table;
            }
        }
    }
}
</script>
