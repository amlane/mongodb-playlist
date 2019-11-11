const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author.js");

describe("Nesting records", () => {
    beforeEach(done => {
        mongoose.connection.collections.authors.drop(function () {
            done();
        });
    })

    it("creates an author with sub-documents", function (done) {
        var pat = new Author({
            name: "Patrick Rothfuss",
            books: [{ title: "Name of the Wind", pages: 400 }]
        })

        pat.save()
            .then(() => {
                Author.findOne({ name: "Patrick Rothfuss" })
                    .then(result => {
                        assert(result.books.length === 1);
                        done();
                    })
            })
    })

    it("add a book to an author", function (done) {
        var pat = new Author({
            name: "Patrick Rothfuss",
            books: [{ title: "Name of the Wind", pages: 400 }]
        })
        pat.save().then(() => {
            Author.findOne({ name: "Patrick Rothfuss" })
                .then(result => {
                    result.books.push({ title: "Wise Man's Fear", pages: 500 });
                    result.save()
                        .then(() => {
                            Author.findOne({ name: "Patrick Rothfuss" })
                                .then(result => {
                                    assert(result.books.length === 2);
                                    done();
                                })
                        })
                })
        })
    })
})