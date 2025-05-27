import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "./components/sideBars/sideBar.tsx";
import AppRoutes from "./routes/routes.tsx";
import NavBar from "./components/navBar/navBar.tsx";

import BlogHeader from "./components/blogsComponents/BlogHead.tsx";
import { SearchProvider } from "./context/searchContex.tsx";

const { Content, Header } = Layout;

const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar />
          <Layout>
            <Header
              style={{ background: "#fff", borderBottom: "1px solid #eee" }}
            >
              <NavBar />
            </Header>
            <div style={{ margin: "10px 24px" }}>
              <BlogHeader />
            </div>

            <Content style={{ margin: "20px", background: "#fff" }}>
              <AppRoutes />
            </Content>
          </Layout>
        </Layout>
      </Router>
    </SearchProvider>
  );
};

export default App;
