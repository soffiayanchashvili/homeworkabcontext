import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { MyContext } from "./MyContext";
import { useContext } from "react";

function App() {
  const [{theme, isDark}, toggleTheme] = useContext (MyContext);
  return (
    <div className="App" style={{backgroundColor: theme.backgroundColor, color:theme.color}}>
      {/* <MyContext.Provider value={{ student }}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </MyContext.Provider> */}
    </div>
  );
}

export default App;
