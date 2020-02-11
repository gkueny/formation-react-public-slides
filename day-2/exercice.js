// EXO 1
const cart = [
  { category: "spa", price: 5000 },
  { category: "spa", price: 650 },
  { category: "gift", price: 10 },
  { category: "gift", price: 1200 },
  { category: "spa", price: 77 }
];
const CATEGORY_SPA = "spa";

function getSpaTotalPrice(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element.category === CATEGORY_SPA) {
      total = element.price + total;
    }
  }

  return total;
}

const totalCart = getSpaTotalPrice(cart);
// console.log({ totalCart });

const getSpaTotalPriceArrow = array => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element.category === CATEGORY_SPA) {
      total = element.price + total;
    }
  }

  return total;
};

const totalCart2 = getSpaTotalPriceArrow(cart);
// console.log({ totalCart2 });

const getSpaTotalPriceArrowFilter = array => {
  const arraySpa = array.filter(element => {
    return element.category === CATEGORY_SPA;
  });

  let total = 0;
  arraySpa.forEach(element => {
    total = element.price + total;
  });

  return total;
};

const totalCart3 = getSpaTotalPriceArrowFilter(cart);
// console.log({ totalCart3 });

const getSpaTotalPriceReduce = array => {
  const total = array.reduce((acc, element) => {
    return element.category === CATEGORY_SPA ? acc + element.price : acc;
    // if( element.category === CATEGORY_SPA) {
    //   return  acc + element.price
    // } else {
    //   return acc
    // }
  }, 0);

  return total;
};

const totalCart4 = getSpaTotalPriceReduce(cart);
// console.log({ totalCart4 });

//
// EXO 2
//
const user = {
  name: "Kueny",
  firstName: "Paul",
  age: 23,
  productsInCartPrices: [100, 15.99, 20, 10]
};

const getTotalCart = cart => {
  const total = cart.reduce((acc, element) => {
    return acc + element;
  }, 0);
  return total;
};

const getUserStringInfo = user => {
  return `${user.firstName} ${user.name} est agé de ${user.age} ans.
Son panier vaut ${getTotalCart(user.productsInCartPrices)}€`;
};

const getUserStringInfoWithoutFunction = user => {
  return `${user.firstName} ${user.name} est agé de ${user.age} ans.
Son panier vaut ${user.productsInCartPrices.reduce((acc, element) => {
    return acc + element;
  }, 0)}€`;
};

const userStringInfo = getUserStringInfo(user);
// console.log(userStringInfo);

const userStringInfo2 = getUserStringInfoWithoutFunction(user);
// console.log(userStringInfo2);

//
// EXO 3
// Promise
//
const getDataFromAPi = () => {
  setTimeout(() => {
    return [0, 1, 2];
  }, 5000);

  console.log("ici");
  return [];
};

const getDataFromAPiWithPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hasAnError = Math.random() > 0.1;
      if (hasAnError) {
        reject("il y a eu une erreur");
      } else {
        resolve({ cart: cart, statutCode: 200 });
      }
    }, 2000);
  });
};

document.querySelector("#loading").innerHTML = "loading...";
getDataFromAPiWithPromise()
  .then(result => {
    document.querySelector("#result").innerHTML = `j'ai eu mon résultat`;
    console.log(result);
  })
  .catch(error => {
    console.log({ error });
  })
  .finally(() => {
    document.querySelector("#loading").innerHTML = "";
  });

// Exemple d'utilisation des pormise avec fetch
fetch("https://official-joke-api.appspot.com/random_joke").then(function(
  result
) {
  result.json().then(function(result) {
    console.log({ result });
  });
});

// jokes API :
// https://github.com/15Dkatz/official_joke_api
// Météo API :
// https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&id=2972315&units=metric
