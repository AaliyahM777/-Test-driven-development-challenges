// we use chai here as we expect
//we require our two functions to test out our string statements

var expect = require("chai").expect;
var words = require("../app");
var firstchar = require("../app2");

//  we desricbe words as a fucntion we start our callback here
// 1.) the first it condition= says it should show the number of characters in a string as callback
//2.) we expect our words function to be the word Aaliyah to equal 7 because there are 7 characters in the name
describe('words', function () {

    it('should return the numbers of characters in a string', function () {
        expect(words("Aaliyah")).to.equal(7)
    })
// then we do a failing test expect(words("Aaliyah")).to.equal(5)
// then corrected test using the to not equal so it passes
// this is true because Aaliyah does not have 5 characters it has 7 
    describe('words', function () {

        it('should NOT return the numbers of characters in a string', function () {
            expect(words("Aaliyah")).to.not.equal(5)
        })
    })
// here we desrcibe our second function as callback
// it should say should return frist characters in a string as description when we test
// we expect our firstchar function Aaliyah to equal the first letter in word (A) so it passes

    describe('firstchar', function () {

        it('should return the first character in a string', function () {
            expect(firstchar("Aaliyah")).to.equal('A')
        })
// tried failing test  expect(firstchar("Aaliyah")).to.equal('l')
// then corrected test with to.not.equal again
// this is true because we are looking for (0)the first letter in name
// L is the third letter in word and A is the first
        describe('firstchar', function () {

            it('should NOT return the first character in a string', function () {
                expect(firstchar("Aaliyah")).to.not.equal('l')
            })
        })
    })
})


