import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { user, userChange } from "../../Redux/Interfaces";
import { GiPencil } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  ALL_USERS,
  USER_BY_ID,
  changeMyInfo,
  userById,
} from "../../Redux/ActionType/user";

const ModalModifyUtente = ({ userId }: { userId: user }) => {
  const selectedUser = useSelector((state: RootState) => state?.User.user);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [userPayload, setUserPayload] = useState<userChange>({
    id: selectedUser.id,
    name: selectedUser.name,
    surname: selectedUser.surname,
    indirizzo: selectedUser.indirizzo,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPayload({
      ...userPayload,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setUserPayload({
      id: selectedUser.id,
      name: selectedUser.name,
      surname: selectedUser.surname,
      indirizzo: selectedUser.indirizzo,
    });
  }, [selectedUser]);

  const handleSubmit = async (obj: userChange) => {
    let x = await changeMyInfo(obj);

    let data = await userById(selectedUser.id);
    dispatch({
      type: USER_BY_ID,
      payload: data,
    });
  };

  return (
    <>
      <div className="d-flex">
        <Button id="modal-btn" className="d-flex" onClick={handleShow}>
          <GiPencil />
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <h6>*Indicates required</h6>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">Name*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                autoFocus
                name="name"
                value={userPayload.name.toString()}
                onChange={handleChange}
              />
              <Form.Label className="mt-3">Surname*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                name="surname"
                value={userPayload.surname.toString()}
                onChange={handleChange}
              />
              <Form.Label className="mt-3">Indirizzo*</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder=""
                name="indirizzo"
                value={userPayload.indirizzo.toString()}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="Profile-Btn1"
            style={{ margin: "0", fontSize: "1.2em", fontWeight: "bolder" }}
            onClick={() => {
              handleSubmit(userPayload);
              handleClose();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalModifyUtente;
