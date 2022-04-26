import stylesDetails from "./ingredient-details.module.css";
import PropTypes from "prop-types";

function IngredientDetails({
  image,
  name,
  calories,
  fat,
  proteins,
  carbohydrates,
}) {
  return (
    <div className={`${stylesDetails.container} p-10`}>
      <img className={`${stylesDetails.icon}`} alt="заказ принят" src={image} />
      <p className="text text_type_main-medium">{name}</p>
      <div
        className={`${stylesDetails.captioncontainer} mt-8 text_color_inactive`}
      >
        <div className={`${stylesDetails.element} mr-5`}>
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default">{calories}</p>
        </div>
        <div className={`${stylesDetails.element} mr-5`}>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">{proteins}</p>
        </div>
        <div className={`${stylesDetails.element} mr-5`}>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">{fat}</p>
        </div>
        <div className={`${stylesDetails.element} mr-5`}>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default">{carbohydrates}</p>
        </div>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
};

export default IngredientDetails;
