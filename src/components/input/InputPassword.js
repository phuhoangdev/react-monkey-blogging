import { useState } from "react";
import IconEyeClose from "../icon/IconEyeClose";
import IconEyeOpen from "../icon/IconEyeOpen";
import Input from "./Input";

const InputPassword = ({ control }) => {
     const [togglePassword, setTogglePassword] = useState(false);
     if (!control) return null;
     return (
          <Input type={togglePassword ? "text" : "password"} name="password" placeholder="Enter your password" control={control}>
               {!togglePassword ? <IconEyeOpen onClick={() => setTogglePassword(true)} /> : <IconEyeClose onClick={() => setTogglePassword(false)} />}
          </Input>
     );
};

export default InputPassword;
