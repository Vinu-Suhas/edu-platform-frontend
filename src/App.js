import "./App.css";
import { Header } from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { RouterCompo } from "./Components/RouterCompo/RouterCompo";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RouterCompo />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
