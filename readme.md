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

Phases (betting phase omitted):
  Start game phase:
  preconditions:
  - a player connected
  - no game in progress

  phase actions
  - A computer "player gets added"
  - clears table of cards/money
  - Cards get shuffled
  - players with no money removed from game
  end conditions
  - When all phase actions have ended


  Dealer assigned:
  phase actions:
  - Dealer button is moved 1 player down

  end conditions
  - When all phase actions have ended

  Blinds phase:
  phase actions
  - Big/small blinds assigned
  - Money taken from big/small blind players
  end conditions
  - Money has been collected for blinds
  
  Dealing phase:
  phase actions
  - cards given to players, 1 by 1
  end conditions
  - each player has two cards

  Flop phase:
  phase actions
  - A card is burnt
  - 3 cards are revealed
  end conditions
  - there are 3 shared cards on the table

  Turn phase:
  phase actions
  - a card is burnt
  - a card is revealed
  end conditions
  - there are 4 shared cards on the table

  River phase:
  phase actions
  - a card is burnt
  - a card is revealed
  end conditions
  - there are 4 shared cards on the table

  Showdown phase:
  phase actions
  - highest hand combinations are calculated
  - all hands are revealed
  - Pot is given to winner
  end conditions
  - pot has been given to winner(s)

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

