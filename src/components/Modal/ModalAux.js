import { Modal, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./modalAux.css";
const ModalAux = ({ setQuote }) => {
  const [show, setShow] = React.useState(false);
  const [text, setText] = React.useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        User your own text
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{ backgroundColor: "#333", border: "none" }}>
          <textarea
            className="text-area"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <Button
            onClick={() => {
              setQuote(text);
              handleClose();
            }}
          >
            Submit
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAux;
