import { useEffect, useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { NavLink, useNavigate } from "react-router-dom";
import AuthPage from "./AuthPage";
import { useForm } from "react-hook-form";
import { Field } from "../components/field";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { Button } from "../components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import IconEyeOpen from "../components/icon/IconEyeOpen";
import IconEyeClose from "../components/icon/IconEyeClose";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-app/firebase-config";

const schema = yup.object({
     email: yup.string().email("Please enter valid email address").required("Email is required"),
     password: yup.string().min(8, "Your password must be at least 8 characters or greater").required("Password is required"),
});

const SignInPage = () => {
     const { userInfo } = useAuth();
     const navigate = useNavigate();
     const [togglePassword, setTogglePassword] = useState(false);

     const {
          handleSubmit,
          control,
          formState: { errors, isValid, isSubmitting },
     } = useForm({
          mode: "onChange",
          resolver: yupResolver(schema),
     });

     useEffect(() => {
          const arrErrors = Object.values(errors);

          if (arrErrors.length > 0) {
               toast.error(arrErrors[0]?.message, {
                    pauseOnHover: false,
                    delay: 0,
               });
          }
     }, [errors]);

     useEffect(() => {
          document.title = "Login Page";
          if (userInfo?.email) {
               navigate("/");
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [userInfo]);

     const handleSignIn = async (values) => {
          if (!isValid) return;
          await signInWithEmailAndPassword(auth, values.email, values.password);
          navigate("/");
     };

     return (
          <AuthPage>
               <form className="form" onSubmit={handleSubmit(handleSignIn)}>
                    <Field>
                         <Label htmlFor="email">Email address</Label>
                         <Input type="email" name="email" placeholder="Enter your email address" control={control} />
                    </Field>
                    <Field>
                         <Label htmlFor="password">Password</Label>
                         <Input type={togglePassword ? "text" : "password"} name="password" placeholder="Enter your password" control={control}>
                              {!togglePassword ? (
                                   <IconEyeOpen onClick={() => setTogglePassword(true)} />
                              ) : (
                                   <IconEyeClose onClick={() => setTogglePassword(false)} />
                              )}
                         </Input>
                    </Field>
                    <div className="have-account">
                         You have not an a account? <NavLink to={"/sign-up"}>Register an account</NavLink>
                    </div>
                    <Button
                         type="submit"
                         style={{
                              maxWidth: 350,
                              margin: "0 auto",
                         }}
                         disabled={isSubmitting}
                         isLoading={isSubmitting}
                    >
                         Sign in
                    </Button>
               </form>
          </AuthPage>
     );
};

export default SignInPage;
