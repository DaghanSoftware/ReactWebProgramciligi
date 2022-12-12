import React, { useContext,useEffect,useState,useRef } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button,Modal } from "react-bootstrap";
import AddForm from "./AddForm";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const myRef = useRef(null);
  // const onButtonClick =()=> {
  //   myRef.current.focus();
  // }
  useEffect(()=>{
    handleClose();
  },[employees])
  return (
    <React.Fragment>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal">
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map((employee)=>(
              <tr key={employee.id}>
                <Employee employees={employee} />
              </tr>
            ))
          }
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm></AddForm>
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <input ref={myRef} type="text"></input>
      <button onClick={onButtonClick}>Focus Input</button> */}
    </React.Fragment>
  );
};

export default EmployeeList;