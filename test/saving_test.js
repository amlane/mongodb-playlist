// testing with mocha
const assert = require("assert");
const MarioChar = require("../models/mariochar.js");

// describe tests
describe('Saving records', () => {
    // create tests
    it("saves a record to the db", (done) => {
        var char = new MarioChar({ name: "Mario" });
        char.save()
            .then(() => {
                assert(char.isNew === false);
                done();
            })
    })
})