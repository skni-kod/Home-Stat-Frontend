import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./navigation/AppRoutes";
import Navbar from "./assets/Navbar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <AppRoutes />
        </BrowserRouter>
    </div>
  );
}

export default App;
