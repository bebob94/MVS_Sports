import { useState, useEffect, ChangeEvent } from "react";
import {
  Button,
  Col,
  Row,
  Dropdown,
  DropdownButton,
  Form,
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../Redux/Store";
import { NewEvento } from "../../Redux/Interfaces";
import {
  ALL_EVENTI,
  CreaEvento,
  fetchEventi,
} from "../../Redux/ActionType/Evento";

const ModalCreaEvento = ({
  show,
  handleClose,
  UserId,
  AttivitaId,
}: {
  show: boolean;
  handleClose: () => void;
  UserId: Number;
  AttivitaId: Number;
}) => {
  const [myYears, setMyYears] = useState<number[]>([]);

  useEffect(() => {
    const myState = () => {
      const yearsArray = [];
      for (let i = 1923; i < 2024; i++) {
        yearsArray.push(i);
      }
      setMyYears(yearsArray.reverse());
    };
    myState();
  }, []);

  const myAttivita = useSelector(
    (state: RootState) => state.attivitaSportiva.AttivitaSportiva
  );
  const myUser = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(new FormData());

  const [eventPayload, setEventPayload] = useState<NewEvento>({
    numeroPartecipanti: 0,
    orarioInizio: new Date(),
  });
  const handleChange = (e: any) => {
    setEventPayload({
      ...eventPayload,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setEventPayload({
      numeroPartecipanti: 0,
      orarioInizio: new Date(),
    });
  }, []);

  const handleSubmit = async (obj: NewEvento) => {
    let x = await CreaEvento(obj, AttivitaId, UserId);

    let data = await fetchEventi();
    dispatch({
      type: ALL_EVENTI,
      payload: data,
    });

    setEventPayload({
      numeroPartecipanti: 0,
      orarioInizio: new Date(),
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un evento</Modal.Title>
        </Modal.Header>
        <h6>*Indicates required</h6>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">Numero Partecipanti*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                autoFocus
                name="Number"
                value={eventPayload?.numeroPartecipanti.toString()}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Row className="justify-content-around">
              <Col xs={5}>
                <DropdownButton
                  variant="white"
                  className="yearsDropdown ms-5"
                  title="Month"
                >
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-1"
                  >
                    January
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-2"
                  >
                    February
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-3"
                  >
                    March
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-1"
                  >
                    April
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-2"
                  >
                    May
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-3"
                  >
                    June
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-1"
                  >
                    July
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-2"
                  >
                    August
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-3"
                  >
                    September
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-1"
                  >
                    October
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-2"
                  >
                    November
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-3"
                  >
                    December
                  </Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col xs={5}>
                <DropdownButton
                  variant="white"
                  className="yearsDropdown ms-5"
                  title="Year"
                >
                  {myYears.map((elem, i) => (
                    <Dropdown.Item
                      key={i}
                      className="dropdown-basic-button"
                      href="#/action-1"
                    >
                      {elem}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="Profile-Btn1"
            style={{ margin: "0", fontSize: "1.2em", fontWeight: "bolder" }}
            onClick={() => {
              handleSubmit(eventPayload);
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

export default ModalCreaEvento;
