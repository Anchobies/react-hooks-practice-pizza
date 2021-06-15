import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [currentPizza, setCurrentPizza] = useState({ topping: "", size: "Small", vegetarian: false });

  useEffect(() => {
    fetch("http://localhost:3000/pizzas")
      .then(res => res.json())
      .then(data => {
        setPizzas(data);
      })
  }, []);

  const handleChangePizzas = id => {
    const newPizzas = pizzas.map(pizza => {
      if (pizza.id === id) {
        pizza = currentPizza;
      }

      return pizza;
    })

    setPizzas(newPizzas);
  }
  
  return (
    <>
      <Header />
      <PizzaForm onChangePizzas={handleChangePizzas} currentPizza={currentPizza} setCurrentPizza={setCurrentPizza} />
      <PizzaList pizzas={pizzas} setCurrentPizza={setCurrentPizza} />
    </>
  );
}

export default App;
