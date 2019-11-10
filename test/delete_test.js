// testing with mocha
const assert = require("assert");
const MarioChar = require("../models/mariochar.js");

// describe tests
describe('Deleting records', () => {
    var char;

    beforeEach(function (done) {
        char = new MarioChar({ name: "Mario" });
        char.save()
            .then(() => {
                done();
            })
    })

    // create tests
    it("deletes one record from the db", (done) => {
        MarioChar.findOneAndRemove({ name: "Mario" })
            .then(() => {
                MarioChar.findOne({ name: "Mario" })
                    .then((result) => {
                        assert(result === null)
                        done();
                    })
            })
    })

})