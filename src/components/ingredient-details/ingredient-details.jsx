import stylesDetails from "./ingredient-details.module.css";

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
      <p className={`${stylesDetails.title} text text_type_main-large`}>
        Детали ингредиента
      </p>
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

export default IngredientDetails;
