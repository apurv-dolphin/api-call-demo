import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";

export default function SearchBarKey() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      if (e.ctrlKey && e.keyCode === 75) {
        setOpen(!open);
      }
    };

    const handleCloseKeyDown = (evt) => {
      if (evt.keyCode === 27) {
        // Escape key pressed
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", handleCloseKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleCloseKeyDown);
    };
  }, [open]);

  const modalClose = () => setOpen(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <button>
          <p className="mb-0 p-1">
            <BiSearchAlt />
            <span>Search</span>
            <span>Ctrl + K</span>
          </p>
        </button>
      </div>
      {open && (
        <Modal
          show={open}
          onHide={modalClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            the escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={modalClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
