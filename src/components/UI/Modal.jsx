import { BackdropComponent, ModalOverlayComponent } from './Modal.styled';
import { createPortal } from 'react-dom';

const Backdrop = ({ onClick }) => {
  return <BackdropComponent onClick={onClick} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <ModalOverlayComponent>
      <div className='content'>{children}</div>
    </ModalOverlayComponent>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ onClick, children }) => {
  return (
    <>
      {createPortal(<Backdrop onClick={onClick} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
