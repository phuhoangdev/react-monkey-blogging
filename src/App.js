import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardLayout from "./modules/dashboard/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import PostManage from "./modules/post/PostManage";
import PostAddNew from "./modules/post/PostAddNew";

const App = () => {
     return (
          <div>
               <AuthProvider>
                    <Routes>
                         <Route path="/" element={<HomePage />}></Route>
                         <Route path="/sign-up" element={<SignUpPage />}></Route>
                         <Route path="/sign-in" element={<SignInPage />}></Route>
                         <Route path="*" element={<NotFoundPage />}></Route>
                         <Route path="/:slug" element={<PostDetailsPage></PostDetailsPage>}></Route>
                         <Route element={<DashboardLayout></DashboardLayout>}>
                              <Route path="/dashboard" element={<DashboardPage></DashboardPage>}></Route>
                         </Route>
                         <Route path="/manage/post" element={<PostManage></PostManage>}></Route>
                         <Route path="/manage/add-post" element={<PostAddNew></PostAddNew>}></Route>
                    </Routes>
               </AuthProvider>
          </div>
     );
};

export default App;
