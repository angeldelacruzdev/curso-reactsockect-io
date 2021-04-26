import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import {
  getUsuarioStorage,
  clearUserStorage,
} from "../../helper/getUsuarioStorage";
import { useHideMenu } from "../../hooks/useHideMenu";

const { Title, Text } = Typography;

export const Escritorio = () => {
  useHideMenu(false);

  const history = useHistory();

  const [usuario] = useState(getUsuarioStorage());

  const salir = () => {
    clearUserStorage();
    history.push("/ingresar");
  };

  const siguienteTicket = () => {
    console.log("siguiente Ticket");
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
      <Divider></Divider>
      <Row>
        <Col>
          <Text style={{ fontSize: 30 }}>
            Está atentiendo el ticket número:{" "}
          </Text>
          <Text type="danger" style={{ fontSize: 30 }}>
            {" "}
            55
          </Text>
        </Col>
      </Row>
      <Divider></Divider>
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
