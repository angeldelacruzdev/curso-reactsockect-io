import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import {
  LoginOutlined,
  PlusSquareOutlined,
  RedoOutlined,
} from "@ant-design/icons";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Ingresar } from "./Ingresar";
import { Cola } from "./Cola";
import { CrearTicket } from "./CrearTicket";
import { Escritorio } from "./Escritorio";
import { UiContext } from "../../context/UIContext";

const { Header, Content, Footer, Sider } = Layout;

export const RouterPage = () => {
  const { ocultarMenu } = useContext(UiContext);

  return (
    <>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsedWidth="0" breakpoint="md" hidden={ocultarMenu}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<LoginOutlined />}>
                <Link to="/ingresar"> Ingresar</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<RedoOutlined />}>
                <Link to="/cola"> Cola</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<PlusSquareOutlined />}>
                <Link to="/crear"> Crear ticket</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360, marginTop: 10 }}
              >
                <Switch>
                  <Route path="/ingresar" component={Ingresar} />
                  <Route path="/cola" component={Cola} />
                  <Route path="/crear" component={CrearTicket} />
                  <Route path="/escritorio" component={Escritorio} />
                  <Redirect to="/" />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </>
  );
};
