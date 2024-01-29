import "./App.css";
import { Header } from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { RouterCompo } from "./Components/RouterCompo/RouterCompo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouterCompo />
    </BrowserRouter>
  );
}

export default App;
