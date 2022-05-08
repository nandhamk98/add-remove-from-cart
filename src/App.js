import "./App.css";
import { useState } from "react";
import { ItemCards } from "./ItemCards";
import { CartList } from "./CartList";

function App() {
  // data
  const contents = [
    {
      product: "Fancy Product",
      price: "$40.00 - $80.00",
      isAdded: false,
      id: 1,
    },
    { product: "Special Item", price: "$20.00", isAdded: false, id: 2 },
    { product: "Sale Item", price: "$25.00", isAdded: false, id: 3 },
    { product: "Popular Item", price: "$40.00", isAdded: false, id: 4 },
    { product: "Sale Item", price: "$25.00", isAdded: false, id: 5 },
    { product: "Fancy Product", price: "$280.00", isAdded: false, id: 6 },
    { product: "Special Item", price: "$20.00", isAdded: false, id: 7 },
    { product: "Popular Item", price: "$18.00", isAdded: false, id: 8 },
  ];

  // Defining states
  const [cart, addRemoveCart] = useState([]);
  const [itemData, editItemContent] = useState(contents);
  const [showStatus, toggleDisplay] = useState(false);

  // Editing cart based on adding remving items
  function editCart(product, id) {
    let newCart = [...cart];
    let flag = true;
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === id) {
        newCart.splice(i, 1);
        flag = false;
        break;
      }
    }

    if (flag) {
      newCart.push({ product, id });
    }
    return newCart;
  }

  function editContent(id) {
    let dict = [...itemData];
    for (let data of dict) {
      if (data["id"] === id) {
        data.isAdded = !data.isAdded;
      }
    }
    return dict;
  }

  // Adding to cart list
  function addtoList(product, id) {
    console.log(product);
    let newCart = editCart(product, id);

    let dict = editContent(id);

    editItemContent(dict);
    addRemoveCart(newCart);
  }
  return (
    <div className="App">
      <div className="title">
        <h1>Products</h1>
        <p className="cartButton" onClick={() => toggleDisplay(!showStatus)}>
          cart {cart.length}
        </p>
      </div>
      <div className="description">
        <h2 className="descTitle">Shop in style</h2>
        <p className="descTitle">With this shop hompeage template</p>
      </div>
      <div className={showStatus ? "cart" : "displayNone"}>
        {/* <hr /> */}
        <h2 className="cartTitle">
          cart<span className="count">{cart.length}</span>
        </h2>
        <div className="cartCards">
          {cart.map((data) => (
            <CartList
              product={data.product}
              addtoListfunc={addtoList}
              id={data.id}
            />
          ))}
        </div>
        <hr />
      </div>
      <div className="itemList">
        {itemData.map((data) => (
          <ItemCards
            product={data.product}
            price={data.price}
            addtoListfunc={addtoList}
            isAdded={data.isAdded}
            id={data.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
