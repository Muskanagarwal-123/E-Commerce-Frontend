import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import SignIn from "./components/LoginForm";
import RoutesFunc from "./components/routes";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/admin/*" element={<RoutesFunc />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
