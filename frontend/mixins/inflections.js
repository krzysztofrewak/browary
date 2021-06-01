function inflect (number, nouns, withNumber = true) {
  let noun = nouns[0]
  if (number === 1) {
    noun = nouns[1]
  } else if (number % 100 === 12 || number % 100 === 13 || number % 100 === 14) {
    noun = nouns[2]
  } else if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) {
    noun = nouns[3]
  }

  if (!withNumber) {
    return noun
  }

  return number + ' ' + noun
}

export default {
  methods: {
    inflectBrewery (number, withNumber = true) {
      return inflect(number, ['browarów', 'browar', 'browarów', 'browary'], withNumber)
    },
    inflectCountry (number, withNumber = true) {
      return inflect(number, ['państw', 'państwo', 'państw', 'państwa'], withNumber)
    },
    inflectCountries (number, withNumber = true) {
      return inflect(number, ['państwach', 'państwie', 'państwach', 'państwach'], withNumber)
    },
    inflectVisitedBreweries (number, withNumber = true) {
      return inflect(number, ['odwiedzonych browarów', 'odwiedzony browar', 'odwiedzonych browarów', 'odwiedzone browary'], withNumber)
    },
    inflectVisitedTrips (number, withNumber = true) {
      return inflect(number, ['odbytych wycieczek', 'odbyta wycieczka', 'odbytych wycieczek', 'odbyte wycieczki'], withNumber)
    },
    inflectVisitedCities (number, withNumber = true) {
      return inflect(number, ['zwiedzonych miast', 'zwiedzone miasto', 'zwiedzonych miast', 'zwiedzone miasta'], withNumber)
    },
    inflectVisitedCountries (number, withNumber = true) {
      return inflect(number, ['odwiedzonych państw', 'odwiedzone państwo', 'odwiedzonych państw', 'odwiedzone państwa'], withNumber)
    }
  }
}
