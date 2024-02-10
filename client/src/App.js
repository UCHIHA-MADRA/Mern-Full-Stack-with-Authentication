import React from "react";
import Logo from "./image/logo.png"
import {Layout, Image, Typography } from "antd";
import Home from "./components/Home";
import styles from "./styles"

const { Title } = Typography;
const { Header , Footer } = Layout;

const App = () => {
  return (
    <Layout style={styles.Layout}>
      <Header style={styles.Header}>
        <Image style={styles.Image} width="45" preview="false" src={Logo}/>
        &nbsp;
        <Title style={styles.Title}>Instaverse</Title>
      </Header>
      <Home/>
      <Footer style={styles.Footer}>2021 Instaverse</Footer>
    </Layout>
  )
}

export default App;
