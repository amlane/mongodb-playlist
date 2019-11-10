// testing with mocha
const assert = require("assert");
const MarioChar = require("../models/mariochar.js");

// describe tests
describe('Finding records', () => {
    var char;

    beforeEach(function (done) {
        char = new MarioChar({ name: "Mario" });
        char.save()
            .then(() => {
                done();
            })
    })

    // create tests
    it("finds a record in the db", (done) => {
        MarioChar.findOne({ name: "Mario" })
            .then((result) => {
                assert(result.name === "Mario");
                done();
            })
    })

    it("finds one record by ID from the db", (done) => {
        MarioChar.findOne({ _id: char._id })
            .then((result) => {
                assert(result._id.toString() === char._id.toString());
                done();
            })
    })
})