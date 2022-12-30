let stocks = {
  fruits: ["orange", "grape", "bananas", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["chocolate", "coco chips", "dry fruits"],
};

// let order1 = (fruitName, call_production) => {
//   setTimeout(() => {
//     call_production();
//     console.log(`${stocks.fruits[fruitName]} was sleeted.`);
//   }, 2000);
// };

let production = () => {
  setTimeout(() => {
    console.log("Production has started.");

    setTimeout(() => {
      console.log("fruits chopped.");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} is added.`);

        setTimeout(() => {
          console.log("starting machine.");

          setTimeout(() => {
            console.log(`Ice cream is placed ${stocks.holder[0]}.`);

            setTimeout(() => {
              console.log(`${stocks.topping[0]} is added as topping.`);

              setTimeout(() => {
                console.log("Order Completed");
                setTimeout(() => {
                  console.log("ICE CREAM is served");
                }, 1000);
              }, 1000);
            }, 3000);
          }, 2000);
        }, 2000);
      }, 1000);
    }, 2000);
  }, 0);
};

// order(1, production);

let is_shop_OPen = true;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_OPen) {
      setTimeout(() => {}, time);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.fruits[1]} is selected.`);
});
