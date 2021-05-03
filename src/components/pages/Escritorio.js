import React, { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";

import { SocketContext } from "../../context/SocketContext";
import {
  getUsuarioStorage,
  clearUserStorage,
} from "../../helper/getUsuarioStorage";
import { useHideMenu } from "../../hooks/useHideMenu";

const { Title, Text } = Typography;

export const Escritorio = () => {
  useHideMenu(false);

  const history = useHistory();

  const { socket } = useContext(SocketContext);

  const [usuario] = useState(getUsuarioStorage());
  const [ticket, setTicket] = useState(null);

  const salir = () => {
    clearUserStorage();
    history.push("/ingresar");
  };

  const siguienteTicket = () => {
    socket.emit("next-ticket", { usuario }, (ticket) => {
      setTicket(ticket);
    });
  };

  if (!usuario.agente || !usuario.escritorio) {
    return <Redirect to="/ingresar" />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title>{usuario.agente}</Title>
          <Text>Usted esta en el escritorio</Text>:
          <Text type="success"> {usuario.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />

      {ticket && (
        <Row>
          <Col>
            <Text style={{ fontSize: 30 }}>
              Está atentiendo el ticket número:{" "}
            </Text>
            <Text type="danger" style={{ fontSize: 30 }}>
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}
      <Divider />
      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={siguienteTicket}>
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
