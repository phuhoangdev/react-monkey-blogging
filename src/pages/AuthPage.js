import styled from "styled-components";

const AuthPageStyles = styled.div`
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

     .have-account {
          margin-bottom: 20px;

          a {
               display: inline-block;
               color: ${(props) => props.theme.primary};
               font-weight: 500;
          }
     }
`;

const AuthPage = ({ children }) => {
     return (
          <AuthPageStyles>
               <div className="container">
                    <img className="logo" src="./assets/images/logo.svg" alt="logo" />
                    <h1 className="heading">Monkey Blogging</h1>

                    {children}
               </div>
          </AuthPageStyles>
     );
};

export default AuthPage;
