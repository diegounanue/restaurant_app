import './Modal.scss';

import ReactDOM from 'react-dom';

const Backdrop = ({onBackDropClose}) => {
  return <div className='backdrop' onClick={onBackDropClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className='modal'>
      <div className='content'>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({children, onClose}) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onBackDropClose={onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;