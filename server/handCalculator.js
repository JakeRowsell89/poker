const RELATIVE_VALUES = {
  '2': 1,
  '3': 2,
  '4': 4,
  '5': 8,
  '6': 16,
  '7': 32,
  '8': 64,
  '9': 128,
  '10': 256,
  '11': 512,
  '12': 1024,
  '13': 2048,
  '14': 4096,
  'PAIR': 8192,  // number (e.g. 14 ) * PAIR (8192)
  'TWO_PAIR': 16384,// paired number * PAIR + ( paired number * PAIR)
  'THREE_OF_KIND': 32768,  // number (e.g. 14 ) * THREE_OF_KIND
  'STRAIGHT': 65536, // SUM OF STRAIGHT CARDS * STRAIGHT
  'FLUSH': 131072, // SUM OF TOP 5 suited cards * FLUSH
  'FULL_HOUSE': 262144, // paired number * PAIR + ( tripped number * THREE_OF_A_KIND)
  'FOUR_OF_KIND': 524288,  // number (e.g. 14 ) * FOUR_OF_KIND
  'STRAIGHT_FLUSH': 1048576, // SUM OF top 5 staight suited cards * STRAIGHT FLUSH
}

function calculateHandStength(cards) {

  // Straight flush
  // Four of a kind
  // Full house
  // Flush
  // Straight
  // Three of a kind
  // Two pair
  // Pair
  // High card
}

function isStrictPair(cards) {

}

// let cards = [
//   {value :2},
//   {value :3},
//   {value :4},
//   {value :5},
//   {value :6},
// ]

function getHighCard(cards) {
  return cards.sort((a, b) => a.value > b.value ? -1 : 1)
    .slice(0, 5)
    .map(c => RELATIVE_VALUES[c.value])
    .reduce((acc, value) => acc + value)
}

module.exports = {
  calculateHandStength
}
