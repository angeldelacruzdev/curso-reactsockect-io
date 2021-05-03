import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Typography, List, Card, Tag, Divider } from "antd";
import { useHideMenu } from "../../hooks/useHideMenu";
import { SocketContext } from "../../context/SocketContext";
import { getUltimos } from "../../helper/getUltimos";

const { Title, Text } = Typography;

export const Cola = () => {
  useHideMenu(true);

  const [tickets, setTickets] = useState([]);

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on("ticket-asignado", (asignados) => {
      setTickets(asignados);
    });
  }, [socket]);

  useEffect(() => {
    getUltimos().then((resp) => {
      setTickets(resp.data.ultimos);
    });
  }, []);

  return (
    <>
      <Title level={1}>Atentiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 5)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agente}</Tag>,
                    <Tag color="magenta">Escritorio: {item.escritorio}</Tag>,
                  ]}
                >
                  <Title>No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">En el escritorio: </Text>
                      <Tag color="magenta">{item.number}</Tag>
                      <Text type="secondary">Agente: </Text>
                      <Tag color="volcano">{item.agente}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
