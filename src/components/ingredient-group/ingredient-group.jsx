import stylesGroup from "../ingredient-group/ingredient-group.module.css";
import IngredientItem from "../ingredient-item/ingredient-item";

const IngredientGroup = ({
  groupCategory,
  openModal,
  nameCaterory,
  tabRef,
}) => {
  return (
    <div ref={tabRef}>
      <div className="mt-10 mb-6">
        <h2 className="text text_type_main-medium">{nameCaterory}</h2>
      </div>
      <div className={`${stylesGroup.content}`}>
        {groupCategory.map((item) => (
          <IngredientItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            openModal={openModal}
          />
        ))}
      </div>
    </div>
  );
};

export default IngredientGroup;
