import React from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientGroup from "../ingredient-group/ingredient-group";

import stylesIngredients from "./burger-Ingredients.module.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";

function BurgerIngredients({ openModal, dataBurger }) {
  const [current, setCurrent] = React.useState("bun");

  const buns = dataBurger.filter((item) => item.type === "bun");
  const sauces = dataBurger.filter((item) => item.type === "sauce");
  const mains = dataBurger.filter((item) => item.type === "main");

  const bunRef = React.useRef(null);
  const saucesRef = React.useRef(null);
  const mainRef = React.useRef(null);

  const tabClick = (evt, ref) => {
    setCurrent(evt);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`${stylesIngredients.burger_ingredients} pt-10`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={`${stylesIngredients.burger_menu_tab} mt-5 mb-10`}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={(evt) => tabClick(evt, bunRef)}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={(evt) => tabClick(evt, saucesRef)}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={(evt) => tabClick(evt, mainRef)}
        >
          Начинки
        </Tab>
      </div>
      <ul className={`${stylesIngredients.burger_list_container} pt-25`}>
        <li>
          <IngredientGroup
            nameCaterory={"Булки"}
            openModal={openModal}
            groupCategory={buns}
            tabRef={bunRef}
          />
        </li>
        <li>
          <IngredientGroup
            nameCaterory={"Соусы"}
            openModal={openModal}
            groupCategory={sauces}
            tabRef={saucesRef}
          />
        </li>
        <li>
          <IngredientGroup
            key="main"
            nameCaterory={"Начинки"}
            groupCategory={mains}
            tabRef={mainRef}
          />
        </li>
      </ul>
    </section>
  );
}

export default BurgerIngredients;
