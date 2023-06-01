import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Evento, EventoChange } from "../../Redux/Interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  EVENTO_BY_ID,
  changeMyInfoEvento,
  eventoById,
} from "../../Redux/ActionType/Evento";

const ModalModifyEvento = ({ eventoId }: { eventoId: Evento }) => {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const dispatch = useDispatch();
  const selectedEvento = useSelector(
    (state: RootState) => state?.evento.Evento
  );
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  const [show, setShow] = useState(false);
  const [numeroPartecipanti, setNumeroPartecipanti] = useState(0);
  const [EventoPayload, setEventoPayload] = useState<EventoChange>({
    numeroPartecipanti: 0,
  });
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Cambiamento input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const parsedValue = parseFloat(value);
    setNumeroPartecipanti(isNaN(parsedValue) ? 0 : parsedValue);
  };

  // Aggiornamento pagina
  useEffect(() => {
    setEventoPayload({
      id: eventoId?.id,
      numeroPartecipanti: EventoPayload.numeroPartecipanti,
    });
  }, [eventoId]);

  // Spedizione dati
  const handleSubmit = async (numeroPartecipanti: number) => {
    const updatedNumeroPartecipanti =
      selectedEvento.numeroPartecipanti + numeroPartecipanti;
    const updatedObj: EventoChange = {
      ...EventoPayload,
      numeroPartecipanti: updatedNumeroPartecipanti,
    };
    let x = await changeMyInfoEvento(updatedObj, token);
    let data = await eventoById(eventoId?.id, token);
    dispatch({
      type: EVENTO_BY_ID,
      payload: data,
    });

    alert("Grazie per aver partecipato a questo evento");
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <>
      <div>
        <Button
          className="myButton py-2 "
          style={{ width: "10rem" }}
          onClick={handleShow}
        >
          Partecipa ad evento
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Partecipa ad evento</Modal.Title>
        </Modal.Header>
        <h6 className="mb-5">*Indicates required</h6>
        <h5 className="ms-3">
          Numero giocatori mancanti:{" "}
          {selectedEvento?.attivitaSportiva.numeroMassimoPartecipanti -
            selectedEvento?.numeroPartecipanti}
        </h5>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">Numero partecipanti*</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder=""
                autoFocus
                name="numeroPartecipanti"
                value={numeroPartecipanti.toString()}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={
              selectedEvento &&
              selectedEvento?.numeroPartecipanti + numeroPartecipanti >
                selectedEvento?.attivitaSportiva.numeroMassimoPartecipanti
            }
            className="ModalButton "
            onClick={() => {
              handleSubmit(numeroPartecipanti);
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

export default ModalModifyEvento;
