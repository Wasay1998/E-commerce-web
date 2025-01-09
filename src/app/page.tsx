import Banner from "./components/Banner";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Menuitems from "./components/Menuitems";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import ProductList from "./components/ProductList";
import Progressor from "./components/Progressor";
import Reservation from "./components/Reservation";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Progressor/>
      <Banner/>
      <ProductList/>
      <Menuitems/>
      <Offer/>
      <Card/>
      <Reservation/>
      <Footer/>
    </div>
  )
};
