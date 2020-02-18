// CONSIGNES :
//
// Écrire une fonction fléché, qui prend en paramètre :
//      la tableau bars
// et retourne
//      un tableau contenant les noms des bars contenant le lettre t

const bars = [
  { id: 1, name: "un bar de test", allPintesPrices: [10, 10.95, 8, 7.95] },
  { id: 2, name: "un bar de pim", allPintesPrices: [5.5, 6.7, 5, 5.95] },
  { id: 3, name: "un bar de pouf", allPintesPrices: [4.95, 8, 8, 8] },
  { id: 4, name: "un bar de par", allPintesPrices: [3.95, 3.95, 4, 5.5] },
  { id: 5, name: "un bar de lta", allPintesPrices: [5.1, 5.11, 5.05, 5.01] },
  { id: 6, name: "un bar de bi", allPintesPrices: [4.5, 4.55, 4.95, 3.5] }
];

// Résultat attendu
// [
//   "un bar de test",
//   "un bar de lta"
// ];
