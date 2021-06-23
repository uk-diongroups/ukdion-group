import Link from 'next/link';
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const NdprAlert = (props) => {
  const {
    buttonLabel, isOpen
  } = props;

  const [modal, setModal] = useState(isOpen);

  const toggle = () => setModal(!modal);

  const iAgree = () => {
    window.localStorage.setItem("consent", true);
    toggle();
  }

  return (
    <div>
      <Modal backdrop="static" trapFocus={true} isOpen={modal} modalClassName="ndpr" toggle={toggle} className='ndpr' fade={true} >
        <ModalBody>
        <div>
              <p>
              This website uses cookies to optimize your experience and your continued use signifies consent to our Group Privacy Policy -  <a className="ndpr-link" href="/media">Read Here</a> 
              <span><button className="acceptBtn" onClick={iAgree}>I accept</button></span>
            </p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default NdprAlert;