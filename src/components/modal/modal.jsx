import React from "react";
import stylesModal from "./modal.module.css";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ onClose, children, title }) => {
  React.useEffect(() => {
    const closeModalEsc = (event) => {
      event.key === "Escape" && onClose();
    };

    document.addEventListener("keydown", closeModalEsc);
    return () => {
      document.removeEventListener("keydown", closeModalEsc);
    };
  }, [onClose]);

  return createPortal(
    <>
      <div className={`${stylesModal.modal}`}>
        <div className={`${stylesModal.header} mt-10 mr-10 ml-10`}>
        <p className="text text_type_main-large">
          {title}
        </p>
        <div className={stylesModal.modal_close}>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        </div>
        {children}
      </div>
      <ModalOverlay onClick={onClose} />
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
 
};

export default Modal;
