import styled from "styled-components";

const FieldStyles = styled.div`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     row-gap: 20px;

     &:not(:last-child) {
          margin-bottom: 40px;
     }
`;

const Field = ({ children }) => {
     return <FieldStyles>{children}</FieldStyles>;
};

export default Field;
