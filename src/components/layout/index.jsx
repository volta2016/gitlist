import React from "react";
import Footer from "../Footer";
import { Container } from "../../styles/theme/CommonComponents";

const Layout = ({ children }) => (
  <>
    <Container>{children}</Container>
    <Footer />
  </>
);

export default Layout;
