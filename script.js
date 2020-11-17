// Basic JavaScript:  Counting Cards
// In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
// Write card counting function that :
// Receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value.
// Return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative.

var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("J");
cc("Q");
console.log(cc());
