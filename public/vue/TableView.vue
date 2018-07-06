<template>
    <div>
        <table class="table table-hover">
            <thead class="thead-light sticky-top">
                <tr class="sticky-top">
                    <th class="sticky-top" v-for="key in columns" :key="key" :class="{'bg-info':filter.key==key}"><a @click="filter.key=(filter.key==key ? '':key)">{{ key }}</a></th>
                </tr>
                <tr class="sticky-top p-0" v-if="filter.key"><th v-bind:colspan="columns.length">
                    <input id="search_filter" type="text" class="form-control" v-model="filter.on">
                </th></tr>
            </thead>
            <tbody>
                <editable-row v-for="(c, index) in list" v-bind:columns="columns" v-bind:row_data="c" v-bind:table="table" v-bind:key="c.id"></editable-row>
            </tbody>
        </table>
        <ul class="pagination justify-content-center mb-2" v-if="pages && (pages-1)">
            <li class="page-item" :class="{'disabled':!current_page}"><a class="page-link" @click="goToPage(current_page-1)">Previous</a></li>
            <li v-for="(_,page) in Array(pages)" :class="{'active':current_page==page, 'page-item':true}" ><a class="page-link" @click="goToPage(page)" :key="page">{{ page + 1 }}</a></li>
            <li class="page-item" :class="{'disabled':current_page+1==pages}"><a class="page-link" @click="goToPage(current_page+1)">Next</a></li>
        </ul>
        <!--<footer id="tablefooter" class="fixed-bottom align-middle text-right mt-2">
            <button type="button" class="btn btn-primary" @click="exportView()">Export to CSV</button><button type="button" class="btn btn-primary" @click="clearFilters()">Clear Filters</button>
        </footer>-->
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
        },
        headers: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            sort: {
                direction: 1,
                key: "",
            },
            filter: {
                on: "",
                key: "",
            },
            limit: {
                start: 0,
                run: 50,
            },
            current_page: 0,
        }
    },
    computed: {
        columns() {
            return this.headers.length ? this.headers : ( Object.keys(this.collection.length ? this.collection[0] : []));
        },
        filteredList() {
            if(this.filter.on && this.filter.key) {
                return this.collection.filter(item => {
                    return item[this.filter.key].toString().match(this.filter.on);
                });
            }
            return this.collection;
        },
        list() {
            let l = this.filteredList;
            if(this.limit.run) {
                l = l.slice(this.limit.start, this.limit.start+this.limit.run)
            }
            return l;
        },
        pages() {
            return Math.ceil(this.filteredList.length/this.limit.run);
        },
    },
    methods: {
        goToPage(page) {
            this.current_page = page;
            this.limit.start = page * this.limit.run;
        }
    }
};
</script>
