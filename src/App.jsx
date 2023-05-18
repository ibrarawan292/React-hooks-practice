import { createContext, useState } from "react";
import "./App.css";
import MainTable from "./Components/MainTable";
import UseState from "./Components/UseState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicTacToe from "./Components/TicTacToe";
import UseReducer from "./Components/UseReducer";
import UseEffect from "./Components/UseEffect";
import UseRef from "./Components/UseRef";
import UseLayoutEffect from "./Components/UseLayoutEffect";
import UseImperativeEffect from "./Components/UseImerativeHandle/UseImperativeEffect";
import UseContext from "./Components/UseContext/UseContext";
import UseMemoTutorial from "./Components/UseMemo";
import UseCallBackTutorial from "./Components/UseCallBack/UseCallBack";
import ReactSelectAll from "./Components/ReactSelectAll/ReactSelectAll";
// export const AppContext = createContext(null);
function App() {
  // const [name, setName] = useState("");
  return (
    <div className="App">
      {/* <AppContext.Provider value={{name, setName}}> */}
        <Router>
          <Routes>
            <Route path="/" element={<MainTable />} />
            <Route path="/useState" element={<UseState />} />
            <Route path="/useReducer" element={<UseReducer />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="/useRef" element={<UseRef />} />
            <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
            <Route
              path="/useImperativeEffect"
              element={<UseImperativeEffect />}
            />
            <Route
              path="/useContext"
              element={<UseContext />}
            />
            <Route
              path="/useMemo"
              element={<UseMemoTutorial />}
            />
            <Route
              path="/useCallBack"
              element={<UseCallBackTutorial />}
            />
             <Route
              path="/react-select-all"
              element={<ReactSelectAll />}
            />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
          </Routes>
        </Router>
      {/* </AppContext.Provider> */}
    </div>
  );
}

export default App;
