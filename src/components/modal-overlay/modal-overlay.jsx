import stylesOverlay from "./modal-overlay.module.css";

const ModalOverlay = ({ children, onClick }) => {
  return (
    <div className={stylesOverlay.overlay} onClick={onClick}>
      {children}
    </div>
  );
};

export default ModalOverlay;
