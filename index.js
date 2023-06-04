//getMenu() :In this function you'll make an call using fetch to get the food items from the JSON and show
//them to a user
//takeOrder(): This function should return a promise and shoud take 2500 milliseconds to resolve the order.
// in teh resolve choose any 3 burgers randomly and add them in the object
//orderPrep(): This function also returns a promise and takes 1500 milliseconds to resolve and the resolve
// should return {order_status:true; paid:false}
//payOrder(): This function also returns a promise and tajes 1000 milliseconds to reolve and the resolve
//returns the object {order_status:true; paid:true}
//thankuFun():Once {paid:true} is received, give an alert on the screen saying thankyou for eating with us today!

const divcontainer = document.getElementById("container");
let cart = [];
async function getMenu() {
  try {
    let response = await fetch(
      `https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`
    );
    let result = await response.json();

    showMenu(result);
  } catch (error) {
    console.log("error occured" + error);
  }
}
getMenu();

function showMenu(result) {
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    let item = result[i];
    let innerItem = `
        
            <img src=${item.imgSrc} width="200" height="200" alt="">
            <div class="name_price">
                <div class="name">${item.name}</div>
                <div class="price">${item.price}₹</div>
            </div>
            <button class="order_btn" onclick="addItem('${item.name}')">ADD</button>
        
    `;
    let menuItemContainer = document.createElement("div");
    menuItemContainer.className = "menu_Item";
    menuItemContainer.innerHTML = innerItem;

    divcontainer.append(menuItemContainer);
  }
}
// takeorder function
async function TakeOrder() {
  try {
    setTimeout(() => {
      cart.push({ name: "Cheeseburger" });
      cart.push({ name: "Hamburger" });
      cart.push({ name: "Vegburger" });
    }, 2500);
    console.log("order details", cart);

    return cart;
  } catch (err) {
    console.log("error occured while taking order" + err);
  }
}

function addItem(itemName) {
  cart.push({ name: itemName });
}

//orderprep function
async function orderPrep() {
  try {
    setTimeout(() => {}, 1500);
    return { order_status: true, paid: false };
  } catch (err) {
    console.log("error occured while preparing order" + err);
  }
}

//payorder function

async function payOrder() {
  try {
    setTimeout(() => {}, 1000);
    return { order_status: true, paid: true };
  } catch (err) {
    console.log("error occured while paying order" + err);
  }
}

//thankyouFnc() function

function thankyouFnc() {
  try {
    setTimeout(() => {
      alert("thankyou for eating with us today!");
    }, 1000);
  } catch (err) {
    console.log("error occured in thankyou function" + err);
  }
}

//palce order function

async function placeOrder() {
  try {
    let oredertake = await TakeOrder();
    if (oredertake.length > 0) {
      let prepareOrder = await orderPrep();
      if (prepareOrder.paid === false) {
        let payment = await payOrder();
        if (payment.paid) {
          thankyouFnc();
        }
      }
    }
  } catch (err) {
    console.log("error occured while placing order" + err);
  }
}
