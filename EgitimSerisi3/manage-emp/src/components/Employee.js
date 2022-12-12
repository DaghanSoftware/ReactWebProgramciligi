import React from "react";
import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal } from "react-bootstrap";
import EditForm from "./EditForm";
const Employee = ({ employees }) => {
  const { deleteEmployee } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <td>{employees.name}</td>
      <td>{employees.email}</td>
      <td>{employees.address}</td>
      <td>{employees.phone}</td>
      <td>
        <button
          onClick={handleShow}
          className="btn text-warning btn-act"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
        <button
          onClick={() => deleteEmployee(employees.id)}
          className="btn text-danger btn-act"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm></EditForm>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">Close Modal</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
export default Employee;
