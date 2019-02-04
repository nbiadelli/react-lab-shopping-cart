import React, { Component } from 'react';
import ReactModal from 'react-modal';
import '../css/modal.css';


ReactModal.setAppElement(document.getElementById('root'));

const confirmMessage = () => 
    <div className="modal">
        <div>
           <div className="imag-corfim"></div>
        </div>
        <div>
            <h3>Compra confirmada</h3>
            <p>enviaremos autalização sobre</p>
            <p>o seu pedido no seu e-mail</p>
        </div>
            
    </div>;

const cancelMessage = () =>
    <div className="modal">
        <div>
            <div className="imag-cancel"></div>
        </div>
        <div>
            <h3> Compra cancelada </h3>
            <p>o pedido não foi enviado</p>
            <p>você não será cobrado</p>
        </div>
    </div>


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '60vw',
      maxWidth              : '500px',
    }
  };
  
  class Modal extends Component {
    constructor (props) {
        super(props);
        this.state = {
          showModal: false
        };
        this.handleCloseModal = props.handleCloseModal.bind(this);
        this.handleMessageDisplay = this.handleMessageDisplay.bind(this);
      }

      handleMessageDisplay (type, message) {
          switch (type) {
              case "confirm": 
                return confirmMessage();
              case "cancel":
                return cancelMessage();
              default:
                return <div className="warning">{message}</div>;
          }
      }

  render() {
    const { open, type, message } = this.props;
    return (
        <div className="button-cancel">
        
        <ReactModal 
            style={customStyles}
            shouldCloseOnOverlayClick={true}
            isOpen={open}
            onRequestClose={this.handleCloseModal}
            >
            {this.handleMessageDisplay(type, message)}
        </ReactModal>
        </div> 
    );
  }
}

export default Modal;