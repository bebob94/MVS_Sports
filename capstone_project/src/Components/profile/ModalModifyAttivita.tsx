import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AttivitaChange, AttivitaSportiva } from "../../Redux/Interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_ID,
  changeMyInfoAttivita,
  searchById,
} from "../../Redux/ActionType/AttivitaSportive";
import { USER_BY_ID, userById } from "../../Redux/ActionType/user";

const ModalModifyAttivita = ({
  AttivitaId,
}: {
  AttivitaId: AttivitaSportiva;
}) => {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const selectedUser = useSelector((state: RootState) => state?.User.user);
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [AttivitaPayload, setAttivitaPayload] = useState<AttivitaChange>({
    id: AttivitaId?.id,
    nomeAttivita: AttivitaId?.nomeAttivita,
    descrizioneAttivita: AttivitaId?.descrizioneAttivita,
    indirizzo: AttivitaId?.indirizzo,
  });
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modifiche input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttivitaPayload({
      ...AttivitaPayload,
      [e.target.name]: e.target.value,
    });
  };

  // Aggiornamento pagina
  useEffect(() => {
    setAttivitaPayload({
      id: AttivitaId?.id,
      nomeAttivita: AttivitaId?.nomeAttivita,
      descrizioneAttivita: AttivitaId?.descrizioneAttivita,
      indirizzo: AttivitaId?.indirizzo,
    });
  }, [AttivitaId]);

  // Spedizion dati
  const handleSubmit = async (obj: AttivitaChange) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let x = await changeMyInfoAttivita(obj, token);
    let data = await searchById(selectedUser.attivitaSportiva.id, token);
    dispatch({
      type: ATTIVITA_SPORTIVA_FETCH_BY_ID,
      payload: data,
    });
    let data2 = await userById(selectedUser.id, token);
    dispatch({
      type: USER_BY_ID,
      payload: data2,
    });
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <>
      <div>
        <Button className="ModalButton " onClick={handleShow}>
          Modifica Attività
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Attivita</Modal.Title>
        </Modal.Header>
        <h6>*Indicates required</h6>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">nome Attivita*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                autoFocus
                name="nomeAttivita"
                value={AttivitaPayload?.nomeAttivita?.toString()}
                onChange={handleChange}
              />
              <Form.Label className="mt-3">Descrizione*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                name="descrizioneAttivita"
                value={AttivitaPayload?.descrizioneAttivita?.toString()}
                onChange={handleChange}
              />
              <Form.Label className="mt-3">Indirizzo*</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder=""
                name="indirizzo"
                value={AttivitaPayload?.indirizzo?.toString()}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="ModalButton "
            onClick={() => {
              handleSubmit(AttivitaPayload);
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

export default ModalModifyAttivita;
