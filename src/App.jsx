//import FoodList from './components/FoodList';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "../src/foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [foodsData, setFoodsData] = useState(foods);
  const [food, setFood] = useState(foods);

  const addNewFood = (newFood) => {
    setFoodsData([...foodsData, newFood]);
    setFood([...food, newFood]);

    //console.log("New foods added", newFood )
  };

  function matchResults(result) {
    let searchResults = foodsData.filter((food) => {
      return food.name.toLowerCase().includes(result.toLowerCase());
    });
    console.log("search results", searchResults);
    setFood(searchResults);
  }

  function deleteFood(foodToDelete) {
    const deleted = food.filter((food) => food !== foodToDelete);
    setFood(deleted);
    //setFoodsData(deleted)
    console.log("food deleted", deleted);
  }

  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood} />
      <Search match={matchResults} />

      {food.map((food, idx) => {
        return (
          <div key={food.name + `${idx}`}>
            <FoodBox food={food} deleteFood={deleteFood} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
