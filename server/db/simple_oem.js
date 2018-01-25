class SimpleOEM {
    constructor(table, primary_key, query_func) {
        this.table = table;
        //this.fields = fields;
        this.p_key = primary_key;
        //this.query = query_func;
        this.query_set = {
            "ACTION": "SELECT",
            "COLUMNS": "*",
            "FROM": this.table
        }
        this.conn = query_func;
    }
    fieldsString() {
        return this.fields.join(", ");
    }
    query(data) {
        if(data) {
            Object.keys(data).forEach(k=>this.query_set[k]=data[k]);
            return this;
        } else {
            //create string
            let q = `${this.query_set.ACTION}`;
            switch(this.query_set.ACTION) {
                case "SELECT":
                    q = `${q} ${this.query_set.COLUMNS} FROM ${this.query_set.FROM}`;
                    if(this.query_set.WHERE) {
                        q = `${q} WHERE ${this.query_set.WHERE}`;
                    }
                    break;
                case "INSERT":
                    q = `${q} INTO ${this.query_set.FROM} (${this.query_set.COLUMNS}) VALUES${this.query_set.VALUES}`
                default: break;
            }
            //clear old values
            delete this.query_set.WHERE;
            delete this.query_set.VALUES;
            //refill defaults
            this.query_set["ACTION"] = "SELECT";
            this.query_set["COLUMNS"] = "*";
            this.query_set["FROM"] = this.table;
            //run connection
            console.log("running query", q);
            return this.conn(q);
        }
    }
    columns() {
        this.query({"COLUMNS":Array.from(arguments).join(", ")});
    //    this.query({"SELECT": arguments.length ? `${Array.from(arguments).join(", ")}` : "*"})
        return this;
    }
    insert(values) {
        let vals = Array.isArray(values) ? values : Array.from(arguments);
        this.query({"VALUES":`(${vals.map(v=>`"${v}"`).join(", ")})`, "ACTION": "INSERT"});
        return this;
    }
    match(test) {
        this.query({"WHERE":test});
        return this;
    }
    getByPK(pk) {
        this.query({"WHERE":`${this.p_key}=${pk}`,"ACTION": "SELECT"});
        return this;
    }
}

module.exports = SimpleOEM;
