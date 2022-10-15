// Library
import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
// Assets
import AuthContext from "./context/AuthContext";
// Components
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login"></Navigate>;
    }
    return children;
  };
  return (
    <div className="py-[80px] w-ful">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
