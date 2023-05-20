import styled from "styled-components";
import LoadingSpinner from "../loading/LoadingSpinner";
import PropTypes from "prop-types";

const ButtonStyles = styled.button`
     cursor: pointer;
     padding: 0 25px;
     line-height: 1;
     color: white;
     background: linear-gradient(to right bottom, ${(props) => props.theme.primary}, ${(props) => props.theme.secondary});
     border-radius: 8px;
     font-weight: 600;
     font-size: 18px;
     width: 100%;
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

const Button = ({ type = "button", onClick = () => {}, children, ...props }) => {
     const { isLoading } = props;
     const child = isLoading ? <LoadingSpinner></LoadingSpinner> : children;

     return (
          <ButtonStyles type={type} onClick={onClick} {...props}>
               {child}
          </ButtonStyles>
     );
};

Button.propTypes = {
     type: PropTypes.oneOf(["button", "submit"]).isRequired,
     onClick: PropTypes.func,
     isLoading: PropTypes.bool,
     height: PropTypes.string,
};

export default Button;
