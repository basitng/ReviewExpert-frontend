import { Container } from "@mui/material";
import "./App.css";
import "./theme/components/App.css";
import Banner from "./components/Banner";
import TopCategories from "./components/Categories.js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar.js";
import ReviewMyProduct from "./components/ReviewMyProduct";
import Section1 from "./components/Section1";

function Home() {
  return (
    <div className="App">
      <Banner />
      <br />
      <br />
      <Container className="app-container">
        <Header
          heading="
A broad selection of courses
"
          subHeading="Choose from 155,000 online video courses with new additions published every month"
        />
        <Section1 />
        <TopCategories />
      </Container>
      <ReviewMyProduct />
    </div>
  );
}

export default Home;
