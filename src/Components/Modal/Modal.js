import style from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount(){
      window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    
    handleKeyDown = e =>{
        if (e.code === 'Escape'){
            console.log('Escape clicked');
            this.props.onClose();
        } 
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            console.log('backdrop clicked')
          this.props.onClose();
        }
      };

    render(){
        return createPortal(
            <div className={style.Overlay} onClick={this.handleBackdropClick}>
              <div className={style.Modal}>{this.props.children}</div>
            </div>, modalRoot
          )
    }

}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
}