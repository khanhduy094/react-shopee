import "normalize.css";
import "./assets/styles/global.scss";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
