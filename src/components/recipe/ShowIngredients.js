import React, { useState, useReducer } from "react";
import { Container, Row, Button, TabContent } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import "../../styles/ShowIngredients.css";

function ShowIngredients({ ingredients }) {
  // function with useReducer
  const initialState = { persons: 2, amount: 1 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "decrement":
        return {
          persons: state.persons - action.payload.persons,
          amount: state.amount - action.payload.amount,
        };
      case "increment":
        return {
          persons: state.persons + action.payload.persons,
          amount: state.amount + action.payload.amount,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickMin = () => {
    dispatch({
      type: "decrement",
      payload: { persons: 1, amount: 0.5 },
    });
  };
  const onClickPlus = () => {
    dispatch({
      type: "increment",
      payload: { persons: 1, amount: 0.5 },
    });
  };

  // function with useState
  // const [persons, setPersons] = useState(2);
  // const [amount, setAmount] = useState(1);
  // const onClickMin = () => {
  //   if (persons === 1) {
  //     setPersons((prevPersons) => (prevPersons = 1));
  //     setAmount((prevAmount) => (prevAmount = 0.5));
  //   } else {
  //     setPersons((prevPersons) => prevPersons - 1);
  //     setAmount((prevAmount) => prevAmount - 0.5);
  //   }
  // };
  // const onClickPlus = () => {
  //   if (persons === 20) {
  //     setPersons((prevPersons) => (prevPersons = 20));
  //     setAmount((prevAmount) => (prevAmount = 10));
  //   } else {
  //     setPersons((prevPersons) => prevPersons + 1);
  //     setAmount((prevAmount) => prevAmount + 0.5);
  //   }
  // };
  return (
    <Container>
      <Row>
        <h3 className="ingredients__title">Ingrediënten</h3>
        <div>
          <div className="ingredients__buttons">
            <Button
              onClick={onClickMin}
              style={{ borderRadius: "15px" }}
              disabled={state.persons < 2}
            >
              <FontAwesomeIcon icon={faCircleMinus} />
            </Button>
            <span> {state.persons} personen </span>
            <Button
              onClick={onClickPlus}
              style={{ borderRadius: "15px" }}
              disabled={state.persons > 19}
            >
              <FontAwesomeIcon icon={faCirclePlus} />
            </Button>
          </div>
        </div>
      </Row>
      <Row>
        <ul className="ingredients__list">
          {ingredients?.map((ingredient) => (
            <li key={uuidv4()} className="ingredients__list-item">
              <div>
                <span className="ingredients__list-item-ingredient">
                  {ingredient?.text?.ingredient}
                </span>
              </div>
              <div>
                <span className="ingredients__list-item-amount">
                  {ingredient?.text?.amount * state.amount}
                </span>{" "}
                <span className="ingredients__list-item-unit">
                  {ingredient?.text?.unit}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  );
}

export default ShowIngredients;
