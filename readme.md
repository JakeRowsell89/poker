1) hand strength comparison
2) actual sequence of the game
3) Betting rules/stack
4) communication between players/server
5) visuals
6) shuffling and dealing cards
7) 


Prerequisites:
- Cards
  - { suit: 'Hearts', value: 1 } -> Ace of hearts
- Game loop
- Player
  - stack
  - hand

Phases:
- Start game

- Dealer Assigned (should be ROTATED, maybe start with computer being dealer)
- Blinds
- Shuffle
- Cards dealt
- Betting phase
- Flop
- Betting phase
- Turn
- Betting phase
- River
- Betting phase
- Showdown

Critical path:
- Dealer assigned
- Cards dealt
- Flop
- Turn
- River
- Showdown (reveal all)

WS events:
- Dealer changes server -> client
- Blinds placed client -> server -> clients
- Card dealt server -> clients
- Bet placed client -> server -> clients
- Flop -> server -> clients
- Turn -> server -> clients
- River -> server -> clients
- Showdown server -> clients (reveal all)