const translate = require("./index.js");

describe("translate", () => {
    test("hello to ellohay", () => {
        expect( translate("hello")).toEqual("ellohay");
            
    });
    test("cheese to eesechay", () => {
        expect( translate("cheese")).toEqual("eesechay");
    });

    test("giraffe to iraffegay", () => {
        expect( translate("giraffe")).toEqual("iraffegay");
    });

    test("apple to appleway", () => {
        expect( translate("apple")).toEqual("appleway");
    });

    test("else to elseway", () => {
        expect( translate("else")).toEqual("elseway");
    });
});

// Treat “y” as a consonant.
// Start with the simplest cases and work up, for example…
// words that start with vowels… write tests for several different starting vowels
// words that start with vowels with capital letters are converted to lowercase
// words that start with one consonant… write tests for the second letter being several different vowels
// words that start with two consonants
// words that start with more consonants