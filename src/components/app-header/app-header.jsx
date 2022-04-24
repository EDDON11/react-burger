import stylesHeader from "./app-header.module.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={stylesHeader.header}>
      <div className={stylesHeader.container}>
        <nav className={stylesHeader.menu__left}>
          <a
            href="#"
            className={`${stylesHeader.menu__btn} pt-4 pb-4 pl-5 pr-5`}
          >
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default pl-2">Конструктор</p>
          </a>
          <a
            href="#"
            className={`${stylesHeader.menu__btn} pt-4 pb-4 pl-5 pr-5`}
          >
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive pl-2">
              Лента заказов
            </p>
          </a>
        </nav>
        <a href="#" className={stylesHeader.logo}>
          <Logo />
        </a>
        <nav className={stylesHeader.menu__right}>
          <a
            href="#"
            className={`${stylesHeader.menu__btn} pt-4 pb-4 pl-5 pr-5`}
          >
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive pl-2">
              Личный кабинет
            </p>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
