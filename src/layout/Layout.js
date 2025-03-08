import Header from "./Header"
import Footer from "./Footer"
import { Container, Grid } from "@mui/material";


export default function Layout({ children }) {

  return (
    <div>
      <Header />
      <Container sx={{ minHeight: "100vh" }}>
        {children}
      </Container>


      <Footer />
    </div>
  );
}
