// A NE PAS REGARDER AVANT D'AVOIR ESSAYÉ
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const bars = [
  { id: 1, name: "un bar de test", allPintesPrices: [10, 10.99, 8, 7.99] },
  { id: 2, name: "un bar de pim", allPintesPrices: [5.5, 6.7, 5, 5.99] },
  { id: 3, name: "un bar de pouf", allPintesPrices: [4.99, 8, 8, 8] },
  { id: 4, name: "un bar de par", allPintesPrices: [3.99, 3.99, 4, 5.5] },
  { id: 5, name: "un bar de la", allPintesPrices: [5.1, 5.11, 5.05, 5.01] },
  { id: 6, name: "un bar de bi", allPintesPrices: [4.5, 4.55, 4.99, 3.5] }
];

const getBarsWithBadPints = bars => {
  return bars.filter(bar => {
    return bar.allPintesPrices.find(price => price < 5);
  });
};

console.log(getBarsWithBadPints(bars));
