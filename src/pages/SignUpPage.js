import { useEffect } from "react";
import { Field } from "../components/field";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import AuthPage from "./AuthPage";
import InputPassword from "../components/input/InputPassword";

const schema = yup.object({
     fullname: yup.string().required("Fullname is required"),
     email: yup.string().email("Please enter valid email address").required("Email is required"),
     password: yup.string().min(8, "Your password must be at least 8 characters or greater").required("Password is required"),
});

const SignUpPage = () => {
     const navigate = useNavigate();

     const {
          control,
          handleSubmit,
          formState: { errors, isValid, isSubmitting },
          watch,
          reset,
     } = useForm({
          mode: "onChange",
          resolver: yupResolver(schema),
     });

     const handleSignUp = async (values) => {
          if (!isValid) return;
          // return new Promise((resolve) => {
          //      setTimeout(() => {
          //           resolve();
          //      }, 5000);
          // });

          const user = await createUserWithEmailAndPassword(auth, values.email, values.password);
          await updateProfile(auth.currentUser, {
               displayName: values.fullname,
          });
          const colRef = collection(db, "users");
          addDoc(colRef, {
               fullname: values.fullname,
               email: values.email,
               password: values.password,
          });
          toast.success("Register successfully");
          navigate("/");
     };

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
          document.title = "Register Page";
     }, []);

     return (
          <AuthPage>
               <form className="form" onSubmit={handleSubmit(handleSignUp)}>
                    <Field>
                         <Label htmlFor="fullname">Fullname</Label>
                         <Input type="text" name="fullname" placeholder="Enter your fullname" control={control} />
                    </Field>
                    <Field>
                         <Label htmlFor="email">Email address</Label>
                         <Input type="text" name="email" placeholder="Enter your email address" control={control} />
                    </Field>
                    <Field>
                         <Label htmlFor="password">Password</Label>
                         <InputPassword control={control} />
                    </Field>
                    <div className="have-account">
                         You already have an account? <NavLink to={"/sign-in"}>Login</NavLink>
                    </div>
                    <Button type="submit" className="w-full max-w[350px] mx-auto" disabled={isSubmitting} isLoading={isSubmitting}>
                         Sign Up
                    </Button>
               </form>
          </AuthPage>
     );
};

export default SignUpPage;
