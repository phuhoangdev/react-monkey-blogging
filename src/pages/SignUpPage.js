import styled from "styled-components";
import { Field } from "../components/field";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import IconEyeClose from "../components/icon/IconEyeClose";
import { useState } from "react";
import IconEyeOpen from "../components/icon/IconEyeOpen";
import Button from "../components/button/Button";

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

const SignUpPage = () => {
     const {
          control,
          handleSubmit,
          formState: { errors, isValid, isSubmitting },
          watch,
          reset,
     } = useForm({});

     const handleSignUp = (values) => {
          if (!isValid) return;
          return new Promise((resolve) => {
               setTimeout(() => {
                    resolve();
               }, 5000);
          });
     };

     const [togglePassword, setTogglePassword] = useState(false);

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
