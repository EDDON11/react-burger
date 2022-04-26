import React from "react";

import img from "../../image/img.svg";

import stylesOrder from "../order-details/order-details.module.css";

function OrderDetails() {
  return (
    <div className={`${stylesOrder.container} pt-30 pb-25`}>
      <div className="mb-8">
        <p className={`${stylesOrder.order} text text_type_digits-large`}>
          034536
        </p>
      </div>
      <p className="text text_type_main-medium">Идентификатор заказа</p>
      <img className={`${stylesOrder.img} mb-15 mt-15`} alt="фото" src={img} />
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <div className="mt-2">
        <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </div>
  );
}

export default OrderDetails;
