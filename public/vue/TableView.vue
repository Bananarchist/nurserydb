<template>
    <div>
        <table class="table table-hover table-sm">
            <thead class="thead-light sticky-top">
                <tr class="sticky-top p-0">
                    <th v-bind:colspan="columns.length" scope="row">
                        <div class="btn-toolbar justify-content-between">
                            <div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Limit</span>
                                </div>
                                <input type="number" class="form-control" v-model="limit.run">
                            </div>
                            <div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">🔍</span>
                                </div>
                                <select class="custom-select" v-model="filter.key">
                                    <option href="#" v-for="key in columns" :key="key" :value="key">{{ key }}</option>
                                </select>
                                <input id="search_filter" type="text" class="form-control" v-model="filter.on">
                            </div>
                            <div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Sort</span>
                                </div>
                                <select class="custom-select" v-model="sort.key">
                                    <option href="#" v-for="key in columns" :key="key" :value="key">{{ key }}</option>
                                </select>
                                <div class="input-group-append">
                                    <button type="button" class="btn btn-outline" @click="swapSortDirection()"><span v-if="sort.direction==-1">🔽</span><span v-if="sort.direction==1">🔼</span></button>
                                </div>
                            </div>
                            <div class="input-group input-group-sm">
                                <button type="button" class="btn btn-primary" @click="clearFilters()">Clear Filters</button>
                                <button type="button" class="btn btn-primary" @click="exportView()" :disabled="!list.length">Export</button>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr class="sticky-top">
                    <th class="sticky-top" scope="col" v-for="key in columns" :key="key" :class="{'bg-info':(filter.key==key||sort.key==key)}">{{ key }}</th>
                </tr>
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
                    return item[this.filter.key].toString().toLowerCase().match(this.filter.on.toLowerCase());
                });
            }
            return this.collection;
        },
        list() {
            let l;
            this.sortList();
            l = this.filteredList
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
        swapSortDirection() {
            this.sort.direction = (this.sort.direction * -1);
        },
        sortList() {
            if(this.sort.key) {
                this.collection.sort(
                    (a,b) => {
                        if (a[this.sort.key] < b[this.sort.key]) {
                            return -1 * this.sort.direction;
                        }
                        if (a[this.sort.key] > b[this.sort.key]) {
                            return 1 * this.sort.direction;
                        }
                        return 0;
                    }
                )
            }
        },
        goToPage(page) {
            this.current_page = page;
            this.limit.start = page * this.limit.run;
        },
        clearFilters() {
            this.sort.direction = 1;
            this.sort.key = "";
            this.filter.on = "";
            this.filter.key = "";
            this.limit.run = 50;
        }
    }
};
</script>
<style>
    input[type=number] {
        max-width: 75px;
    }
</style>
