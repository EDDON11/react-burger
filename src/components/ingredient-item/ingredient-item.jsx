import stylesItem from "./ingredient-item.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/currency-icon";
import PropTypes from "prop-types";

const IngredientItem = ({ id, image, name, price, openModal }) => {
  function onClick() {
    openModal({ modalType: "ingredientDetail", Id: id});
  }

  return (
    <div className={stylesItem.section}>
      <div className={stylesItem.content} onClick={onClick}>
        <img
          src={image}
          alt="Картинка ингридиента"
          className={stylesItem.img}
        />

        <p className={`${stylesItem.price} text_type_digits-default`}>
          {price}
          <CurrencyIcon type="primary" />
        </p>

        <p className="text text_type_main-default">{name}</p>
      </div>
      <Counter size="default" count={1} />
    </div>
  );
};

IngredientItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  openModal: PropTypes.func,
};

export default IngredientItem;
