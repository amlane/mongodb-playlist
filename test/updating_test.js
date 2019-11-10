// testing with mocha
const assert = require("assert");
const MarioChar = require("../models/mariochar.js");

// describe tests
describe('Updating records', () => {
    var char;

    beforeEach(function (done) {
        char = new MarioChar({ name: "Mario", weight: 50 });
        char.save()
            .then(() => {
                done();
            })
    })

    // create tests
    it("updates one record in the db", (done) => {
        MarioChar.findOneAndUpdate({ name: "Mario" }, { name: "Luigi" })
            .then(() => {
                MarioChar.findOne({ _id: char._id })
                    .then(result => {
                        assert(result.name === "Luigi");
                        done();
                    })
            })
    })

    it("increments the weight by 1", (done) => {
        MarioChar.updateMany({}, { $inc: { weight: 1 } })
            .then(() => {
                MarioChar.findOne({ name: "Mario" })
                    .then(result => {
                        assert(result.weight === 51);
                        done();
                    })
            })
    })

})