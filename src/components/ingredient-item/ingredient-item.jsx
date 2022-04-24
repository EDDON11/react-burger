import stylesItem from "./ingredient-item.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/currency-icon";

const IngredientItem = ({ id, image, name, price, openModal }) => {
  function onClick() {
    openModal({ modalType: "ingredientDetail", Id: id });
  }

  return (
    <div className={stylesItem.section}>
      <div className={stylesItem.content} onClick={onClick}>
        <img
          src={image}
          alt="Картинка ингридиента"
          className={stylesItem.img}
        />
        <p className={stylesItem.price}>
          {price}
          <CurrencyIcon type="primary" />
        </p>
        <p className="text text_type_main-default">{name}</p>
      </div>
      <Counter size="default" count={1} />
    </div>
  );
};

export default IngredientItem;
