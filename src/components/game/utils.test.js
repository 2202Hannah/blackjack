const {DeckGenerator} = require("./utils");

describe("deckGenerator", () => {
    test("returns an array of length 52", () => {
        expect(DeckGenerator().length).toBe(52)
    })
})
