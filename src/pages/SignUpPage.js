import styled from "styled-components";

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
     .field {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          row-gap: 20px;
     }
     .label {
          color: ${(props) => props.theme.grayDark};
          font-weight: 600;
          cursor: pointer;
     }
     .input {
          width: 100%;
          padding: 20px;
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
`;

const SignUpPage = () => {
     return (
          <SignUpPageStyles>
               <div className="container">
                    <img className="logo" src="./assets/images/logo.svg" alt="logo" />
                    <h1 className="heading">Monkey Blogging</h1>
                    <form className="form">
                         <div className="field">
                              <label htmlFor="fullname" className="label">
                                   Fullname
                              </label>
                              <input type="text" id="fullname" className="input" placeholder="Enter your fullname" />
                         </div>
                    </form>
               </div>
          </SignUpPageStyles>
     );
};

export default SignUpPage;
