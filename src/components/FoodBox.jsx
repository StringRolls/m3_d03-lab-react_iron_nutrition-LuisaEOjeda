import { Card, Row, Col, Divider, Input, Button } from "antd";


export default function FoodBox(props) {
  const {food, deleteFood} = props;

  function handleOnClick(e) {
    deleteFood(food);
  }

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>
            Total Calories: {food.calories * food.servings}{" "}
          </b>{" "}
          kcal
        </p>
        <Button type="primary" onClick={handleOnClick}> Delete </Button>
      </Card>
    </Col>
  );
}
