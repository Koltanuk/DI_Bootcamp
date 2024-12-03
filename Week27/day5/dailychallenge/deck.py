import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"


class Deck:
    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    def __init__(self):
        self.cards = [Card(suit, value) for suit in self.suits for value in self.values]

    def shuffle(self):
        """Shuffle the deck of cards."""
        if len(self.cards) != 52:
            raise ValueError("Cannot shuffle a deck that doesn't have all 52 cards.")
        random.shuffle(self.cards)

    def deal(self):
        """Deal a single card from the deck."""
        if not self.cards:
            raise ValueError("No cards left to deal.")
        return self.cards.pop()


deck = Deck()
deck.shuffle()
print(deck.deal())  
print(len(deck.cards))  