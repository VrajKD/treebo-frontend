import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import HotelListing from "./pages/HotelListing/HotelListing";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/hotels" component={HotelListing} />
        <Route exact path="/hotel/:hotelId" component={HotelDetail} />
        <Redirect from="/" to="/hotels" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
