// Displaying cart items
export function CartList({ product, addtoListfunc, id }) {
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
