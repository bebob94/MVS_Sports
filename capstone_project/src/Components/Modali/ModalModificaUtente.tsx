import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { user, userChange } from "../../Redux/Interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  ALL_USERS,
  userById,
  changeMyProfileInfo,
  USER_BY_ID,
} from "../../Redux/ActionType/user";

const ModalModifyUtente = ({ userId }: { userId: user }) => {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const selectedUser = useSelector((state: RootState) => state?.User.user);
  const [show, setShow] = useState(false);
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [userPayload, setUserPayload] = useState<userChange>({
    id: userId.id,
    name: userId.name,
    surname: userId.surname,
    indirizzo: userId.indirizzo,
  });
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPayload({
      ...userPayload,
      [e.target.name]: e.target.value,
    });
  };

  // Aggiornamento pagina
  useEffect(() => {
    setUserPayload({
      id: userId.id,
      name: userId.name,
      surname: userId.surname,
      indirizzo: userId.indirizzo,
    });
  }, [userId]);

  // Spedizione dati
  const handleSubmit = async (obj: userChange) => {
    let x = await changeMyProfileInfo(obj, token);
    let data = await userById(selectedUser.id, token);
    console.log(data);
    dispatch({
      type: USER_BY_ID,
      payload: data,
    });
    dispatch({
      type: ALL_USERS,
      payload: data,
    });
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <>
      <div>
        <Button className="ModalButton" onClick={handleShow}>
          Modifica Utente
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Utente</Modal.Title>
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
                className="dataForm"
                value={userPayload.name.toString()}
                onChange={handleChange}
              />
              <Form.Label className="mt-3">Surname*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                name="surname"
                className="dataForm"
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
            className="ModalButton "
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
