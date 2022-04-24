import React from "react";
import stylesModal from "./modal.module.css";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ onClose, children }) => {
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
      <ModalOverlay onClick={onClose}>
        <div className={stylesModal.modal}>
          <div className={stylesModal.modal_close}>
            <CloseIcon type="primary" onClick={onClose} />
          </div>
          {children}
        </div>
      </ModalOverlay>
    </>,
    modalRoot
  );
};

export default Modal;
