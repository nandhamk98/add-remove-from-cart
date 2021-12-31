import "./App.css";
import { useState } from "react";

function App() {
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
  const [cart, addRemoveCart] = useState([]);
  const [itemData, editItemContent] = useState(contents);
  const [showStatus, toggleDisplay] = useState(false);

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
    // console.log(newCart);
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

function ItemCards({ product, price, addtoListfunc, isAdded, id }) {
  return (
    <div className="itemCards">
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw0PDw8PDw8PDQ8PDQ8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQYC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDTgqkoAAAAAAACiACoAoIAKACAAKCAAAAAAC4AgAAAAAAEAAAVFBAAVBQQUBBQEAAAAAAABRAAAAAAAAAFQAVFQBUUASKAIoAAIKgAAAAAAGgAAAAAAAAAAAKgCiAKAAAAgAAAAAAAAAAAAAAAAAAAAoICgiooAigAAgAAKCAoIAAAAAAAACggqAAACoCiKCKAAAAAIKgAAAAAqAAoIAAogCgCAAAAAAKgAKAigAACKgAAAAAACgAYACKAAgAKAIqAqKAGCAqKgAAAAAACgAACKACKgAAKACCoAoAAAAAAAgKCAAAAAoAigAAAAgoCaKAgKAioAoAAAAACAKgAAAAAAAKIAoAiooIogAuAIAAACgAiooAFAEAAAAAAAAACCgIKCAAAoAYAioAoAAAAAAigiooAIAqAAKCAAAoCCgioAoAIKAgACoAqCggqAoAIKAIqAAAAAqAABAVAAABRAFABAAAABUoCoACgIKAIoCAAAAAAAAAAAAAACgIoAgAAAKgAqgDlQAqAAAAUAVAAUAQoAqUAAAUAH//Z"
        alt="450 x 300"
        width="250"
        height="150"
      />
      <div className="cardContent">
        <div className="contents">
          <h2 className="productName">{product}</h2>
          <p>{price}</p>
        </div>
        <div className="footer">
          <input
            type="button"
            className={!isAdded ? "button disabled" : "button enabled"}
            value={!isAdded ? "Add to cart" : "Remove from cart"}
            onClick={(event) => {
              addtoListfunc(product, id);
              // changeState(!isAdded);
            }}
          />
        </div>
      </div>
    </div>
  );
}

function CartList({ product, addtoListfunc, id }) {
  return (
    <div className="cartLists">
      <p
        onClick={() => {
          addtoListfunc(product, id);
        }}
      >
        {product}
      </p>
    </div>
  );
}

export default App;
