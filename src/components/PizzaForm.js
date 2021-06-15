import React from "react";

function PizzaForm({ onChangePizzas, currentPizza, setCurrentPizza }) {
  const handleSubmit = e => {
    e.preventDefault();

    if (currentPizza.id) {
      onChangePizzas(currentPizza.id);
    }
  }

  const handleInput = e => {
    let updatedPizza = { ...currentPizza, [e.target.name]: e.target.value };

    if (e.target.type === "radio") {
      updatedPizza = { ...currentPizza, [e.target.name]: !currentPizza.vegetarian };
    } 

    setCurrentPizza(updatedPizza);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={handleInput}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={currentPizza.topping}
          />
        </div>
        <div className="col">
          <select onChange={handleInput} className="form-control" name="size" value={currentPizza.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              onChange={handleInput}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={currentPizza.vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleInput}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!currentPizza.vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
