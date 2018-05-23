<template>
    <td>
        <router-link v-bind:to="'/'+list+'/'+contents" v-if="isID">{{contents}}</router-link>
        <div v-else @dblclick="editing=!editing">
            <span v-if="!editing">{{contents}}</span>
            <input type="text" v-model="contents" v-if="editing" />
        </div>
    </td>
</template>
<script>
export default {
    props: ["contents", "column", "list", "editing"],
    data: function() {
        return {

        }
    },
    computed: {
        //edit mode...
        isID() {
            return !!this.column.match(/id$/);
        }
    },
    methods: {
        swapEditMode() {
            this.editing = !this.editing;
        }
    }
}
</script>
<style>

</style>
