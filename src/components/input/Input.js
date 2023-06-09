import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyles = styled.div`
     position: relative;
     width: 100%;

     input {
          width: 100%;
          padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
          background-color: ${(props) => props.theme.grayLight};
          border-radius: 8px;
          font-weight: 500;
          border: 1px solid transparent;
          transition: all 0.2s linear;

          &::placeholder,
          &::-webkit-input-placeholder,
          &::-moz-placeholder {
               color: #84878b;
          }

          &:focus {
               background-color: white;
               border-color: ${(props) => props.theme.primary};
          }
     }

     .input-icon {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
     }
`;

const Input = ({ name = "", type = "text", children, control, ...props }) => {
     const { field } = useController({
          control,
          name,
          defaultValue: "",
     });

     return (
          <InputStyles hasIcon={children ? true : false}>
               <input id={name} type={type} {...field} {...props} />
               {children ? <div className="input-icon">{children}</div> : null}
          </InputStyles>
     );
};

export default Input;
