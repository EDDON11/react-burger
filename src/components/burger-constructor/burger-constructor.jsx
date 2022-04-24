import React from "react";

import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import stylesConstructor from "./burger-constructor.module.css";

const BurgerConstructor = ({ openModal, dataBurger, Id }) => {
  const bun = dataBurger.find((item) => item.type === "bun");
  const notBun = dataBurger.filter((item) => item.type !== "bun");

  function onClick() {
    openModal({ modalType: "orderDetail", Id });
  }

  return (
    <section className={`${stylesConstructor.section} pt-25`}>
      {bun && (
        <div className={stylesConstructor.container}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      )}
      {notBun && (
        <div className={stylesConstructor.constructor}>
          {notBun.map((item) => (
            <div className={stylesConstructor.box} key={item._id}>
              <div className="mr-1">
                <DragIcon type="primary" />
              </div>
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          ))}
        </div>
      )}

      {bun && (
        <div className={stylesConstructor.container__buttom}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      )}
      <div className={stylesConstructor.out}>
        <div className={stylesConstructor.price}>
          <p className="text text_type_digits-medium mr-2">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={onClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
