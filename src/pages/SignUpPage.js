import styled from "styled-components";
import { Field } from "../components/field";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import IconEyeClose from "../components/icon/IconEyeClose";
import { useEffect, useState } from "react";
import IconEyeOpen from "../components/icon/IconEyeOpen";
import Button from "../components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-config";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const SignUpPageStyles = styled.div`
     min-height: 100vh;
     padding: 40px;

     .logo {
          margin: 0 auto 20px;
     }

     .heading {
          text-align: center;
          color: ${(props) => props.theme.primary};
          font-weight: bold;
          font-size: 40px;
          margin-bottom: 60px;
     }
     .form {
          max-width: 600px;
          margin: 0 auto;
     }
`;

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

     const [togglePassword, setTogglePassword] = useState(false);

     useEffect(() => {
          const arrErrors = Object.values(errors);

          if (arrErrors.length > 0) {
               toast.error(arrErrors[0]?.message, {
                    pauseOnHover: false,
                    delay: 0,
               });
          }
     }, [errors]);

     return (
          <SignUpPageStyles>
               <div className="container">
                    <img className="logo" src="./assets/images/logo.svg" alt="logo" />
                    <h1 className="heading">Monkey Blogging</h1>
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
                              <Input type={togglePassword ? "text" : "password"} name="password" placeholder="Enter your password" control={control}>
                                   {!togglePassword ? (
                                        <IconEyeOpen onClick={() => setTogglePassword(true)} />
                                   ) : (
                                        <IconEyeClose onClick={() => setTogglePassword(false)} />
                                   )}
                              </Input>
                         </Field>
                         <Button
                              type="submit"
                              style={{
                                   maxWidth: 350,
                                   margin: "0 auto",
                              }}
                              disabled={isSubmitting}
                              isLoading={isSubmitting}
                         >
                              Sign Up
                         </Button>
                    </form>
               </div>
          </SignUpPageStyles>
     );
};

export default SignUpPage;
