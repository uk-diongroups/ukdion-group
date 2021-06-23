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
        <ModalHeader toggle={toggle}>Important Notice</ModalHeader>
        <ModalBody>
          <div>
              <p>
              This website uses cookies to optimize your experience and your continued use signifies consent to our Group Privacy Policy - <Link href="/legal"><a>Read Here</a></Link> 
            </p>
            <button className="acceptBtn" onClick={iAgree}>
              I accept
            </button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default NdprAlert;