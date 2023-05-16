import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
     return (
          <div>
               <AuthProvider>
                    <Routes>
                         <Route path="/sign-up" element={<SignUpPage />}></Route>
                    </Routes>
               </AuthProvider>
          </div>
     );
};

export default App;
