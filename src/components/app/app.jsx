import React from "react";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-Ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";

import { apiUrl } from "../../utils/api";
import getResponseData from "../../utils/api";

function App() {
  const [state, setState] = React.useState({
    isLoading: true,
    hasError: false,
    indegrients: [],
  });

  const [orderDetailsModalOpen, setOrderDetailsModalOpen] =
    React.useState(false);
  const [modalIngredientOpen, setModalIngredientOpen] = React.useState(false);
  const [modalIngredient, setModalIngredient] = React.useState({ data: null });

  React.useEffect(() => {
    fetch(`${apiUrl}`)
      .then((res) => getResponseData(res))
      .then((res) => {
        setState((state) => ({
          ...state,
          isLoading: false,
          indegrients: res.data,
        }));
      })
      .catch(() => {
        setState((state) => ({
          ...state,
          isLoading: false,
          hasError: true,
        }));
      });
  }, []);

  function openModal({ modalType, Id }) {
    let modalIngredientData = null;
    if (modalType === "ingredientDetail") {
      setModalIngredientOpen(true);
      modalIngredientData = state.indegrients.find((item) => item._id === Id);
      setModalIngredient({ data: modalIngredientData });
    } else {
      if (modalType === "orderDetail") {
        setOrderDetailsModalOpen(true);
      }
    }
  }

  function closeModal() {
    setOrderDetailsModalOpen(false);
    setModalIngredientOpen(false);
  }

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.content}>
        <BurgerIngredients
          openModal={openModal}
          dataBurger={state.indegrients}
        />
        <BurgerConstructor
          openModal={openModal}
          dataBurger={state.indegrients}
        />
      </main>
      {modalIngredientOpen && (
        <Modal onClose={closeModal}>
          <IngredientDetails
            image={modalIngredient.data.image}
            name={modalIngredient.data.name}
            calories={modalIngredient.data.calories}
            fat={modalIngredient.data.fat}
            proteins={modalIngredient.data.proteins}
            carbohydrates={modalIngredient.data.carbohydrates}
          />
        </Modal>
      )}
      {orderDetailsModalOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
