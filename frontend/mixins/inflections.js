function inflect(number, nouns) {
    let noun = nouns[0]
    if (number === 1) {
        noun = nouns[1]
    } else if (number % 100 === 12 || number % 100 === 13 || number % 100 === 14) {
        noun = nouns[2]
    } else if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) {
        noun = nouns[3]
    }

    return number + " " + noun
}

export default {
    methods: {
        inflectBrewery(number) {
            return inflect(number, ["browarów", "browar", "browarów", "browary"])
        },
        inflectCountry(number) {
            return inflect(number, ["państw", "państwo", "państw", "państwa"])
        },
    },
}