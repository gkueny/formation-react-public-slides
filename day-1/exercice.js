// 1. Récupérer la liste des produits
const products = [...document.querySelectorAll(".product")];

// 2. Fonction permettant de récupérer le titre et la description
// pour chaque produit
const getProductsInfo = products => {
  return products.map(product => {
    const title = product.querySelector("h3");
    const description = product.querySelector("p");

    return {
      title: title ? title.innerText : "",
      description: description ? description.innerText : ""
    };
  });
};

const productsInfos = getProductsInfo(products);

// 3. Filtrer le tableau productsInfos selon le text
// saisie dans input
const myInput = document.querySelector("#search");

// Ici on "écoute" l'événement "input" sur l'élément myInput
// La fonction passé en "callback" est appelé à chaque fois
// que l'événement est lancé
myInput.addEventListener("input", e => {
  const currentValue = e.target.value;
  const currentValueUppercase = currentValue.toUpperCase();

  const productsInfosFiltered = productsInfos.filter(product => {
    const valueIsInTitle = product.title
      .toUpperCase()
      .includes(currentValueUppercase);
    const valueIsInDescription = product.description
      .toUpperCase()
      .includes(currentValueUppercase);

    return valueIsInTitle || valueIsInDescription;
  });

  console.log(productsInfosFiltered);
});

// 4. Exercice min max
const getMinMax = (array = []) => {
  let min = null;
  let max = null;

  array.forEach((item, i) => {
    // premiere itération
    // on initialise min et max
    if (i == 0) {
      min = item;
      max = item;
    }

    min = item < min ? item : min;
    max = item > max ? item : max;
  });

  return {
    min,
    max
  };
};

const minMax = getMinMax([10, -100, 3, 5, 1, 1000, 99]);

// 5. Excercice nombre pair
const getEvenNumbers = (array = []) => {
  return array.filter(item => {
    return item % 2 === 0;
  });
};

const eventNumbers = getEvenNumbers([10, -100, 3, 2, 5, 1, 1000, 99]);
