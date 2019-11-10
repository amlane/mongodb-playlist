const mongoose = require("mongoose");

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before(function (done) {
    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.once('open', function () {
        console.log("Connection has been made!")
        done();
    }).on('error', function () {
        console.log("Connection error:", error)
    });
});

// drop test characters before each test
beforeEach(function (done) {
    //drop the collection
    mongoose.connection.collections.mariochars.drop(function () {
        done();
    });
})

