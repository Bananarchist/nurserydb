var sinon = require("sinon");
var expect = require("chai").expect;
var simpleOEM = require("../server/rest/simple_oem");


describe("querying", () => {
    var so = null;
    var spy = sinon.stub();
    beforeEach(() => {
        //spy =
        so = new simpleOEM("madeuptable", "id", spy);
    });
    afterEach(() => {
        spy.reset();
    });
    it("empty returns all", () => {
        so.query();
        expect(spy.called).to.be.ok;
        expect(spy.getCall(0).args[0]).to.equal("SELECT * FROM madeuptable");
    });
    it("to insert works", () => {
        so.columns("username", "password").insert("zach", "123456").query();
        expect(spy.called).to.be.ok;
        expect(spy.args[0][0]).to.equal(`INSERT INTO madeuptable (username, password) VALUES("zach", "123456")`);
    });
    it("by pk works", () => {
        let test_id = 3;
        so.columns("username").getByPK(test_id).query();
        expect(spy.called).to.be.ok;
        expect(spy.args[0][0]).to.equal(`SELECT username FROM madeuptable WHERE id=${test_id}`);
    });
    it("serially still defaults to return all", () => {
        let test_id = 3;
        so.columns("username").getByPK(test_id).query();
        so.columns("username", "password").insert("zach", "123456").query();
        expect(spy.args[1][0]).to.equal(`INSERT INTO madeuptable (username, password) VALUES("zach", "123456")`);
        so.query();
        expect(spy.args[2][0]).to.equal("SELECT * FROM madeuptable");
    })
});
