import stylesGroup from "../ingredient-group/ingredient-group.module.css";
import IngredientItem from "../ingredient-item/ingredient-item";
import PropTypes from "prop-types";
import { types } from "../../utils/propTypes";

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

IngredientGroup.propTypes = {
  groupCategory: PropTypes.arrayOf(types.isRequired).isRequired,
  openModal: PropTypes.func,
  nameCaterory: PropTypes.string.isRequired,
  tabRef: PropTypes.object.isRequired,
};

export default IngredientGroup;
