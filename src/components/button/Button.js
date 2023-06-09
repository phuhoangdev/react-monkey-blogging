import styled, { css } from "styled-components";
import LoadingSpinner from "../loading/LoadingSpinner";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ButtonStyles = styled.button`
     cursor: pointer;
     padding: 0 25px;
     line-height: 1;
     ${(props) =>
          props.kind === "secondary" &&
          css`
               color: ${(props) => props.theme.primary};
               background-color: white;
          `}

     ${(props) =>
          props.kind === "primary" &&
          css`
               color: white;
               background: linear-gradient(to right bottom, ${(props) => props.theme.primary}, ${(props) => props.theme.secondary});
          `}
     border-radius: 8px;
     font-weight: 600;
     font-size: 18px;
     height: ${(props) => props.height || "66px"};
     display: flex;
     justify-content: center;
     align-items: center;

     &:disabled {
          opacity: 0.5;
          pointer-events: none;
     }
`;

/**
 *
 * @param {string} type Type of button 'button' | 'submit'
 * @returns
 */

const Button = ({ type = "button", onClick = () => {}, children, kind = "primary", ...props }) => {
     const { isLoading, to } = props;
     const child = isLoading ? <LoadingSpinner></LoadingSpinner> : children;
     if (to !== "" && typeof to === "string") {
          return (
               <NavLink to={to} className="inline-block">
                    <ButtonStyles type={type} kind={kind} {...props}>
                         {child}
                    </ButtonStyles>
               </NavLink>
          );
     }

     return (
          <ButtonStyles type={type} kind={kind} onClick={onClick} {...props}>
               {child}
          </ButtonStyles>
     );
};

Button.propTypes = {
     type: PropTypes.oneOf(["button", "submit"]),
     onClick: PropTypes.func,
     isLoading: PropTypes.bool,
     height: PropTypes.string,
     kind: PropTypes.oneOf(["secondary", "primary"]),
};

export default Button;
