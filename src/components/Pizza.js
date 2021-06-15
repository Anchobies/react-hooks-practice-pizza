import React from "react";

function Pizza({ pizza, pizza: { topping, size, vegetarian }, setCurrentPizza }) {
  const handleClick = () => {
    setCurrentPizza(pizza);
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
